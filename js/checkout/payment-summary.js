import { cart, UpdateCartQuantity } from "../cart.js";
import { getProduct } from "../amazon.js";
import { getDeliveryOptions } from "../delivery-opts.js";
import { formatcurrency } from "../../utilities/money.js";
import { addorder } from "../addorders.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingInCents = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOptions(cartItem.deliveryOptionId);
    shippingInCents += deliveryOption.priceCents;
  });
  const totalBeforeTax = productPriceCents + shippingInCents;
  const afterTax = totalBeforeTax * 0.1;
  const totalCents = totalBeforeTax + afterTax;
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const paymentSummaryHtml = `
<div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${formatcurrency(
              productPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatcurrency(
              shippingInCents
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatcurrency(
              totalBeforeTax
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatcurrency(
              afterTax
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatcurrency(
              totalCents
            )}</div>
          </div>

          <button class="place-order-button button-primary js-place-order">
            Place your Order
          </button>
        </div>
      </div>
    </div>
`;
  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHtml;

//   document.querySelector('.js-place-order')
//   .addEventListener('click', async ()=>{
//      const response=  await fetch('https://supersimplebackend.dev/orders'),{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },body:JSON.stringify({
//         cart:cart
//       })
//     })
  
//     const order=response.json()
//   console.log(order);
//   })
// }

document.querySelector('.js-place-order')
  .addEventListener('click', async () => {
    try{
      const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cart })
      });
      
      const order = await response.json();
      //console.log(order);
      addorder(order)
    }
    catch(error){
      console.log("Unexpected Error");
    }
    window.location.href='orders.html'
  });
}