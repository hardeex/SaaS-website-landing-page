// declaring variables
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
// Add this JavaScript code to show and hide the modal when the "Privacy Policy" link is clicked.
const privacyLink = document.querySelector('a[href="#privacy-policy"]');
const privacyModal = document.getElementById('privacyModal');
const acceptButton = document.getElementById('acceptButton');
const agreeCheckbox = document.getElementById('agreeCheckbox');



// handling the preloader and setting the timer to 5 seconds
$(document).ready(function() {
    // Hide the preloader when the page is fully loaded
    $(".preloader").fadeOut(5000); 
});


// handling the nav menu in a responsive mode
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}


// handling the search form
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}


// handling the scroll view
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}





// handling the testimonial section slides/carousal
$(document).ready(function () {
    const testimonials = $('.testimonial');
    const dots = $('.testimonial-dot');
    let index = 0;

    function showTestimonial(index) {
        testimonials.removeClass('active');
        dots.removeClass('active');
        testimonials.eq(index).addClass('active');
        dots.eq(index).addClass('active');
    }

    function nextTestimonial() {
        testimonials.eq(index).removeClass('active');
        dots.eq(index).removeClass('active');
        index = (index + 1) % testimonials.length;
        testimonials.eq(index).addClass('active');
        dots.eq(index).addClass('active');
    }

    showTestimonial(index);
    setInterval(nextTestimonial, 5000);

    dots.on('click', function () {
        const dotIndex = $(this).index();
        if (dotIndex !== index) {
            testimonials.eq(index).removeClass('active');
            dots.eq(index).removeClass('active');
            index = dotIndex;
            testimonials.eq(index).addClass('active');
            dots.eq(index).addClass('active');
        }
    });
});



// handling the accordion in the featured section
$(document).ready(function () {
    $(".accordion-arrow").click(function () {
        var accordion = $(this).closest('.accordion');
        accordion.find('.accordion-content').slideToggle();
    });
});



// navigate up and down button

$(document).ready(function() {
    // Show the "Scroll to Top" button when the user scrolls down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    // Scroll to the top when the button is clicked
    $('#scroll-to-top a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500); // Adjust the duration as needed
    });
});


// handling the privacy policy modal class
privacyLink.addEventListener('click', () => {
  privacyModal.style.display = 'block';
});

acceptButton.addEventListener('click', () => {
  if (agreeCheckbox.checked) {
    privacyModal.style.display = 'none';
    // You can add additional logic here, e.g., store the user's acceptance in local storage.
  }
});

// Close the modal if the user clicks outside the modal content.
window.addEventListener('click', (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = 'none';
  }
});
