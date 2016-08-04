jQuery(document).ready(function($){

$('html').removeClass('no-js').addClass('js');

$('.hamburger').click(function() {

    $('html').addClass('slideme');

});

svg4everybody();

$('html').find('.recommended-teachers').eq(1).hide();

$('.site-wrap').click(function(e) {
    if($('html').hasClass('slideme')) {
        $('html').removeClass('slideme');
        e.preventDefault();
    }

});


$('#menu-city-town .parent > a').click(function(e) {
    $('.sub-menu').hide();
    $('.menu-city-town_container p').remove();
    $('.parent > a').removeClass('current');
    e.preventDefault();
    $(this).addClass('current').next().prepend( "<p class='u-mb- block-heading '>Instruments/Services:</p>" ).show();
    $('html,body').animate({
        scrollTop: $(".current").offset().top},
        'slow');

});



setTimeout(function () {

    $(".live-edit-button").css("position", "relative").appendTo("header");
    $(".free .live-edit-button").css("position", "relative").appendTo("h1");

    /*$('.single-post.logged-in h2').click(function() {
        $('.live-edit-button').click();
    });*/

}, 2000);


$('.content-toggle').on('click',function(e){
    $('.toggled-content').hide();
    var currentAttrValue=jQuery(this).attr('href');
    $(currentAttrValue).fadeIn(400);
    //alert(currentAttrValue);
    e.preventDefault();
});

/*
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000);
        return false;
      }
    }
  });

$('.bio-toggle').click(function() {
    $('.slide-in-content').toggleClass('slide-in-content--show');

});

*/


/*

    Some Tabbed content

*/
/*
$('.tab__links a').on('click',function(e){
    var currentAttrValue=jQuery(this).attr('href');
    $('.tabs '+ currentAttrValue).fadeIn(400).siblings().hide();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    e.preventDefault();
  });

$('.tab').hide();
$('.tab.active').show();
*/
/*

    Fit Vids

*/
/*
$(".video-container").fitVids();
*/
/*

    Progressive enhanced nav close



$('.site-wrap').click(function() {
    if ($('.nav-trigger').is(':checked')) {
    $('.nav-trigger').click();
}});

*/


/*

	Content Toggler



$('.toggle-content-trigger').on('click',function (e) {
    e.preventDefault();
});

$(".toggle-content-trigger").click(function () {
	$(this).toggleClass('active-button');
  var toggled_content_container_id = $(this).attr("href");
  $(toggled_content_container_id).slideToggle();
});
*/
/*

	Typed



$(function(){

    $("#typed").typed({
        strings: ["web applications", "web apps", "etc etc etc", "<a href='contact-us'>get in touch</a>"],
        typeSpeed: 190,
        backDelay: 700,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,

    });

});

*/
/*

    Flexslider



$('.flexslider').flexslider({
animation: "fade"
});
*/
/*

    Fancybox




$(".fancybox").fancybox();

$(".various").fancybox({ maxWidth	: 800, maxHeight	: 600, fitToView	: false, width	: '70%', height	: '70%', autoSize	: false, closeClick	: false, openEffect	: 'none', closeEffect	: 'none' });
*/
});
