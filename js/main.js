/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/main.js
 * desc:    主页业务逻辑
 * author:  songao
 * date:    $Date: 2011-03-01 00:03:53 +0800 (星期二, 01 十一月 2011) $
 */

/**
 * 显示一个普通模块
 * @param {HTMLElement} container 模块容器元素
 * @param {Object} data 模块的配置数据
 * @param {string=} opt_icon_class 可选，链接前面的图标（圆点、小方块...）
 */
function renderBlock(container, data, opt_icon_class){
    var headTpl = [
            '<div class="block-title">#{title}</div>',
            '<div class="block-body">',
                '<table class="block-table">'
        ].join(''),
        rowTpl = [
                    '<tr>',
                        '<td class="#{icon_class}">&nbsp;</td>',
                        '<td><a href="#{url}" target="_blank">#{text}</a></td>',
                    '</tr>'
        ].join(''),
        bottomTpl = [
                '</table>',
            '</div>'
        ].join(''),
        htmlArr = [];
    htmlArr.push($.format(headTpl, {
        'title' : data.title
    }));
    $.each(data.links, function(index, linkObj){
        htmlArr.push($.format(rowTpl, {
            'url' : linkObj.url,
            'text' : linkObj.text,
            'icon_class' : (opt_icon_class || '')
        }));
    });
    htmlArr.push(bottomTpl);
    container.innerHTML = htmlArr.join('');
}

/**
 * 显示出版物模块
 * @param {HTMLElement} container 模块容器元素
 * @param {Object} data 模块的配置数据
 */
function renderPublishBlock(container, data){
    var headTpl = [
            '<div class="block-title">#{title}</div>',
            '<div class="block-body">',
                '<table class="block-table">'
        ].join(''),
        rowTpl = [
                    '<tr>',
                        '<td><a href="#{url}" target="_blank"><img src="#{img}" width="55" height="68" /></a></td>',
                        '<td><a href="#{url}" target="_blank">#{text}</a></td>',
                    '</tr>'
        ].join(''),
        bottomTpl = [
                '</table>',
                '<div class="more-ctner"><a href="#{more_url}">more&gt;&gt;</a></div>',
            '</div>'
        ].join(''),
        htmlArr = [];
    htmlArr.push($.format(headTpl, {
        'title' : data.title
    }));
    $.each(data.links, function(index, linkObj){
        htmlArr.push($.format(rowTpl, {
            'url' : linkObj.url,
            'text' : linkObj.text,
            'img' : linkObj.img
        }));
    });
    htmlArr.push($.format(bottomTpl, {
        'mor_url' : data.more_url
    }));
    container.innerHTML = htmlArr.join('');
}

/**
 * 显示图片轮播模块
 * @param {HTMLElement} container 模块容器元素
 * @param {Object} data 模块的配置数据
 */
function renderSlideBlock(container, data){
    var tpl = '<li><a href="#{url}" target="_blank"><img src="#{img}" /></a></li>',
        htmlArr = [];
    $.each(data, function(index, item){
        htmlArr.push($.format(tpl, {
            'url' : item.url,
            'img' : item.img
        }));
    });
    container.innerHTML = htmlArr.join('');
}

$(function() {
    //生成和显示导航栏
    ifttpu.navigator.render($('#nav')[0], ifttpu.config.navigator, '首页');
    
    //显示左上角模块：中心公告
    renderBlock($('#left_top_block')[0], ifttpu.config.left_top_block, 'block-icon-dot');
    
    //显示左下角模块：出版物
    renderPublishBlock($('#left_bottom_block')[0], ifttpu.config.left_bottom_block);
    
    //显示中间靠左模块：学术研究
    renderBlock($('#center_left_block')[0], ifttpu.config.center_left_block, 'block-icon-arrow');
    
    //显示中间靠右模块：合作交流
    renderBlock($('#center_right_block')[0], ifttpu.config.center_right_block, 'block-icon-arrow');
    
    //显示右上角模块：品牌活动
    renderBlock($('#right_top_block')[0], ifttpu.config.right_top_block, 'block-icon-dot');
    
    //显示右下角模块：高峰论坛
    renderBlock($('#right_bottom_block')[0], ifttpu.config.right_bottom_block, 'block-icon-dot');
    
    //显示图片轮播模块
    renderSlideBlock($('#slide_ctner')[0], ifttpu.config.slide);
    
    //启动图片轮播
    var $o = $(".top-slide"),
        ks = $o.find("ol").Oslide({
            slidetag:$o.find("ol>li"),
            easing:"easeInOutCirc",
            direct:'up',
            time:6000,
            speed:450
        });
});