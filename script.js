$(document).ready(function() {
    // Hide the preloader when the page is fully loaded
    $(".preloader").fadeOut(5000); // Adjust the duration as needed
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}



window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}






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




$(document).ready(function () {
    $(".accordion-arrow").click(function () {
        var accordion = $(this).closest('.accordion');
        accordion.find('.accordion-content').slideToggle();
    });
});



// navigate up and down

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

