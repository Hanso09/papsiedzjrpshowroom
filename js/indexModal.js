
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-modal');


function openModal(element) {
    if (!element) return;

    let productCard, nameElement, priceElement, imageElement, descriptionElement;
    

    const container = element.classList.contains('product-image-container') ? element : element.closest('.product-image-container');
    if (!container) return;

 
    if (container.closest('.hero-product')) {
        productCard = container.closest('.hero-product');
        nameElement = productCard.querySelector('.product-title');
        priceElement = productCard.querySelector('.current-price');
        imageElement = container.querySelector('.hero-image');
        descriptionElement = productCard.querySelector('.product-description');
    } else {
        productCard = container.closest('.product-item');
        if (!productCard) return;
        nameElement = productCard.querySelector('.product-name');
        priceElement = productCard.querySelector('.product-price');
        imageElement = container.querySelector('img');
        // Use default description for non-hero products
        descriptionElement = {
            textContent: 'Experience premium quality and performance with our JRP products. Each item is carefully crafted to meet the highest standards of durability and style.'
        };
    }


    if (nameElement) document.getElementById('modalProductName').textContent = nameElement.textContent.trim();
    if (priceElement) document.getElementById('modalProductPrice').textContent = priceElement.textContent.trim();
    if (imageElement) {
        const modalImage = document.getElementById('modalProductImage');
        modalImage.src = imageElement.src;
        modalImage.alt = nameElement ? nameElement.textContent.trim() : 'Product Image';
    }
    if (descriptionElement) {
        document.getElementById('modalProductDescription').textContent = descriptionElement.textContent.trim();
    }


    modal.style.display = 'block';
    requestAnimationFrame(() => {
        modal.classList.add('active');
    });


    document.body.style.overflow = 'hidden';
}


function closeModal() {
    modal.classList.remove('active');
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}


document.addEventListener('DOMContentLoaded', function() {

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
});

// Make functions available globally
window.openModal = openModal;
window.closeModal = closeModal; 