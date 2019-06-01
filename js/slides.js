var slideIndex = 0;
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");

		showSlides();

		function showSlides() {    
		    var i;    
		    for (i = 0; i < slides.length; i++) {
		        slides[i].style.display = "none"; 
		    }for (i = 0; i < dots.length; i++) {
			      dots[i].className = dots[i].className.replace(" active", "");
			  }
		    slideIndex++;
		    if (slideIndex> slides.length) {slideIndex = 1} 
		    slides[slideIndex-1].style.display = "block"; 
			  dots[slideIndex-1].className += " active"; 
		    setTimeout(showSlides, 3500); // Set seconds
		}

		function currentSlide(no) {
		    var i;    
		    for (i = 0; i < slides.length; i++) {
		        slides[i].style.display = "none"; 
		    }
		    slideIndex = no;
		    slides[no-1].style.display = "block";
		}

		function plusSlides(n) {
		  var newslideIndex = slideIndex + n;
		  if(newslideIndex < 4 && newslideIndex > 0){
		     currentSlide(newslideIndex);
		  }
		}