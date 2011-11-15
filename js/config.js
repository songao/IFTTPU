/*
 * 北京大学影视戏剧研究中心官方网站
 * Copyright 2011 IFTTPU All rights reserved.
 *
 * path:    js/config.js
 * desc:    配置信息
 * author:  songao
 * date:    $Date: 2011-03-01 00:03:53 +0800 (星期二, 01 十一月 2011) $
 */

var ifttpu = ifttpu || {};

ifttpu.config = {
    /**
     * 点击“加入收藏”或“设为主页”时，添加到收藏夹或设置为主页的网址
     */
    'favorite_url' : 'http://ifttpu.pku.edu.cn',
    
    /**
     * 对于列表页，每页显示的条数
     */
    'numPerPage' : 5,
    
    /**
     * 导航栏数据
     */
    'navigator' : [{
        name: '首页',
        location: './index.html',
        sub: []
    },{
        name: '中心概况',
        location: './content.html?module=introduction',
        sub: []
    },{
        name: '中心公告',
        location: './content.html?module=announce',
        sub: []
    },{
        name: '学术研究',
        location: './content.html?module=research',
        sub: []
    },{
        name: '合作交流',
        location: './content.html?module=cooperate',
        sub: []
    },{
        name: '组织架构',
        location: './content.html?module=organization',
        sub: []
    },{
        name: '品牌活动',
        location: './content.html?module=activity',
        sub: []
    },{
        name: '出版物',
        location: './content.html?module=publishment',
        sub: []
    },{
        name: '高峰论坛',
        location: './content.html?module=forum',
        sub: []
    }],
    
    /**
     * 模块名称到其中文名称的映射
     */
    'module_map' : {
        'introduction' : '中心概况',
        'announce' : '中心公告',
        'research' : '学术研究',
        'cooperate' : '合作交流',
        'organization' : '组织架构',
        'activity' : '品牌活动',
        'publishment' : '出版物',
        'forum' : '高峰论坛'
    },
    
    /**
     * 左下角的模块：出版物
	 * 说明：图片尺寸应该为(55像素*68像素)
     */
    'left_bottom_block' : {
        'title' : '出版物',
        'links' : [{
            'img' : 'book_pics/book1.jpg',
            'text' : '《影视戏剧学季刊》<br />第10卷<br />第1期',
            'url' : '/publish?id=123'
        },{
            'img' : 'book_pics/book2.jpg',
            'text' : '《影视戏剧学季刊》<br />第10卷<br />第2期',
            'url' : '/publish?id=112'
        },{
            'img' : 'book_pics/book3.jpg',
            'text' : '《影视戏剧学季刊》<br />第10卷<br />第3期',
            'url' : '/publish?id=443'
        }],
        'more_url' : '/publish/index.html'
    },
    
    /**
     * 图片轮播
	 * 说明：图片尺寸应该为(512像素*305像素)
     */
    'slide' : [{
        'img' : 'slide_pics/slide1.jpg',
        'url' : '/news?id=1213'
    },{
        'img' : 'slide_pics/slide2.jpg',
        'url' : '/news?id=1663'
    },{
        'img' : 'slide_pics/slide3.jpg',
        'url' : '/news?id=17873'
    },{
        'img' : 'slide_pics/slide4.jpg',
        'url' : '/news?id=1278'
    }]
};
