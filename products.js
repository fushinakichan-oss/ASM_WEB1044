// ==========================================
// QUẢN LÝ SẢN PHẨM & TRANG CHI TIẾT
// ==========================================

// Khai báo trực tiếp mảng dữ liệu sản phẩm ở đây
const products = [
  // ================= SẢN PHẨM HOT (4 sản phẩm) =================
  {
    "id": 1,
    "name": "PC Gaming TTG Ultra - i5 13400F / RTX 4060",
    "price": 18500000,
    "category": "hot",
    "img": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=400&q=80",
    "description": "Cấu hình chuyên game mượt mà các tựa game AAA, bảo hành 36 tháng chính hãng."
  },
  {
    "id": 2,
    "name": "Màn Hình Gaming Asus TUF 24 inch 165Hz",
    "price": 3490000,
    "category": "hot",
    "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80",
    "description": "Màn hình IPS siêu nét, tần số quét 165Hz phù hợp cho game thủ FPS."
  },
  {
    "id": 3,
    "name": "PC Gaming TTG Streamer - i7 14700K / RTX 4070 Ti",
    "price": 32500000,
    "category": "hot",
    "img": "https://images.unsplash.com/photo-1552831388-6a0b3575b22a?auto=format&fit=crop&w=400&q=80",
    "description": "Cấu hình khủng dành cho Streamer và Designer chuyên nghiệp."
  },
  {
    "id": 4,
    "name": "Màn Hình Cong Samsung Odyssey G7 27 inch 240Hz",
    "price": 8900000,
    "category": "hot",
    "img": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80",
    "description": "Màn hình cong 1000R tối thượng, độ phân giải QHD 2K tần số quét 240Hz."
  },

  // ================= SẢN PHẨM MỚI (4 sản phẩm) =================
  {
    "id": 5,
    "name": "Card Màn Hình RTX 4070 Super 12GB",
    "price": 16990000,
    "category": "new",
    "img": "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80",
    "description": "VGA thế hệ mới hiệu năng vượt trội cho công việc đồ họa 3D và render video."
  },
  {
    "id": 6,
    "name": "Bàn Phím Cơ TTG RGB Custom",
    "price": 1250000,
    "category": "new",
    "img": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    "description": "Bàn phím cơ gõ êm, hệ thống đèn LED RGB nhiều chế độ đẹp mắt."
  },
  {
    "id": 7,
    "name": "CPU Intel Core i9 14900K Box Chính Hãng",
    "price": 14500000,
    "category": "new",
    "img": "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=400&q=80",
    "description": "Vi xử lý mạnh mẽ nhất hiện tại với 24 nhân 32 luồng xung nhịp đến 6.0GHz."
  },
  {
    "id": 8,
    "name": "RAM Corsair Vengeance RGB 32GB (2x16GB) DDR5",
    "price": 3200000,
    "category": "new",
    "img": "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=400&q=80",
    "description": "Bộ nhớ RAM DDR5 tốc độ cao 6000MHz tích hợp hệ thống LED RGB rực rỡ."
  },

  // ================= SẢN PHẨM KHUYẾN MÃI (4 sản phẩm) =================
  {
    "id": 9,
    "name": "Chuột Gaming Không Dây TTG Pro",
    "price": 590000,
    "category": "sale",
    "img": "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=400&q=80",
    "description": "Pin dung lượng lớn 80 giờ, độ nhạy DPI cao, thiết kế công thái học."
  },
  {
    "id": 10,
    "name": "Tai Nghe Gaming 7.1 Surround",
    "price": 450000,
    "category": "sale",
    "img": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=400&q=80",
    "description": "Âm thanh vòm 7.1 chân thực, trang bị micro lọc tiếng ồn hiệu quả."
  },
  {
    "id": 11,
    "name": "Tản Nhiệt Khí CPU Thermalright Peerless Assassin",
    "price": 790000,
    "category": "sale",
    "img": "https://images.unsplash.com/photo-1587202372616-b43abea06c2a?auto=format&fit=crop&w=400&q=80",
    "description": "Hiệu năng tản nhiệt đỉnh cao 6 ống đồng mát mẻ cho CPU high-end."
  },
  {
    "id": 12,
    "name": "Ghế Gaming TTG Ergonomic Premium",
    "price": 2890000,
    "category": "sale",
    "img": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=400&q=80",
    "description": "Thiết kế công thái học bảo vệ cột sống, đệm đúc nguyên khối chống xẹp."
  }
];

// Định dạng tiền tệ VNĐ
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

// Chuyển hướng sang trang chi tiết theo ID
function goToDetail(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

// Tạo HTML thẻ sản phẩm
function createProductCardHTML(product) {
    return `
        <div class="product-card" onclick="goToDetail(${product.id})">
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${formatCurrency(product.price)}</div>
                <div style="display: flex; gap: 5px;">
                    <button class="btn" style="background:#3498db; padding: 6px 10px; font-size: 12px; flex: 1;" onclick="event.stopPropagation(); goToDetail(${product.id})">
                        Chi tiết
                    </button>
                    <button class="btn" style="padding: 6px 10px; font-size: 12px; flex: 1;" onclick="event.stopPropagation(); addToCart(${product.id})">
                        Thêm giỏ
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Render dữ liệu trực tiếp khi trang tải xong (Không cần hàm async fetch)
function initProducts() {
    renderHomePageProducts();
    renderAllProductsPage();
    renderProductDetailPage();
}

// Render các mục tại Trang chủ (index.html)
function renderHomePageProducts() {
    const hotContainer = document.getElementById('hot-products');
    const newContainer = document.getElementById('new-products');
    const saleContainer = document.getElementById('sale-products');

    if (!hotContainer || !newContainer || !saleContainer) return;

    hotContainer.innerHTML = '';
    newContainer.innerHTML = '';
    saleContainer.innerHTML = '';

    products.forEach(product => {
        const html = createProductCardHTML(product);
        if (product.category === 'hot') hotContainer.innerHTML += html;
        if (product.category === 'new') newContainer.innerHTML += html;
        if (product.category === 'sale') saleContainer.innerHTML += html;
    });
}

// Render danh sách sản phẩm tại trang products.html
function renderAllProductsPage() {
    const allContainer = document.getElementById('all-products');
    if (!allContainer) return;

    allContainer.innerHTML = '';
    products.forEach(product => {
        allContainer.innerHTML += createProductCardHTML(product);
    });
}

// Render trang chi tiết tại product-detail.html
function renderProductDetailPage() {
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    const product = products.find(p => p.id === productId) || products[0];

    if (product) {
        container.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="detail-img">
            <div class="detail-info">
                <h1>${product.name}</h1>
                <div class="detail-price">${formatCurrency(product.price)}</div>
                <p class="detail-desc">${product.description}</p>
                <button class="btn" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> Thêm vào giỏ hàng
                </button>
            </div>
        `;
    }
}

// Tự động chạy khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', initProducts);