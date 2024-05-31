const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});

//COUNTDOWN
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "31 July 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
	//Testimonials slideshow
	document.addEventListener("DOMContentLoaded", function() {
		const testimonials = document.querySelectorAll('.testimonial');
		const prevButton = document.querySelector('.prev');
		const nextButton = document.querySelector('.next');
		let currentIndex = 0;
		let slideInterval;

		function showTestimonial(index) {
			testimonials.forEach((testimonial, i) => {
				testimonial.classList.remove('active');
				if (i === index) {
					testimonial.classList.add('active');
				}
			});
		}

		function nextTestimonial() {
			currentIndex = (currentIndex + 1) % testimonials.length;
			showTestimonial(currentIndex);
		}

		function prevTestimonial() {
			currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
			showTestimonial(currentIndex);
		}

		function startAutoSlide() {
			slideInterval = setInterval(nextTestimonial, 3000);
		}

		function stopAutoSlide() {
			clearInterval(slideInterval);
		}

		nextButton.addEventListener('click', () => {
			stopAutoSlide();
			nextTestimonial();
			startAutoSlide();
		});

		prevButton.addEventListener('click', () => {
			stopAutoSlide();
			prevTestimonial();
			startAutoSlide();
		});

		startAutoSlide();
	});