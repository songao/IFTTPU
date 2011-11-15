/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/util.js
 * desc:    自定义的常用函数
 * author:  songao
 * date:    $Date: 2011-03-01 00:03:53 +0800 (星期二, 01 十一月 2011) $
 */

var ifttpu = ifttpu || {};
ifttpu.util = {
    /**
     * 加入收藏夹功能
     */
    addFavorite : function(){
        var url = ifttpu.config.favorite_url || window.location.href,
            title = document.title;
        try {
            window.external.AddFavorite(url, title);
        }catch(e){
            try{
                window.sidebar.addPanel(title, url, '');
            }catch(e){
                alert("加入收藏失败，请直接使用浏览器的收藏功能！");
            }
        }
    },
    
    /**
     * 设为首页功能
     * @param {HTMLElement} domEle 触发改动作的dom元素
     */
    setHome : function(domEle) {
        var url = ifttpu.config.favorite_url || window.location.href;
        try{
            domEle.style.behavior = 'url(#default#homepage)';
            domEle.setHomePage(url);
        }catch(e){
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                }catch (e) {
                    alert("此操作被浏览器拒绝，请直接使用浏览器的设置默认首页功能！");
                }
                var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                prefs.setCharPref('browser.startup.homepage', url);
            }
        }
    },
    
    autoResizePic : function(height, img){
        var result = {};
        if(img.offsetHeight > height){
            result.height = height;
            result.width = parseInt((height * img.offsetWidth) / img.offsetHeight, 10);
            img.height = result.height;
            img.width = result.width;
        }
    }
};
