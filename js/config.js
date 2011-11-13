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
    'favorite_url' : 'http://iffpu.pku.edu.cn',
    
    /**
     * 导航栏数据
     */
    'navigator' : [{
        name: '首页',
        location: '/',
        sub: []
    },{
        name: '中心概况',
        location: '/introduction',
        sub: []
    },{
        name: '中心公告',
        location: '/announce',
        sub: []
    },{
        name: '学术研究',
        location: '/research',
        sub: []
    },{
        name: '合作交流',
        location: '/corporate',
        sub: []
    },{
        name: '组织架构',
        location: '/organization',
        sub: []
    },{
        name: '品牌活动',
        location: '/activity',
        sub: []
    },{
        name: '出版物',
        location: '/publishment',
        sub: []
    },{
        name: '高峰论坛',
        location: '/forum',
        sub: []
    }],
    
    /**
     * 左上角的模块：中心公告
     */
    'left_top_block' : {
        'title' : '中心公告',
        'links' : [{
            'text' : '我院召开研究员季度恳谈会',
            'url' : '/news?id=123'
        },{
            'text' : '2011全球大学创意博览会启动仪式',
            'url' : '/news?id=112'
        },{
            'text' : '2011文化产业与创意经济学术会议',
            'url' : '/news?id=443'
        },{
            'text' : '中国文化产业发展战略学术研讨会',
            'url' : '/news?id=156'
        },{
            'text' : '“设计改变生活，创意推动产业”',
            'url' : '/news?id=7897'
        },{
            'text' : '我院召开研究员季度恳谈会',
            'url' : '/news?id=123'
        },{
            'text' : '2011全球大学创意博览会启动仪式',
            'url' : '/news?id=123'
        },{
            'text' : '2011文化产业与创意经济学术会议',
            'url' : '/news?id=123'
        },{
            'text' : '中国文化产业发展战略学术研讨会',
            'url' : '/news?id=123'
        },{
            'text' : '“设计改变生活，创意推动产业”',
            'url' : '/news?id=123'
        }]
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
    }],
    
    /**
     * 中间下方靠左模块：学术研究
     */
    'center_left_block' : {
        'title' : '学术研究',
        'links' : [{
            'text' : '[媒体传真]林毅夫：以国有以国以国有大行为主的中国金融结果需结构结果需要变革',
            'url' : '/forum?id=123'
        },{
            'text' : '[新闻中心]第十三届 NBEF NB NBER-CCER年会成功举办（2） （2）（2）',
            'url' : '/news?id=112'
        },{
            'text' : '[新闻中心]第十三届 NBEF NB NBER-CCER年会成功举办',
            'url' : '/news?id=443'
        },{
            'text' : '[新闻中心]第十三届 NBEF NB NBER-CCER年会成功举办（1） （1）（1）',
            'url' : '/news?id=7897'
        },{
            'text' : '[人才招聘]中国宏观经济眼就经济研究中心博士后招聘启示启示启示',
            'url' : '/joinus?id=156'
        },{
            'text' : '[新闻中心]笑语追忆同窗情同窗情欢歌共叙事业心',
            'url' : '/news?id=123'
        }]
    },
    
    /**
     * 中间下方靠右模块：合作交流
     */
    'center_right_block' : {
        'title' : '合作交流',
        'links' : [{
            'text' : '汇率与货币系列评论之四十之四十七意义周其人：人命比汇率比比汇率问题的重心...',
            'url' : '/forum?id=123'
        },{
            'text' : '李力行：农房抵押与农地制农农地制度创新',
            'url' : '/news?id=112'
        },{
            'text' : '黄益平：中国亟待重建诚信建建诚信',
            'url' : '/news?id=443'
        },{
            'text' : '汇率与货币系列评论之四十之之四十六意义周其仁：财政购回的购购汇的三条筹资通...',
            'url' : '/news?id=7897'
        },{
            'text' : '陈平受邀加入《世界经济杂志寂静杂志》创始编委会',
            'url' : '/joinus?id=156'
        },{
            'text' : '姚洋：中国经济何时超越美国超越美国？',
            'url' : '/news?id=123'
        }]
    },
    
    /**
     * 右上方模块：品牌活动
     */
    'right_top_block' : {
        'title' : '品牌活动',
        'links' : [{
            'text' : '[媒体传真]林毅夫：以国有一大型为主的中国金融机构需要变革',
            'url' : '/forum?id=123'
        },{
            'text' : '[新闻中心]第十三届NBER.NICCER年会精彩瞬间',
            'url' : '/news?id=112'
        },{
            'text' : '[新闻中心]第十三届NBER CCER年会成功举办',
            'url' : '/news?id=443'
        },{
            'text' : '[新闻中心]第十三届NBER.NICCER年会精彩瞬间（1）',
            'url' : '/news?id=7897'
        },{
            'text' : '[人才招聘]中国宏观经济研究中心博士后招聘启示启示',
            'url' : '/joinus?id=156'
        }]
    },
    
    /**
     * 右下方模块：高峰论坛
     */
    'right_bottom_block' : {
        'title' : '高峰论坛',
        'links' : [{
            'text' : '[媒体传真]林毅夫：以国有一大型为主的中国金融机构需要变革',
            'url' : '/forum?id=123'
        },{
            'text' : '[新闻中心]第十三届NBER.NICCER年会精彩瞬间',
            'url' : '/news?id=112'
        },{
            'text' : '[新闻中心]第十三届NBER CCER年会成功举办',
            'url' : '/news?id=443'
        },{
            'text' : '[新闻中心]第十三届NBER.NICCER年会精彩瞬间（1）',
            'url' : '/news?id=7897'
        },{
            'text' : '[人才招聘]中国宏观经济研究中心博士后招聘启示启示',
            'url' : '/joinus?id=156'
        }]
    }
};
