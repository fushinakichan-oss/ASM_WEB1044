// ==========================================
// QUẢN LÝ GIỎ HÀNG (CART LOGIC)
// ==========================================
let cart = JSON.parse(localStorage.getItem('ttg_cart')) || [];

// Thêm sản phẩm vào giỏ
function addToCart(productId) {
    // Tìm sản phẩm từ mảng products (được khai báo trong products.js)
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }

    saveCartAndUpdateUI();
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
}

// Render dữ liệu bảng giỏ hàng tại cart.html
function renderCartPage() {
    const cartTable = document.getElementById('cart-items-page');
    const emptyMsg = document.getElementById('empty-cart-msg-page');
    const totalEl = document.getElementById('cart-total-page');
    
    if (!cartTable) return;

    cartTable.innerHTML = '';

    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        if (totalEl) totalEl.innerText = formatCurrency(0);
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartTable.innerHTML += `
            <tr>
                <td><img src="${item.img}" class="cart-img" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>${formatCurrency(item.price)}</td>
                <td>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="margin: 0 8px;">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </td>
                <td>${formatCurrency(itemTotal)}</td>
                <td><button class="btn-remove" onclick="removeFromCart(${item.id})">Xóa</button></td>
            </tr>
        `;
    });

    if (totalEl) totalEl.innerText = formatCurrency(total);
}

// Tăng / Giảm số lượng
function updateQuantity(productId, change) {
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartAndUpdateUI();
        }
    }
}

// Xóa mặt hàng khỏi giỏ
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartAndUpdateUI();
}

// Lưu giỏ hàng vào LocalStorage và cập nhật số lượng trên icon giỏ hàng
function saveCartAndUpdateUI() {
    localStorage.setItem('ttg_cart', JSON.stringify(cart));
    
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.innerText = totalCount;
    }

    renderCartPage();
}

// Xử lý nút Thanh toán
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Cảm ơn bạn đã đặt hàng tại TTGSHOP!");
    cart = [];
    saveCartAndUpdateUI();
}

// Cập nhật giỏ hàng ngay khi tải trang
document.addEventListener('DOMContentLoaded', saveCartAndUpdateUI);