/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/config.js
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
 * 注册导航栏的配置
 * @param {Object} config 配置数据
 */
Navigator.prototype.register = function(config){
    this.config = config;
};

/**
 * 显示导航栏到指定的容器
 * @param {HTMLElement} container 导航栏容器，即要放置导航栏的DOM元素
 */
Navigator.prototype.render = function(container){
    this.container = container;
    //TODO: render things.
};

var ifttpu = ifttpu || {};
ifttpu.navigator = new Navigator();
