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


//mail wave animation

// const wave2 = document.querySelector(".wave2");

// wave2.innerHTML = wave2.textContent
//   .split("")
//   .map((letter, idx) => {
//     if (letter === " ") return " ";
//     return `<span style="animation-delay:${
//       idx * 15
//     }ms" class="letter">${letter}</span>`;
//   })
//   .join("");

//   scroll animation
// let windowHeight = window.innerHeight
// const home4EventHandler = ()=>{
//     const Text = document.querySelector('.home4_textwrap')


//     if(Text.getBoundingClientRect().top < windowHeight-200){
//         setTimeout(()=>{

//         },200) 
//         window.removeEventListener('scroll',home4EventHandler)
//     }
// }
//  window.addEventListener('scroll',home4EventHandler)

// $(window).scroll(function() {
// 	var scroll = $(document).scrollTop();
// 	var minusH = $(document).innerHeight() / 10;
// 	var target1 = $('.box1').offset().top;
// 	if (scroll > target1 - minusH) {
//         const wave2 = document.querySelector(".wave2");

//         wave2.innerHTML = wave2.textContent
//           .split("")
//           .map((letter, idx) => {
//             if (letter === " ") return " ";
//             return `<span style="animation-delay:${
//               idx * 15
//             }ms" class="letter">${letter}</span>`;
//           })
//           .join("");
// 	}
// });

// const boxes = document.querySelectorAll('.box');

// window.addEventListener('scroll',checkBoxes);

// checkBoxes();

// function checkBoxes(){
// 	const triggerBottom = window.innerHeight / 5 * 4;
	
// 	boxes.forEach(box=>{
// 		const boxTop = box.getBoundingClientRect().top;
		
// 		if(boxTop < triggerBottom) {

//             const wave2 = document.querySelector(".wave2");

//             wave2.innerHTML = wave2.textContent
//               .split("")
//               .map((letter, idx) => {
//                 if (letter === " ") return " ";
//                 return `<span style="animation-delay:${
//                   idx * 15
//                 }ms" class="letter">${letter}</span>`;
//               })
//               .join("");
            
// 		} else {
//             const wave2 = document.querySelector(".wave2");

//             wave2.innerHTML = wave2.textContent
//               .split("")
//               .map((letter, idx) => {
//                 if (letter === " ") return " ";
//                 return `<span style="animation-delay:${
//                   idx * 15
//                 }ms">${letter}</span>`;
//               })
//               .join("");
// 		}
// 	})
// }


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