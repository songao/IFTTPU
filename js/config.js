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
    'favorite_url' : 'http://ysxj.pku.edu.cn',
    
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
     * 图片轮播
     */
    'slide' : [{
        'img' : 'upload_pics/image023.jpg',
        'url' : './content.html?module=announce&id=2'
    },{
        'img' : 'upload_pics/image056.jpg',
        'url' : './content.html?module=cooperate&id=2'
    },{
        'img' : 'upload_pics/image041.jpg',
        'url' : './content.html?module=activity&id=3'
    },{
        'img' : 'upload_pics/image050.jpg',
        'url' : './content.html?module=activity&id=5'
    }]
};
