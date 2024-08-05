
$(document).ready(function(){

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

//more btn 클릭시 리스트 노출
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

//이미지 로딩 개선
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


//scroll animation

window.addEventListener('scroll', function() {
    var motionTargets = document.querySelectorAll('.moti');
    var winHeight = window.innerHeight;

    motionTargets.forEach(function(target, index) {
        var rect = target.getBoundingClientRect();
        if (rect.top - winHeight < -100) {
            if (!target.classList.contains('mt_on')) {
                target.classList.add('mt_on');
                animateSkills(target);
            }
        } else {
            if (target.classList.contains('mt_on')) {
                target.classList.remove('mt_on');
                resetSkills(target);
            }
        }
    });
});


//mail wave animation

const wave2 = document.querySelector(".wave2");

function createLetterSpan(letter, idx) {
    if (letter === " ") return " ";
    return `<span style="animation-delay:${idx * 15}ms" class="letter">${letter}</span>`;
}

function setWaveInnerHTML() {
    wave2.innerHTML = wave2.textContent.split("").map(createLetterSpan).join("");
}

setWaveInnerHTML();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setWaveInnerHTML();
        } else {
            wave2.innerHTML = wave2.textContent; // 초기 상태로 되돌림
        }
    });
}, {
    threshold: 0.5 // 요소가 50% 이상 보일 때 감지
});

observer.observe(document.querySelector('.wave2'));


//스킬바 애니메이션

function animateSkills(target) {
    var skillFills = target.querySelectorAll('.skill_fill');
    skillFills.forEach(function(skillFill) {
        setTimeout(function() {
            var skillWidth = skillFill.getAttribute('data-skill');
            skillFill.style.width = skillWidth;
        }, 500); // Delay 
    });
}

function resetSkills(target) {
    var skillFills = target.querySelectorAll('.skill_fill');
    skillFills.forEach(function(skillFill) {
        skillFill.style.width = '0';
    });
}