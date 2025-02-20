     // Slideshow functionality
        let index = 0;
        function showSlides() {
            let slides = document.querySelectorAll('.slides img');
            slides.forEach(slide => slide.classList.remove('active'));
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }

