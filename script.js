// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

window.onload = () => navSlide();








////////form openAI playground///////

// Get the form element
let form = document.querySelector("#formId");
 
// Listen for a submit event
form.addEventListener("submit", function(e){
 
    // Instantiate an empty object for the form data
    let formData = {};
 
    // Get the form data elements and loop over them
    let elements = this.elements;
    for (let i = 0; i < elements.length; i++){
        let item = elements.item(i);
        
        // Add the data to the formData object
        formData[item.name] = item.value;
    }
 
    // Do something with the form data
    console.log(formData);
 
    // Stop the form from submitting
    e.preventDefault();
});



///////TRANSITIONING/////

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
	  // Make sure this.hash has a value before overriding default behavior
	  if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
  
		// Store hash
		var hash = this.hash;
  
		// Using jQuery's animate() method to add smooth page scroll
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
  
		  // Add hash (#) to URL when done scrolling (default click behavior)
		  window.location.hash = hash;
		});
	  } // End if
	});
  });
  