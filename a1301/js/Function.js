function addFavorite(sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

function setHomepage() {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(window.location.href);
    } else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', window.location.href);
    } else {
        alert('您的浏览器不支持自动自动设置首页, 请使用浏览器菜单手动设置!');
    }
}
function Show(msg) {
    art.dialog({
        width: 260,
        time: 3,
        content: msg
    });
}
function ShowAndRedirect(msg, url) {
    art.dialog({
        icon: 'succeed',
        content: msg,
        ok: function () {
            window.location.href = url;
            return false;
        }
    });

}
function Alert(msg, type) {
    switch (type) {
        case "error":
            art.dialog({
                background: '#600', // 背景色
                opacity: 0.87, // 透明度
                icon: 'error',
                content: msg,
                ok: true
            });
            break;
        case "info":
            art.dialog({
                icon: 'succeed',
                content: msg,
                ok: true
            });
            break;
        case "question":
            art.dialog({
                icon: 'question',
                content: msg,
                ok: function () {
                    return false;
                },
                cancelVal: '关闭',
                cancel: true
            });
            break;
        case "warning":
            art.dialog({
                icon: 'warning',
                content: msg,
                ok: true
            });
            break;
    }

}

//将页面上所有的复选框选中或取消选中
function SelectAll() {

    var frm = event.srcElement.form;
    if (!frm)
        return;
    var stat = frm.elements['CheckAll'].checked;
    var e;
    for (var i = 0; i < frm.elements.length; i++) {
        e = frm.elements[i];
        if (e.type == "checkbox" && (!e.disabled))
            e.checked = stat;
    }
}


function AddProductToCart(proId) {
    $.ajax({
        type: "get",
        url: "/ashx/ProductHandler.ashx",
        data: "Method=AddProductToCart&pid=" + proId,
        success: function (msg) {
            switch (msg) {
                case 'notlogin':
                    ShowAndRedirect('您尚未登录或登录已超时，请重新登录', '/usercenter/login.aspx');
                    break;
                case '1':
                    art.dialog({
                        icon: 'succeed',
                        content: '商品已成功加入购物车',
                        okVal: '继续购物',
                        ok: function () {
                            window.location.href = "/products.aspx";
                            return false;
                        },
                        cancelVal: '去购物车结算',
                        cancel: function () {
                            window.location.href = "/productCart.aspx";
                            return false;
                        }
                    });
                    break;
                case '0':
                    Alert('未能将商品成功加入购物车，商品库存不足');
                    break;

            }
        },
        error: function (msg) {
            Alert(msg);
        }
    });
}

