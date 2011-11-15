/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/inner.js
 * desc:    内页业务逻辑
 * author:  songao
 * date:    $Date: 2011-03-01 00:03:53 +0800 (星期二, 01 十一月 2011) $
 */

/**
 * 获取当前页数据 
 * @param {Object} data 当前板块所有数据
 * @param {number} currentPage 当前页码
 */
function getCurrentPageData(data, currentPage){
    var keys = T.object.keys(data),
        numPerPage = ifttpu.config.numPerPage,
        curData = [],
        key, item;
    currentPage = parseInt(currentPage);
    for(var i = numPerPage * (currentPage - 1); i < numPerPage * currentPage; i++){
        key = keys[i];
        if(key && data[key]){
            item = T.object.clone(data[key]);
            item.id = key;
            curData.push(item);
        }
    }
    return curData;
}

/**
 * 显示板块列表
 * @param {HTMLElement} container 容器元素
 * @param {Object} data 当前page的数据
 * @param {string} moduleName 板块的名称
 */
function renderModuleList(container, data, moduleName){
    var headTpl = [
            '<div class="module-crumb">您现在的位置：<a href="./index.html">首页</a> &gt; #{moduleCNName}</div>',
            '<h2 class="module-title">#{moduleCNName}</h2>',
            '<div class="module-list-ctner">',
                '<table class="module-table">',
                    '<tr>',
                        '<th style="text-align:left">标题</th>',
                        '<th>发表日期</th>',
                    '</tr>'
        ].join(''),
        rowTpl = [
                    '<tr>',
                        '<td class="module-list-url"><a href="?module=#{moduleName}&id=#{article_id}">#{article_title}</a></td>',
                        '<td class="module-list-date">#{article_date}</td>',
                    '</tr>'
        ].join(''),
        bottomTpl = [
                '</table>',
            '</div>',
            '<div id="pagerBox" class="pager"></div>'
        ].join(''),
        htmlArr = [];
    htmlArr.push(T.format(headTpl, {
        'moduleCNName' : ifttpu.config.module_map[moduleName]
    }));
    T.object.each(data, function(item, key){
        htmlArr.push(T.format(rowTpl, {
            'moduleName' : moduleName,
            'article_id' : item.id,
            'article_title' : item.title,
            'article_date' : item.date
        }));
    });
    htmlArr.push(bottomTpl);
    container.innerHTML = htmlArr.join('');
}

/**
 * 显示文章内容
 * @param {HTMLElement} container 容器元素
 * @param {Object} data 当前文章的数据
 * @param {string} moduleName 板块的名称
 */
function renderContent(container, data, moduleName){
    var contentTpl = [
            '<div class="module-crumb">您现在的位置：<a href="./index.html">首页</a> &gt; <a href="?module=#{moduleName}">#{moduleCNName}</a></div>',
            '<div class="module-body">',
                '<h2 class="article-title">#{article_title}</h2>',
                '<div class="article-info">发表日期： #{article_date}</div>',
                '<div class="article-content">#{article_content}</div>',
                '<div class="article-operation">',
                    '<a href="javascript:window.print();">[打印页面]</a>&nbsp;&nbsp;',
                    '<a href="javascript:window.close();">[关闭页面]</a>',
                '</div>',
                '<div class="article-warning">转载本网文章请注明出处</div>',
            '</div>'
        ].join(''),
        htmlArr = [];
    htmlArr.push(T.format(contentTpl, {
        'moduleName' : moduleName,
        'moduleCNName' : ifttpu.config.module_map[moduleName],
        'article_date' : data.date,
        'article_title' : data.title,
        'article_content' : data.content
    }));
    container.innerHTML = htmlArr.join('');
}

$(function() {
    var config = ifttpu.config,
        numPerPage = config.numPerPage,
        params = T.url.queryToJson(window.location.href),
        moduleName = params['module'],
        id = params['id'],
        page = params['page'],
        data = ifttpu.module[moduleName].data;
    //生成和显示导航栏
    ifttpu.navigator.render($('#nav')[0], config.navigator, config.module_map[moduleName]);
    
    if(typeof id == 'undefined'){//列表页
        page = page || 1;
        //显示列表内容
        var currentData = getCurrentPageData(data, page);
        renderModuleList(T.g('content'), currentData, moduleName);
        
        //显示pager
        var pager = new baidu.ui.Pager({
            beginPage: 1,
            endPage: Math.ceil(T.object.keys(data).length / numPerPage) + 1,
            currentPage: parseInt(page, 10),
            itemCount: 5,
            ongotopage: function(obj) {
                obj.page;
            },
            element: "pagerBox",
            autoRender: true,
            leftItemCount: 2,
            tplHref: T.format('?module=#{moduleName}&page=#{pageTpl}', {
                'moduleName' : moduleName,
                'pageTpl' : '#{page}'
            })
        });
    }else{//内容页
        renderContent(T.g('content'), data[id], moduleName);
    }
});