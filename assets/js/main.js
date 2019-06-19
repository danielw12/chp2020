$('.nav-link').on('click', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 600);
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $("#transparent").addClass("scrolled");
        
    } else {
        $("#transparent").removeClass("scrolled");
    }
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $("#transparent").addClass("fixed-top");
        
    } else {
        $("#transparent").removeClass("fixed-top");
    }
});


$('#carouselExample').on('slide.bs.carousel', function (e) {

  
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});





  $(document).ready(function() {
/* show lightbox when clicking a thumbnail */
    $('a.thumb').click(function(event){
      event.preventDefault();
      var content = $('.modal-body');
      content.empty();
        var title = $(this).attr("title");
        $('.modal-title').html(title);        
        content.html($(this).html());
        $(".modal-profile").modal({show:true});
    });

  });