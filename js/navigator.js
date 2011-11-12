/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/navigator.js
 * desc:    导航功能
 * author:  songao
 * date:    $Date: 2011-03-01 00:03:53 +0800 (星期二, 01 十一月 2011) $
 */

/**
 * 导航栏的构造函数
 * @constructor
 */
function Navigator(){
    this.config = null;
    this.container = null;
}

/**
 * 显示导航栏到指定的容器
 * @param {HTMLElement} container 导航栏容器，即要放置导航栏的DOM元素
 * @param {Object} config 配置数据
 */
Navigator.prototype.render = function(container, config, current){
    var me = this,
        navTpl = '<div class="nav">#{items}</div>',
        itemTpl = [
            '<div class="nav-item#{extra_class}">',
                '<a href="#{url}">#{text}</a>',
            '</div>'
        ].join(''),
        seperator = '<div class="nav-seperator"></div>',
        itemArr = [];
    me.container = container;
    me.config = config;
    me.current = current;
    $.each(me.config, function(index, item){
        itemArr.push(
            $.format(itemTpl, {
                'url' : item.location,
                'text' : item.name,
                'extra_class' : (item.name == current ? ' current' : '')
            })
        );
    });
    me.container.innerHTML = $.format(navTpl, {
        'items' : itemArr.join(seperator)
    });
    me.bindEvent();
};

/**
 * 绑定导航栏事件
 */
Navigator.prototype.bindEvent = function(){
    var me = this;
};

//实例化导航栏
var ifttpu = ifttpu || {};
ifttpu.navigator = new Navigator();
