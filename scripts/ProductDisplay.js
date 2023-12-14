document.addEventListener("DOMContentLoaded", function () {
    // Mock data for product details
    const productDetails = [
        { id: "product1", category: "electronics", price: "$900", date: new Date("2023-12-10T12:00:00"), imageSrc: "iPhone.jpg", imageAlt: "iPhone"},
        { id: "product2", category: "electronics", price: "$300", date: new Date("2023-12-10T11:55:00"), imageSrc: "Phone.jpg", imageAlt: "Phone"},
        { id: "product3", category: "computers", price: "Please Contact", date: new Date("2023-12-10T08:30:00"), imageSrc: "Mac.jpg", imageAlt: "Mac"},
        { id: "product4", category: "tablets", price: "$1000", date: new Date("2023-12-09T12:00:00"), imageSrc: "iPad.jpg", imageAlt: "iPad"},
        { id: "product5", category: "electronics", price: "$180", date: new Date("2023-12-08T08:00:00"), imageSrc: "Headphones.jpg", imageAlt: "HeadPhones"},
        { id: "product6", category: "peripherals", price: "$100", date: new Date("2023-12-05T12:00:00"), imageSrc: "Keyboard.jpg", imageAlt: "Keyboard"}
    ];

    const productContainer = document.querySelector('.product-list');
    const categoryFilter = document.getElementById('category-filter');
    const sortOrder = document.getElementById('sort-order');

    // Function to render products based on filters and sorting
    function renderProducts(category, order) {
        // Filter products based on category
        const filteredProducts = (category === 'all') ?
            productDetails :
            productDetails.filter(product => product.category === category);

        // Sort products based on order
const sortedProducts = filteredProducts.sort((a, b) => {
    if (order === 'price-asc') return parseFloat(a.price) - parseFloat(b.price);
    if (order === 'price-desc') return parseFloat(b.price) - parseFloat(a.price);
    if (order === 'date-desc') return a.date - b.date;
    if (order === 'date-asc') return b.date - a.date;
});

        // Clear existing products
        productContainer.innerHTML = '';

        // Render sorted and filtered products
        sortedProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.id = product.id;

            // Create product content (image, details, etc.)
            const productImage = document.createElement('img');
            productImage.src = product.imageSrc;
            productImage.alt = product.imageAlt;
            productElement.appendChild(productImage);

            const productDetails = document.createElement('div');
            productDetails.classList.add('product-details');
            productElement.appendChild(productDetails);

            const productName = document.createElement('a');
            productName.href = '#';
            productName.textContent = 'Product Name';
            productDetails.appendChild(productName);

            const productPrice = document.createElement('span');
            productPrice.classList.add('price');
            productPrice.textContent = product.price;
            productDetails.appendChild(productPrice);

            const productDate = document.createElement('span');
            productDate.classList.add('publish-date');
            productDate.textContent = product.date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
});
productDetails.appendChild(productDate);

            productContainer.appendChild(productElement);
        });
    }

    // Event listener for category filter
    categoryFilter.addEventListener('change', function () {
        const selectedCategory = categoryFilter.value;
        const selectedOrder = sortOrder.value;
        renderProducts(selectedCategory, selectedOrder);
    });

    // Event listener for sort order
    sortOrder.addEventListener('change', function () {
        const selectedCategory = categoryFilter.value;
        const selectedOrder = sortOrder.value;
        renderProducts(selectedCategory, selectedOrder);
    });

    // Initial render on page load
    renderProducts('all', 'date-desc');
});