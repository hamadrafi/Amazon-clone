import { cart } from "../cart.js";

export function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const checkoutHeaderHTML = `
        <div class="checkout-header-middle-section ">
          Checkout (<a class="return-to-home-link  "
            href="index.html">Items:${cartQuantity} </a>)
        </div>
    `;

  document.querySelector(".js-checkout-header").innerHTML = checkoutHeaderHTML;
}
