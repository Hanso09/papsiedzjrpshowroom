
const saleModal = document.getElementById('productModal');
const saleModalImage = document.getElementById('modalProductImage');
const saleModalName = document.getElementById('modalProductName');
const saleModalPrice = document.getElementById('modalProductPrice');
const saleModalOriginalPrice = document.getElementById('modalProductOriginalPrice');
const saleModalDiscountBadge = document.getElementById('modalDiscountBadge');
const saleCloseBtn = document.querySelector('.close-modal');


function openSaleModal(imgDiv) {
    const name = imgDiv.getAttribute('data-name');
    const price = imgDiv.getAttribute('data-price');
    const originalPrice = imgDiv.getAttribute('data-original-price');
    const image = imgDiv.getAttribute('data-image');
    const discount = imgDiv.getAttribute('data-discount');

    saleModalImage.src = image;
    saleModalName.textContent = name;
    saleModalPrice.textContent = price;
    saleModalOriginalPrice.textContent = originalPrice;
    saleModalDiscountBadge.textContent = discount;

    saleModal.style.display = 'block';
    saleModal.style.opacity = '1';
    saleModal.classList.add('active');
}


function closeSaleModal() {
    saleModal.classList.remove('active');
    saleModal.style.opacity = '0';
    setTimeout(() => {
        saleModal.style.display = 'none';
        // Reset modal content
        saleModalImage.src = '';
        saleModalName.textContent = '';
        saleModalPrice.textContent = '';
        saleModalOriginalPrice.textContent = '';
        saleModalDiscountBadge.textContent = '';
        saleModal.style.opacity = '';
    }, 300);
    document.body.style.overflow = '';
}


if (saleCloseBtn) {
    saleCloseBtn.addEventListener('click', closeSaleModal);
}

window.addEventListener('click', (e) => {
    if (e.target === saleModal) {
        closeSaleModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && saleModal.style.display === 'block') {
        closeSaleModal();
    }
});


function initializeSaleViewMoreButtons() {
    const saleViewMoreButtons = document.querySelectorAll('.sale-item .view-more-btn');
    saleViewMoreButtons.forEach(button => {
        button.removeEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openSaleModal(this);
        });
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openSaleModal(this);
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeSaleViewMoreButtons);


window.openSaleModal = openSaleModal;
window.closeSaleModal = closeSaleModal;
window.initializeSaleViewMoreButtons = initializeSaleViewMoreButtons; 