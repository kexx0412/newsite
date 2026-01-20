// Get DOM elements
const modal = document.getElementById('orderModal');
const productModal = document.getElementById('productModal');
const productModal2 = document.getElementById('productModal2');
const productModal3 = document.getElementById('productModal3');
const productModal4 = document.getElementById('productModal4');
const cartModal = document.getElementById('cartModal');
const closeModalBtn = document.getElementById('closeModal');
const closeProductModalBtn = document.getElementById('closeProductModal');
const closeProductModal2Btn = document.getElementById('closeProductModal2');
const closeProductModal3Btn = document.getElementById('closeProductModal3');
const closeProductModal4Btn = document.getElementById('closeProductModal4');
const closeCartModalBtn = document.getElementById('closeCartModal');
const orderForm = document.getElementById('orderForm');
const successMessage = document.getElementById('successMessage');
const productCard1 = document.getElementById('productCard1');
const productCard2 = document.getElementById('productCard2');
const productCard3 = document.getElementById('productCard3');
const productCard4 = document.getElementById('productCard4');
const buyFromDetail = document.getElementById('buyFromDetail');
const catalogLinks = document.querySelectorAll('.catalog-link');
const buyButtons = document.querySelectorAll('.btn-buy');
const buyDetailButtons = document.querySelectorAll('.btn-buy-detail');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const orderSummary = document.getElementById('orderSummary');

// Cart array
let cart = [];

// Product data
const products = {
    '1': { name: 'Іграшка-нічник Плюшевий Стіч Miniverse серія "Mini Stitch"', code: '591825', price: 749, image: 'stitch-photo1.jpg' },
    '2': { name: 'Настільна гра 🦔', code: '892456', price: 450, image: 'hedgehog-game1.jpg' },
    '3': { name: 'Дитячий набір косметики з косметичкою "Unicorn"', code: '738291', price: 599, image: 'unicorn-cosmetics.jpg' },
    '4': { name: 'Магнітна гра "Нагодуй дятлика"', code: '725930', price: 410, image: 'woodpecker-game1.jpg' }
};

// Gallery functionality for Hedgehog game
let currentImageIndex = 0;
const galleryImages = document.querySelectorAll('#productModal2 .gallery-img');
const galleryPrevBtn = document.getElementById('galleryPrev');
const galleryNextBtn = document.getElementById('galleryNext');
const galleryDotsContainer = document.getElementById('galleryDots');

// Create dots for hedgehog gallery
galleryImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showImage(index));
    galleryDotsContainer.appendChild(dot);
});

const galleryDots = document.querySelectorAll('#productModal2 .gallery-dot');

function showImage(index) {
    // Remove active from all images and dots
    galleryImages.forEach(img => img.classList.remove('active'));
    galleryDots.forEach(dot => dot.classList.remove('active'));
    
    // Pause all videos
    galleryImages.forEach(img => {
        if (img.tagName === 'VIDEO') {
            img.pause();
        }
    });
    
    // Add active to current image and dot
    galleryImages[index].classList.add('active');
    galleryDots[index].classList.add('active');
    currentImageIndex = index;
}

galleryPrevBtn.addEventListener('click', () => {
    const newIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    showImage(newIndex);
});

galleryNextBtn.addEventListener('click', () => {
    const newIndex = currentImageIndex === galleryImages.length - 1 ? 0 : currentImageIndex + 1;
    showImage(newIndex);
});

// Gallery functionality for Stitch
let currentStitchIndex = 0;
const stitchImages = document.querySelectorAll('#productModal .gallery-img');
const stitchPrevBtn = document.getElementById('galleryPrevStitch');
const stitchNextBtn = document.getElementById('galleryNextStitch');
const stitchDotsContainer = document.getElementById('galleryDotsStitch');

// Create dots for stitch gallery
stitchImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showStitchImage(index));
    stitchDotsContainer.appendChild(dot);
});

const stitchDots = document.querySelectorAll('#productModal .gallery-dot');

function showStitchImage(index) {
    // Remove active from all images and dots
    stitchImages.forEach(img => img.classList.remove('active'));
    stitchDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active to current image and dot
    stitchImages[index].classList.add('active');
    stitchDots[index].classList.add('active');
    currentStitchIndex = index;
}

stitchPrevBtn.addEventListener('click', () => {
    const newIndex = currentStitchIndex === 0 ? stitchImages.length - 1 : currentStitchIndex - 1;
    showStitchImage(newIndex);
});

stitchNextBtn.addEventListener('click', () => {
    const newIndex = currentStitchIndex === stitchImages.length - 1 ? 0 : currentStitchIndex + 1;
    showStitchImage(newIndex);
});

// Gallery functionality for Unicorn Cosmetics
let currentUnicornIndex = 0;
const unicornImages = document.querySelectorAll('#productModal3 .gallery-img');
const unicornPrevBtn = document.getElementById('galleryPrevUnicorn');
const unicornNextBtn = document.getElementById('galleryNextUnicorn');
const unicornDotsContainer = document.getElementById('galleryDotsUnicorn');

