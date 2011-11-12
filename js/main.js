$(function() {
    //生成和显示导航栏
    ifttpu.navigator.render($('#nav')[0], ifttpu.config.navigator, '首页');
    
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