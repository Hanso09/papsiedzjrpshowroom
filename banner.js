let bannerCurrentIndex = 0;
        const bannerSlides = document.querySelector('.banner-slides');
        const bannerDots = document.querySelectorAll('.banner-dot');
        const bannerTotalSlides = document.querySelectorAll('.banner-slide').length;
        
        let bannerSlideInterval = setInterval(autoBannerSlide, 5000);
        
        function autoBannerSlide() {
            bannerCurrentIndex = (bannerCurrentIndex + 1) % bannerTotalSlides;
            updateBannerPosition();
        }
        
        function moveBannerSlide(direction) {
            clearInterval(bannerSlideInterval);
            
            bannerCurrentIndex = (bannerCurrentIndex + direction + bannerTotalSlides) % bannerTotalSlides;
            updateBannerPosition();

            bannerSlideInterval = setInterval(autoBannerSlide, 5000);
        }
        
        function currentBannerSlide(index) {
            clearInterval(bannerSlideInterval);
            
            bannerCurrentIndex = index;
            updateBannerPosition();
            
            bannerSlideInterval = setInterval(autoBannerSlide, 5000);
        }
        
        function updateBannerPosition() {
            bannerSlides.style.transform = `translateX(-${bannerCurrentIndex * 25}%)`;
            
            bannerDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === bannerCurrentIndex);
            });
        }

        const bannerSliderContainer = document.querySelector('.banner-slider');
        bannerSliderContainer.addEventListener('mouseenter', () => {
            clearInterval(bannerSlideInterval);
        });
        
        bannerSliderContainer.addEventListener('mouseleave', () => {
            bannerSlideInterval = setInterval(autoBannerSlide, 5000);
        });