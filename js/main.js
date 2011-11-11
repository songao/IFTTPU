$(function() {
    //注册导航栏数据并显示导航栏
    ifttpu.navigator.register(ifttpu.config.navigator);
    ifttpu.navigator.render($('nav'));
    
    //图片轮播
    var $o = $(".top-slide");
    var ks = $o.find("ol").Oslide({
        slidetag:$o.find("ol>li"),
        easing:"easeInOutCirc",
        direct:'down',
        time:6000,
        speed:450
    });
});