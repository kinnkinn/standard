// 버틀을 클릭하면 전체메뉴를 보이게 한다
$(".tit .btn").click(function(){
    $("#content_nav").slideToggle();
    // 버튼을 클릭하면 버튼이미지를 바꾼다
    $(".tit .btn").toggleClass("on");
}); 

// 배너 슬라이드
$(".ban").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

// col6 갤러리
$(".gallery_img").slick({
    autoplay: true,
    arrows: false,
    fade: true,
    pauseOnHover: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    speed: 300
});

// col6 갤러리 - 조작버튼
$(".play").click(function(){
    $('.gallery_img').slick('slickPlay');
});
$(".stop").click(function(){
    $('.gallery_img').slick('slickPause');
});
$(".prev").click(function(){
    $(".gallery_img").slick('slickPrev');
});
$(".next").click(function(){
   $(".gallery_img").slick('slickNext'); 
});

// col3 - 갤러리 팝업이미지1(레이어팝업)
// 이미지를 클릭하면 레이어 팝업을 띄운다
$(".layer").click(function(){
//    $("#layer").css("display","block");
    $("#layer").slideDown(200);
});
// 레이어팝업의 close버튼을 누르면 닫힌다
$("#layer .close").click(function(){
//    $("#layer").css("display","none");
    $("#layer").slideUp(200);
});   

// col3 - 갤러리 팝업이미지2(윈도우팝업)
// 이미지를 클릭하면 윈도우 팝업을 띄운다
$(".window").click(function(){
    window.open("popup.html", "popup01", "width=800, height=570, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

// col3 - 갤러리 팝업이미지3(라이트박스)
// 이미지를 클릭하면 라이트박스 갤러리를 띄운다
$(document).ready(function(){
    $(".lightgallery").lightGallery(); 
});

// col5 - 탭메뉴
var $tab_list = $(".tabmenu");

$tab_list.find("ul ul").hide(); 
$tab_list.find("li.active > ul").show();

function tabmenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
}

$tab_list.find("ul>li>a").click(tabmenu).focus(tabmenu);

