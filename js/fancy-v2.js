const coordinates = document.querySelector(".hoverable");
const eye = document.querySelector("#Watching-Eye");
const pyramid = document.querySelector("#Pyramid");
const logo = document.querySelector("#Logo--Hero");
const manifesto = document.querySelector("#Manifesto");

// 2. turns cursor coordinates into css variable
// coordinates.addEventListener("mousemove", (e) => {
// 	coordinates.style.setProperty("--x", -e.offsetX + "px");
// 	coordinates.style.setProperty("--y", -e.offsetY + "px");
// });

// 3. eye follows cursor
// window.addEventListener("mousemove", (event) => {
// 	const x = -(window.innerWidth / 2 - event.pageX) / 20;
// 	const y = -(window.innerHeight / 2 - event.pageY) / 20;
// 	eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
// });

$(document).ready(function () {
	var moody = document.createElement("audio");
	moody.src = "/v2/audio/AUDIO_7654.mp3";
	moody.volume = 0.01;
	moody.loop = true;

	$(pyramid).hover(
		function () {
// 			$(this).addClass("awake");
// 			$(logo).addClass("lit");
// 			$("#Release-Date").addClass("lit");
// 			$("#Pyramid--Holder").addClass("lit");
// 			$("body").addClass("poking");
			moody.play();
		},
		function () {
// 			$(this).removeClass("awake");
// 			$(logo).removeClass("lit");
// 			$("#Release-Date").removeClass("lit");
// 			$("#Pyramid--Holder").removeClass("lit");
// 			$("body").removeClass("poking");
			moody.pause();
		}
	);
});

// $(eye).click(function () {
// 	$("Logo--Hero").remove();
// 	$("body").addClass("poked");
// 	$(pyramid).removeClass("floating animating");
// 	// $("#Pyramid--Bottom").addClass("lit");
// 	setTimeout(function () {
// 		$("#Eye").addClass("recede");
// 	}, 500);
// 	setTimeout(function () {
// 		$("body").addClass("starry");
// 		mySwiper.autoplay.start();
// 	}, 2000);
// 	// setTimeout(function () {
// 	// 	$("#Eye").removeClass("recede");
// 	// }, 3000);
// });

var mySwiper = new Swiper(".swiper-container", {
	loop: true,
	speed: 1000,
	centeredSlides: true,
// 	autoplay: true,
    autoplay: {
        delay: 2000,
    },
	spaceBetween: 40,
	slidesPerView: "auto",
	loopFillGroupWithBlank: false,
	keyboard: {
		enabled: true,
		onlyInViewport: true
	}
});

// Video stuff
var myVideo = document.getElementById("Video");

$("#Rubble, #Tele").click(function () {
	$("body").addClass("video-playing");
	myVideo.play();
});
$("#Close-Video").click(function () {
	$("body").removeClass("video-playing");
	myVideo.pause();
});

document.getElementById("Video").addEventListener("ended", myHandler, false);
function myHandler(e) {
	// What you want to do after the event
	$("body").removeClass("video-playing");
}

// 4. pyramid lighting
// $("body").on("mousemove", function (lightSource) {
// 	if (lightSource.pageX - this.offsetLeft < $(this).width() / 2) {
// 		$("#Pyramid--Left").addClass("lit");
// 		$("#Pyramid--Right").removeClass("lit");
// 	} else {
// 		$("#Pyramid--Right").addClass("lit");
// 		$("#Pyramid--Left").removeClass("lit");
// 	}
// });

$(window).on("beforeunload", function () {
	$("body").hide();
	$(window).scrollTop(0);
});

function applyBeforeunload() {
	$(window).on("beforeunload", function () {
		$("body").hide();
		$(window).scrollTop(0);
	});
}
applyBeforeunload();
$(document).on("click", "[samepage]", function () {
	$(window).off("beforeunload");
	setTimeout(applyBeforeunload, 1000);
});


// // this is currently just to demo error state. 
// $("#Nothing-Btn").click(function () {
// 	$("#Turn-Back, #Turning-Back").addClass("active");
// 	$("body").addClass("no-scroll");
// });
// $("#Turning-Back").click(function () {
// 	$("#Turn-Back, #Turning-Back").removeClass("active");
// 	$("body").removeClass("no-scroll");
// });

$("#Blinky").click(function () {
    $(this).addClass("poked");
    $("#Flashy").addClass("active");
    setTimeout(function () {
		$("#Flashy").remove();
	}, 50);
    $(".knowledge").addClass("revealed")
    console.log('test');
});
$(".knowledge").click(function () {
    $(".countersign").addClass("revealed"); 
    $(".countersign").attr("href", "/v2/archives/DOCUMENT_7421_1.pdf");
});

$(".enter-gate").click(function () {
   $("body").removeClass("no-scroll");
   $("#Gate").addClass("passed");
});

$(function() {
    var door = $("#Door");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 800) {
            door.removeClass('doorTop').addClass("doorLeft");
        } else {
            door.removeClass("doorLeft").addClass('doorTop');
        }
    });
});

// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 500, function(){

//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

$(".card").click(function () {
	$(this).toggleClass('active').siblings().removeClass('active');
});

const ancients = document.querySelector("#The-Ancients--Grid");

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(ancients).addClass('observed');
      }
    })
});

observer.observe(ancients);