// Create dots for unicorn gallery
unicornImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showUnicornImage(index));
    unicornDotsContainer.appendChild(dot);
});

const unicornDots = document.querySelectorAll('#productModal3 .gallery-dot');

function showUnicornImage(index) {
    // Remove active from all images and dots
    unicornImages.forEach(img => img.classList.remove('active'));
    unicornDots.forEach(dot => dot.classList.remove('active'));
    
    // Pause all videos
    unicornImages.forEach(img => {
        if (img.tagName === 'VIDEO') {
            img.pause();
        }
    });
    
    // Add active to current image and dot
    unicornImages[index].classList.add('active');
    unicornDots[index].classList.add('active');
    currentUnicornIndex = index;
}

unicornPrevBtn.addEventListener('click', () => {
    const newIndex = currentUnicornIndex === 0 ? unicornImages.length - 1 : currentUnicornIndex - 1;
    showUnicornImage(newIndex);
});

unicornNextBtn.addEventListener('click', () => {
    const newIndex = currentUnicornIndex === unicornImages.length - 1 ? 0 : currentUnicornIndex + 1;
    showUnicornImage(newIndex);
});

// Gallery functionality for Woodpecker Game
let currentWoodpeckerIndex = 0;
const woodpeckerImages = document.querySelectorAll('#productModal4 .gallery-img');
const woodpeckerPrevBtn = document.getElementById('galleryPrevWoodpecker');
const woodpeckerNextBtn = document.getElementById('galleryNextWoodpecker');
const woodpeckerDotsContainer = document.getElementById('galleryDotsWoodpecker');

// Create dots for woodpecker gallery
woodpeckerImages.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('gallery-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showWoodpeckerImage(index));
    woodpeckerDotsContainer.appendChild(dot);
});

const woodpeckerDots = document.querySelectorAll('#productModal4 .gallery-dot');

function showWoodpeckerImage(index) {
    // Remove active from all images and dots
    woodpeckerImages.forEach(img => img.classList.remove('active'));
    woodpeckerDots.forEach(dot => dot.classList.remove('active'));
    
    // Pause all videos
    woodpeckerImages.forEach(img => {
        if (img.tagName === 'VIDEO') {
            img.pause();
        }
    });
    
    // Add active to current image and dot
    woodpeckerImages[index].classList.add('active');
    woodpeckerDots[index].classList.add('active');
    currentWoodpeckerIndex = index;
}

woodpeckerPrevBtn.addEventListener('click', () => {
    const newIndex = currentWoodpeckerIndex === 0 ? woodpeckerImages.length - 1 : currentWoodpeckerIndex - 1;
    showWoodpeckerImage(newIndex);
});

woodpeckerNextBtn.addEventListener('click', () => {
    const newIndex = currentWoodpeckerIndex === woodpeckerImages.length - 1 ? 0 : currentWoodpeckerIndex + 1;
    showWoodpeckerImage(newIndex);
});

