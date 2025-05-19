
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalProductImage');
const modalName = document.getElementById('modalProductName');
const modalPrice = document.getElementById('modalProductPrice');
const modalOriginalPrice = document.getElementById('modalProductOriginalPrice');
const modalDiscountBadge = document.getElementById('modalDiscountBadge');
const closeBtn = document.querySelector('.close-modal');


function openModal(button) {
    const card = button.closest('.product-card');
    const image = button.getAttribute('data-image');
    const name = card.querySelector('.product-title').textContent;
    const price = card.querySelector('.product-price').textContent;
    const originalPrice = button.getAttribute('data-original-price');

    modalImage.src = image;
    modalName.textContent = name;

 
    if (originalPrice) {
        modalOriginalPrice.textContent = originalPrice;
        modalPrice.textContent = price;

        const originalNum = parseInt(originalPrice.replace(/[^0-9]/g, ''));
        const saleNum = parseInt(price.replace(/[^0-9]/g, ''));
        const discount = Math.round(((originalNum - saleNum) / originalNum) * 100);
        modalDiscountBadge.textContent = `-${discount}%`;
        

        modalOriginalPrice.style.display = 'block';
        modalDiscountBadge.style.display = 'inline-block';
    } else {

        modalPrice.textContent = price;

        if (modalOriginalPrice) modalOriginalPrice.style.display = 'none';
        if (modalDiscountBadge) modalDiscountBadge.style.display = 'none';
    }

    modal.style.display = 'block';
    modal.style.opacity = '0';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });

    document.body.style.overflow = 'hidden';

    const modalAddToCartBtn = modal.querySelector('.modal-add-to-cart');
    if (modalAddToCartBtn) {
        modalAddToCartBtn.onclick = function() {
            alert('Product added to cart!');
        };
    }
}


function closeModal() {
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
  
        modalImage.src = '';
        modalName.textContent = '';
        modalPrice.textContent = '';
        if (modalOriginalPrice) modalOriginalPrice.style.display = 'none';
        if (modalDiscountBadge) modalDiscountBadge.style.display = 'none';
    }, 300);

    document.body.style.overflow = '';
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

function initializeViewMoreButtons() {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    viewMoreButtons.forEach(button => {
        button.removeEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openModal(this);
        });
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openModal(this);
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeViewMoreButtons);

// Export functions for external use
window.openModal = openModal;
window.closeModal = closeModal;
window.initializeViewMoreButtons = initializeViewMoreButtons; 