fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const productListContainer = document.getElementById('productList');

        data.forEach(product => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card');

            let clickCount = 0;

            cardItem.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <alt="#">
                        <div class="card-body">
                            <h5 class="card-title">${product.Name}</h5>
                            <p class="card-text">${product.price}</p>
                            <button class="addToCartBtn">Add to Cart</button>
                            <button class="cancelBtn">Cancel</button>
                            <p> Quantity: <span class="clickCount">${clickCount}</span></p>
                        </div>
                </div>
            `;

            const addToCartButton = cardItem.querySelector('.addToCartBtn');
            const cancelBtn = cardItem.querySelector('.cancelBtn');
            const clickCountElement = cardItem.querySelector('.clickCount');

            addToCartButton.addEventListener('click', () => {
                clickCount++;
                clickCountElement.textContent = clickCount;
            });

            cancelBtn.addEventListener('click', () => {
                clickCount = 0;
                clickCountElement.textContent = clickCount;
            });

            productListContainer.appendChild(cardItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