// Category switching
catalogLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        
        // Update active state
        document.querySelectorAll('.catalog-item').forEach(item => item.classList.remove('active'));
        this.parentElement.classList.add('active');
        
        // Clear search
        document.getElementById('searchInput').value = '';
        
        // Show/hide products based on category
        if (category === 'plush') {
            productCard1.style.display = 'block';
            productCard2.style.display = 'none';
            productCard3.style.display = 'none';
            productCard4.style.display = 'none';
        } else if (category === 'board') {
            productCard1.style.display = 'none';
            productCard2.style.display = 'block';
            productCard3.style.display = 'none';
            productCard4.style.display = 'block';
        } else if (category === 'cosmetics') {
            productCard1.style.display = 'none';
            productCard2.style.display = 'none';
            productCard3.style.display = 'block';
            productCard4.style.display = 'none';
        }
    });
});

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const allProducts = [productCard1, productCard2, productCard3, productCard4];
    
    if (searchTerm === '') {
        // If search is empty, show products based on active category
        const activeCategory = document.querySelector('.catalog-item.active .catalog-link').getAttribute('data-category');
        allProducts.forEach(product => product.style.display = 'none');
        
        if (activeCategory === 'plush') {
            productCard1.style.display = 'block';
        } else if (activeCategory === 'board') {
            productCard2.style.display = 'block';
            productCard4.style.display = 'block';
        } else if (activeCategory === 'cosmetics') {
            productCard3.style.display = 'block';
        }
        return;
    }
    
    // Search in all products
    allProducts.forEach(product => {
        const title = product.querySelector('.product-title').textContent.toLowerCase();
        const code = product.querySelector('.product-code').textContent.toLowerCase();
        const category = product.getAttribute('data-category');
        
        if (title.includes(searchTerm) || code.includes(searchTerm) || category.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
    
    // Remove active state from all categories when searching
    if (searchTerm !== '') {
        document.querySelectorAll('.catalog-item').forEach(item => item.classList.remove('active'));
    }
});

// Cart functionality
function addToCart(productId) {
    const product = products[productId];
    if (product) {
        cart.push({
            id: productId,
            ...product
        });
        updateCart();
        
        // Show brief notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = '✅ Товар додано до корзини';
        notification.style.cssText = 'position: fixed; top: 100px; right: 20px; background: #4caf50; color: white; padding: 15px 25px; border-radius: 10px; z-index: 10000; animation: slideIn 0.3s ease;';
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    // Update cart count
    cartCount.textContent = cart.length;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Корзина порожня</p>';
        cartFooter.style.display = 'none';
    } else {
        let total = 0;
        cartItems.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-code">Артикул: ${item.code}</div>
                        <div class="cart-item-price">${item.price} ₴</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})">Видалити</button>
                </div>
            `;
        }).join('');
        
        totalPrice.textContent = `${total} ₴`;
        cartFooter.style.display = 'block';
    }
}

// Open cart modal
cartBtn.addEventListener('click', function() {
    cartModal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close cart modal
function closeCartModal() {
    cartModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

closeCartModalBtn.addEventListener('click', closeCartModal);

cartModal.addEventListener('click', function(e) {
    if (e.target === cartModal) {
        closeCartModal();
    }
});

// Checkout button
checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) return;
    
    cartModal.classList.remove('active');
    
    // Show order summary
    let total = 0;
    const summaryHTML = `
        <h3>Ваше замовлення:</h3>
        ${cart.map(item => {
            total += item.price;
            return `
                <div class="order-summary-item">
                    <span>${item.name} (${item.code})</span>
                    <span>${item.price} ₴</span>
                </div>
            `;
        }).join('')}
        <div class="order-summary-total">
            <div class="order-summary-item">
                <span>Всього:</span>
                <span>${total} ₴</span>
            </div>
        </div>
    `;
    orderSummary.innerHTML = summaryHTML;
    
    modal.classList.add('active');
});

// Open product detail modal when clicking on product card
productCard1.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-buy')) {
        productModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

productCard2.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-buy')) {
        productModal2.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

productCard3.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-buy')) {
        productModal3.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

productCard4.addEventListener('click', function(e) {
    if (!e.target.classList.contains('btn-buy')) {
        productModal4.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

// Open order modal when Buy buttons are clicked
buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const productId = this.getAttribute('data-product');
        addToCart(productId);
    });
});

// Open order modal from detail modals
buyDetailButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-product');
        addToCart(productId);
        productModal.classList.remove('active');
        productModal2.classList.remove('active');
        productModal3.classList.remove('active');
        productModal4.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close modal function
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    orderForm.reset();
}

// Close modal on X button click
closeModalBtn.addEventListener('click', closeModal);
closeProductModalBtn.addEventListener('click', closeProductModal);
closeProductModal2Btn.addEventListener('click', closeProductModal2);
closeProductModal3Btn.addEventListener('click', closeProductModal3);
closeProductModal4Btn.addEventListener('click', closeProductModal4);

// Close product modal function
function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close product modal 2 function
function closeProductModal2() {
    productModal2.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close product modal 3 function
function closeProductModal3() {
    productModal3.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close product modal 4 function
function closeProductModal4() {
    productModal4.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

productModal.addEventListener('click', function(e) {
    if (e.target === productModal) {
        closeProductModal();
    }
});

productModal2.addEventListener('click', function(e) {
    if (e.target === productModal2) {
        closeProductModal2();
    }
});

productModal3.addEventListener('click', function(e) {
    if (e.target === productModal3) {
        closeProductModal3();
    }
});

productModal4.addEventListener('click', function(e) {
    if (e.target === productModal4) {
        closeProductModal4();
    }
});

// Handle form submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Корзина порожня! Додайте товари для замовлення.');
        return;
    }
    
    // Get form data
    const formData = {
        name: document.getElementById('customerName').value.trim(),
        phone: document.getElementById('customerPhone').value.trim(),
        address: document.getElementById('customerAddress').value.trim()
    };
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.address) {
        alert('Будь ласка, заповніть всі поля');
        return;
    }
    
    // Telegram bot credentials
    const botToken = '8346758594:AAF3vI2e_A0aHv5MvOSl5gVGIoA8LiCOHy0';
    const chatId = '719294357';
    
    // Format cart items
    let cartText = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartText += `\n${index + 1}. ${item.name}\n   Артикул: ${item.code}\n   Ціна: ${item.price} ₴\n`;
    });
    
    // Format message
    const message = `🛒 Новий заказ!\n\n👤 Ім'я: ${formData.name}\n📱 Телефон: ${formData.phone}\n📍 Адреса: ${formData.address}\n\n📦 Товари:${cartText}\n💰 Всього: ${total} ₴`;
    
    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    fetch(telegramUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            // Clear cart
            cart = [];
            updateCart();
            
            // Show success message
            modal.classList.remove('active');
            successMessage.classList.add('active');
            document.body.style.overflow = 'auto';
            
            // Reset form
            orderForm.reset();
            orderSummary.innerHTML = '';
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 3000);
            successMessage.classList.add('active');
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 3000);
        } else {
            alert('Помилка при відправці замовлення.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Помилка при відправці замовлення.');
    });
});