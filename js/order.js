import { cart } from "./cart.js";
import { products, getProduct } from "./amazon.js";
import { formatcurrency } from "../utilities/money.js";



console.log( cart);
let orderHtml='';
cart.forEach((cartItem)=>{
      const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);
    orderHtml +=`
    <div class="order-container ">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>August 12</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$99.99</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
          </div>
        </div>

        <div class="order-details-grid">
          <div class="product-image-container">
            <img src="${matchingProduct.image}" alt="Product Image">
          </div>

          <div class="product-details">
            <div class="product-name">
              ${matchingProduct.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: August 15
            </div>
            <div class="product-quantity">
              Quantity: ${cartItem.quantity}
            </div>
            <button class="buy-again-button button-primary">
              <img class="buy-again-icon" src="/imgs/buy-again.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
          </div>

          <div class="product-actions">
            <a href="tracking.html?orderId=222&productId=333">
              <button class="track-package-button button-secondary">
                Track package
              </button>
            </a>
          </div>
        </div>
      </div>
`
console.log(orderHtml);
document.querySelector('.js-order-grid').innerHTML = orderHtml;
});




