document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('.product-title').textContent;
            alert(`${productName} has been added to your cart!`);
            
        });
    });
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-to-cart')) {
                const productName = this.querySelector('.product-title').textContent;
                
            
                alert(`Viewing details for ${productName}`);
            }
        });
    });
    
});

javascriptCopydocument.addEventListener("DOMContentLoaded", function() {
  const banner = document.querySelector('.banner-container');
  
  function fadeIn() {
    let opacity = 0;
    const timer = setInterval(function() {  
      if (opacity >= 1) {
        clearInterval(timer);
      }
      banner.style.opacity = opacity;
      opacity += 0.05;
    }, 30);
  }
  
  const bannerText = document.querySelector('.banner-container h1');
  bannerText.style.transform = 'translateX(0)';
  
  const shopNowButton = document.querySelector('.banner-container .shop-now-btn');
  shopNowButton.addEventListener('click', function(e) {
    e.preventDefault();
    const productsSection = document.querySelector('#products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/shop';
    }
  });

  setTimeout(function() {
    banner.style.height = banner.offsetHeight + 'px';
    banner.style.overflow = 'hidden';
    
    const timer = setInterval(function() {
      if (banner.offsetHeight <= 0) {
        banner.style.display = 'none';
        clearInterval(timer);
      }
      banner.style.height = (banner.offsetHeight - 2) + 'px';
    }, 10);
  }, 10000);
  
  fadeIn();
});
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  
function scrollProductSlider(btn, dir) {
  const container = btn.closest('.product-slider-container');
  const slider = container.querySelector('.product-slider');
  const card = slider.querySelector('.product-item');
  if (!card) return;
  const cardWidth = card.offsetWidth + 32; // 32px = gap (2rem)
  slider.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
}

// Add event listener for the badge
window.addEventListener('DOMContentLoaded', function() {
  var badge = document.querySelector('.new-products-badge');
  if (badge) {
    badge.addEventListener('click', function() {
      var section = document.getElementById('new-arrivals');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
