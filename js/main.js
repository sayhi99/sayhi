$(document).ready(function(){
    $('.pf_con_slider').slick();

    $("#ac01").click(function(){
        $("#am01").fadeIn();
    });
    $("#ac02").click(function(){
        $("#am02").fadeIn();
    });
    $("#ac03").click(function(){
        $("#am03").fadeIn();
    });
    $("#ac04").click(function(){
        $("#am04").fadeIn();
    });
    $("#ac05").click(function(){
        $("#am05").fadeIn();
    });
    $("#ac06").click(function(){
        $("#am06").fadeIn();
    });
    // $("#ac07").click(function(){
    //     $("#am07").fadeIn();
    // });
    $("#ac08").click(function(){
        $("#am08").fadeIn();
    });
    $("#ac09").click(function(){
        $("#am09").fadeIn();
    });
    $("#ac10").click(function(){
        $("#am10").fadeIn();
    });
    $("#ac11").click(function(){
        $("#am11").fadeIn();
    });
    $("#ac12").click(function(){
        $("#am12").fadeIn();
    });
    $("#ac13").click(function(){
        $("#am13").fadeIn();
    });
    $(".close").click(function(){
        $(".artwork_modal").fadeOut();
    });

});

$(window).on('load', function(){
    load('#artwork_list_wrap', '4');
    $("#js-more-wrap").on("click", function(){
        load("#artwork_list_wrap",'4','#js-more-wrap');
    })
});
function load(id, cnt, btn){
    var art_list = id + " .con_load:not(.active)";
    var art_length = $(art_list).length;
    var art_total_cnt;
    if (cnt < art_length){
        art_total_cnt = cnt ;
    }else{
        art_total_cnt = art_length;
        $(btn).hide();
        $('.all_art').show();
    }
    $(art_list + ":lt(" + art_total_cnt + ")").addClass("active");
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = resolve;
    img.onerror = reject;
  });
}

function porloadImages(srcs) {
  return Promise.all(srcs.map(preloadImage));
}