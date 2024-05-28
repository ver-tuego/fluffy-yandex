document.addEventListener("DOMContentLoaded", function() {
    fetch('/get_seller_products')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('productItemsContainer');
            data.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item d-flex align-items-center mb-3';
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="mr-3" style="width: 150px; height: 150px;">
                    <div>
                        <h6>${product.name}</h6>
                        <p class="mb-0">Цена: ${product.price} руб.</p>
                        <p class="mb-0">Количество на складе: ${product.quantity}</p>
                        <p class="mb-0">Рейтинг: ${product.rating}★</p>
                    </div>
                `;
                container.appendChild(productItem);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});