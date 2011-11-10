//====================================================================================================
// [插件名称] jQuery Oslide
//----------------------------------------------------------------------------------------------------
// [作者网名] AriesJia  
// [邮    箱] ariesjia00@hotmail.com
// [作者博客] http://www.btorange.com/
// [更新日期] 2010-04-20
// [版 本 号] 0.1.3
//====================================================================================================
(function($) {
    $.fn.Oslide = function(setting) {
        var ps =$.fn.extend({
            slidetag:null,
            btntag:null,
            cur:0,
            direct:"up",
            height:null,
            width:null,
            btnClass:"hover",
            length:null,
            bffunc: function() {
            },
            easing:"",
            speed:350,
            time:4000       // 如果等于null  就没有自动滚动
        }, setting);
        var $self = $(this);
        var events = {
            __init: function(e) {
                $self.addClass("direct-"+ps.direct);
                ps.direct = ps.direct.toLowerCase();
                ps.oldslidetag=ps.slidetag;
                ps.slidetag=(ps.slidetag==null)?$self.children():ps.slidetag;
                ps.length=(ps.length==null)?ps.slidetag.length:ps.length;
                ps.height=(ps.height==null)?ps.slidetag.eq(0).height():ps.height;
                ps.width=(ps.width==null)?ps.slidetag.eq(0).width():ps.width;
                $self.wrap( function() {
                    return '<div class="Oslide-wrap" />';
                })
                if(!ps.btntag) {
                    var s = "<ul class='lbtn'>";
                    for(var i=0;i<ps.length;i++) {
                        s+="<li><a href='javascript:void(0)'>"+Number(i+1)+"</a></li>";
                    }
                    $self.parent().append(s+"</ul>");
                    ps.btntag=$self.parent().find('.lbtn');
                }
                ps.btntag.children().bind("mouseover", function() {
                    m = ps.btntag.find("."+ps.btnClass).index();
                    if(m==$(this).index())
                        return false;
                    events.__addFlag($(this).index());
                    events.__slide($(this).index());
                });
                if(ps.direct.toLowerCase()=="right")
                    $self.css({
                        "width":ps.width*ps.length,
                        "left":-ps.width*(ps.length-1)
                    })
                if(ps.direct.toLowerCase()=="down") {
                    var r = [];
                    for(var i=0;i<ps.slidetag.length;i++)
                        r.push(ps.slidetag.eq(i).clone())
                    $self.html("");
                    for(var i=0;i<r.length;i++)
                        $(r[i]).prependTo($self);
                    $self.css("top",-ps.height*(ps.length-1))
                }
                events.__addFlag(ps.cur);
                events.__setPosition(ps.cur);
                if(ps.time!=null)
                    events.__addTimelistener();
            },
            __slide: function(next) {
                var og = {
                    "cg" :next - ps.cur,
                    "bfuc": function() {
                    },
                    "fuc": function() {
                    },
                    "scollHei": function() {
                        var h;
                        if(ps.direct=="up")
                            h=-ps.height*ps.cur;
                        else if(ps.direct=="down")
                            h=ps.height*(ps.cur-ps.length+1)
                        else
                            h=0;
                        return h;
                    },
                    "scollWid": function() {
                        var w;
                        if(ps.direct=="left")
                            w=-ps.width*ps.cur;
                        else if(ps.direct=="right")
                            w=ps.width*(ps.cur-ps.length+1)
                        else
                            w=0;
                        return w;
                    }
                };
                if((!next&&next!=0)||(ps.cur==ps.length-1&&next==0)) {
                    if(ps.cur ==ps.length-1) {
                        ps.cur = 0;
                        og.bfuc = function() {
                            if(ps.direct=="down")
                                ps.slidetag.slice(1,ps.length).prependTo($self);
                            else
                                ps.slidetag.slice(0,ps.length-1).appendTo($self);
                            events.__resetPosition();
                        }
                        og.scollHei= function() {
                            var h;
                            if(ps.direct=="up")
                                h=-ps.height;
                            else if(ps.direct=="down")
                                h=-ps.height*(ps.length-2);
                            else
                                h=0;
                            return h;
                        }
                        og.scollWid= function() {
                            var w;
                            if(ps.direct=="left")
                                w=-ps.width;
                            else if(ps.direct=="right")
                                w=-ps.width*(ps.length-2);
                            else
                                w=0;
                            return w;
                        }
                        og.fuc = function() {
                            ps.slidetag=(ps.oldslidetag==null)?$self.children():ps.slidetag;
                            if(ps.direct=="down")
                                ps.slidetag.slice(ps.length-1,ps.length).prependTo($self);
                            else
                                $self.children().slice(0,1).appendTo($self);
                            events.__resetPosition();
                        }
                    } else
                        ps.cur++;
                    cg=1;
                } else
                    ps.cur = next;
                og.bfuc();
                ps.bffunc();
                $self.stop().animate({
                    'top':og.scollHei(),
                    'left':og.scollWid()
                },ps.speed,ps.easing, function() {
                    og.fuc()
                });
                events.__addFlag(ps.cur);
            },
            __addFlag: function(n) {
                ps.btntag.children().eq(n).addClass(ps.btnClass).siblings().removeClass(ps.btnClass);
            },
            __addTimelistener: function(n) {
                ps.myScroll = setInterval( function() {
                    events.__slide()
                },ps.time);
                ps.btntag.children().add(ps.slidetag).hover( function() {
                    clearInterval(ps.myScroll);
                }, function() {
                    ps.myScroll = setInterval( function() {
                        events.__slide()
                    },ps.time);
                });
            },
            __resetPosition: function() {
                if(ps.direct=="left"||ps.direct=="up")
                    $self.css({
                        "top":"0px",
                        "left":0
                    });
                else if(ps.direct=="right")
                    $self.css({
                        "left":-ps.width*(ps.length-1)
                    });
                else if(ps.direct=="down")
                    $self.css({
                        "top":-ps.height*(ps.length-1)
                    });
            },
            __setPosition: function(n) {
                n=n||0;
                if(ps.direct=="left")
                    $self.css("left",-n*ps.width);
                else if(ps.direct=="right")
                    $self.css("left",-(ps.length-n-1)*ps.width)
                if(ps.direct=="up")
                    $self.css("top",-n*ps.height);
                else if(ps.direct=="down")
                    $self.css("top",-(ps.length-n-1)*ps.height)
            }
        }
        events.__init();
        for(var event in events) {
            var e = "Oslide." + event;
            $(this).unbind(e);
            $(this).bind(e, events[event]);
        }
    };
})(jQuery);