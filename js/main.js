$(function(){
    const mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        autoplay: {
            delay: 4000
        },
    });

    const subSwiper = new Swiper(".subSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 10,
        breakpoints: {
            720: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });


    $(".main_slider .controller .left").click(function(e){
        e.preventDefault();
        mainSwiper.slidePrev();
    });
    $(".main_slider .controller .right").click(function(e){
        e.preventDefault();
        mainSwiper.slideNext();
    });

    $(".sub_slider .controller .left").click(function(e){
        e.preventDefault();
        subSwiper.slidePrev();
    });
    $(".sub_slider .controller .right").click(function(e){
        e.preventDefault();
        subSwiper.slideNext();
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300){
            $(".btn_top").fadeIn();
            $("header .top").hide();
            $("header").addClass("active");
        }
        else{
            $(".btn_top").fadeOut();
            $("header .top").show();
            $("header").removeClass("active");
        }
    
    });

    $(".btn_top").click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    $("#start header .tab").click(function(){
        if(!$(this).hasClass("active")){
        $("#start header #mobile").slideDown(300);
        $(this).addClass("active");
        }
        else{
        $("#start header #mobile").slideUp(300);
        $(this).removeClass("active");
        }
    });

	  let winw=0;

    $(window).resize(function(){
        winw=$(window).width();
        if(winw > 500 && $("#start header .tab").hasClass("active")){
            $("#start header #mobile").hide();
            $("#start header .tab").removeClass("active");
        }
    });


});