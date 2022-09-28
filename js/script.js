/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

$(document).ready(function(){
    owl = $(".owl-carousel").owlCarousel({
        loop: true,
        smartSpeed: 1500,
        autoWidth: true,
        autoplay:true,
		center:true,
        autoplayTimeout:5000,
        mouseDrag: false,
        touchDrag: false,
        nav: true,
        navText: ["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        dots: true,
        slideTransition: 'ease-in-out'
    });

    var x = 1;
    $("#play-button").hide();

    owl.on('changed.owl.carousel', function(e) {
        owl.trigger('stop.owl.autoplay');
        if (x == 1) {
            owl.trigger('play.owl.autoplay');
        }
    });

    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay',[5000]);
        x = 1;
        $("#play-button").hide();
        $("#stop-button").show();
    });
  
    $('.stop').on('click', function(){
        owl.trigger('stop.owl.autoplay');
        x = 0;
        $("#stop-button").hide();
        $("#play-button").show();
    });
  });

  //Делегируем события кнопок next prev по умолчанию нашим кнопкам, которые могут находится ыне контейнера слайдера
//	var owl=$(".owl-carousel");
//	owl.owlCarousel();
	//$(".next") - находим нашу кнопку
//	$(".next").click(function(){
//		owl.trigger("next.owl.carousel");
//	});
//	$(".prev").click(function(){
//		owl.trigger("prev.owl.carousel");
//	});