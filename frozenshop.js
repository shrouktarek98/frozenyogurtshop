/*jslint plusplus:true, evil:true */
/*global console, alert , $, jquery  */
$(document).ready(function () {
    "use strict";
    var s = $('#apper_img').css('backgroundImage'),
        n = $('#bttn2').css('backgroundImage'),
        m = $('#bttn3').css('backgroundImage');
    $('#apper_img').click(function () {
        if (s === "none") {
            s = $('#apper_img').css('backgroundImage');
        }
        
       
        if ($('#apper_img').css('backgroundImage') === s) {
            $('#apper_img').css('backgroundImage', 'url("img/mobile/mobile-close.png")');

        } else {
            $('#apper_img').css('backgroundImage', 'url("img/mobile/mobile-menu.png")');
        }
    });

    function buttonChoice(value, img, bttn, classShow) {
        if (value === "none") {
            value = img;
        }
       
        if (img === value) {
            bttn.css('backgroundImage', 'url("img/mobile/mobile-collapse.png")');
            classShow.show();

        } else {
            bttn.css('backgroundImage', 'url("img/mobile/mobile-expand.png")');
            classShow.hide();
        }
    }
    $('#bttn2').click(function () {
        buttonChoice(n, $('#bttn2').css('backgroundImage'), $(this), $('.class_show'));
    });
    $('#bttn3').click(function () {
        buttonChoice(m, $('#bttn3').css('backgroundImage'), $(this), $('.class_show2'));
    });
    $(window).on("resize mousemove", function () {
        if ($(this).width() <= 558) {
            $('#bttn2, #bttn3').show();
            $('.add, .add2').hide();
        } else {
            $('#bttn2, #bttn3').hide();
            
            $('.class_show, .class_show2').hide();
            $('#about').one("mouseenter", function () {
                $('.add').show();
            });
            $('#about').one("mouseleave", function () {
                $('.add').hide();
            });
            $('#blog').one("mouseenter", function () {
                $('.add2').show();
            });
            $('#blog').one("mouseleave", function () {
                $('.add2').hide();
            });
        }
    });
    

    function button_rotate_front(front, back) {
        $(front).css({
            transform: "rotateY(180deg)"
        });
        $(back).css({
            transform: "rotateY(360deg)"
        });
    }
    function button_rotate_back(front, back) {
        $(front).css({
            transform: "rotateY(360deg)"
        });
        $(back).css({
            transform: "rotateY(180deg)"
        });
    }
    
    
    $('#button1').click(function () {
        button_rotate_front($('.front-face1'), $('.back-face1'));
    });
    $('#button3').click(function () {
        button_rotate_back($('.front-face1'), $('.back-face1'));
    });
    $('#button2').click(function () {
        button_rotate_front($('.front-face2'), $('.back-face2'));
    });
    $('#button4').click(function () {
        button_rotate_back($('.front-face2'), $('.back-face2'));
    });
   
    
});


