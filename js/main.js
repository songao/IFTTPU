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
 * 获取一个普通板块的数据
 * @param {string} moduleName 板块名称
 * @param {number} count 需要从该板块中取出多少条数据
 * @param {number} text_width 对于文字过多的标题，按text_width进行截取
 * @return {
 *     'title': string,
 *     'links': Array.<{'text': string, 'url': string, 'img' : string=}>,
 *     'more_url': string
 * }
 */
function getModuleData(moduleName, count, text_width){
    var mdata = {},
        moduleCNName = ifttpu.config.module_map[moduleName],
        data = ifttpu.module[moduleName].data,
        keys = T.object.keys(data),
        total = keys.length,
        item;
    mdata.title = moduleCNName;
    mdata.links = [];
    for(var i = 0; i < Math.min(total, count); i++){
        item = data[keys[i]];
        mdata.links.push({
            'text' : (text_width ? T.string.fast_ellipse(item.title, text_width) : item.title),
            'url' : T.format('content.html?module=#{module_name}&id=#{article_id}', {
                'module_name' : moduleName,
                'article_id' : keys[i]
            }),
            'img' : (item.img || '')
        });
    }
    mdata.more_url = T.format('content.html?module=#{module_name}', {
        'module_name' : moduleName
    });
    return mdata;
}

/**
 * 获取主页中所要显示的数据
 * @return {
 *     'left_top_block': Object,
 *     'left_bottom_block': Object,
 *     'center_left_block': Object,
 *     'center_right_block': Object,
 *     'right_top_block': Object,
 *     'right_bottom_block': Object
 * }
 */
function getMainPageData(){
    var config = {};
    config.left_top_block = getModuleData('announce', 10, 180);
    config.left_bottom_block = getModuleData('publishment', 3);
    config.center_left_block = getModuleData('research', 6);
    config.center_right_block = getModuleData('cooperate', 6);
    config.right_top_block = getModuleData('activity', 5, 350);
    config.right_bottom_block = getModuleData('forum', 5, 350);
    return config;
}

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
        'more_url' : data.more_url
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
    var data = getMainPageData();
    
    //生成和显示导航栏
    ifttpu.navigator.render($('#nav')[0], ifttpu.config.navigator, '首页');
    
    //显示左上角模块：中心公告
    renderBlock($('#left_top_block')[0], data.left_top_block, 'block-icon-dot');
    
    //显示左下角模块：出版物
    renderPublishBlock($('#left_bottom_block')[0], data.left_bottom_block);
    
    //显示中间靠左模块：学术研究
    renderBlock($('#center_left_block')[0], data.center_left_block, 'block-icon-arrow');
    
    //显示中间靠右模块：合作交流
    renderBlock($('#center_right_block')[0], data.center_right_block, 'block-icon-arrow');
    
    //显示右上角模块：品牌活动
    renderBlock($('#right_top_block')[0], data.right_top_block, 'block-icon-dot');
    
    //显示右下角模块：高峰论坛
    renderBlock($('#right_bottom_block')[0], data.right_bottom_block, 'block-icon-dot');
    
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