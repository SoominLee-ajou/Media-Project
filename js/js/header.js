$(document).ready(function(){

    $(".header_container header a .scroll_down").hide();

    $("header").each(function(){
        var $win=$(window);
        var $header=$(this);
        var hot=$header.offset().top;
        
        $win.scroll(function(){
            if($win.scrollTop()>hot){
                $(".header_container").css({
                    backgroundColor:'rgba(255,255,255,0.9)',
                    boxShadow:'1px 1px 1px #eee'
                });
                $(".header_container header .mainmenu>li").css({
                    color:'#222'
                });
                $(".header_container header .mainmenu>li>a").css({
                    color:'#222'
                });
                $(".header_container header a .scroll_up").css({display:'none'});
                $(".header_container header a .scroll_down").css({display:'block'});
            }else{
                $(".header_container").css({
                    backgroundColor:'rgba(255,255,255,0)',
                    boxShadow:'none'
                });
                $(".header_container header .mainmenu>li").css({
                    color:'#fff'
                });
                $(".header_container header .mainmenu>li>a").css({
                    color:'#fff'
                });
                $(".header_container header a .scroll_up").css({display:'block'});
                $(".header_container header a .scroll_down").css({display:'none'});
            }
        });

    $win.trigger("scroll");
    });

    $('.theme i').removeClass( 'upside' );

    $(".theme").click(function(){
        $(".submenu").slideToggle(300);
        $(".theme i").toggleClass('upside');
    });

//------------------------------------------
});