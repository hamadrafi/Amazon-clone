import {
  cart,
  removefromCart,
  UpdateCartQuantity,
  updatedeliveryoptions,
  updateQuantity,
} from "../cart.js";
import { products, getProduct } from "../amazon.js";
import { formatcurrency } from "../../utilities/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOptions } from "../delivery-opts.js";
import { renderPaymentSummary } from "./payment-summary.js";
import { renderCheckoutHeader } from "./checkout-header.js";

export function renderOrderSummary() {
  let cartSummaryHtml = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    
    if (!matchingProduct) {
      console.error(`Product with ID ${productId} not found.`);
      return;
    }

    const deliveryOptionId = cartItem.deliveryOptionId;
    const deliveryOption = getDeliveryOptions(deliveryOptionId);
    const today = dayjs();
    const deliverydate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliverydate.format("dddd, MMMM D");

    cartSummaryHtml += `
        <div class="cart-item-container js-cart-item-container-${
          matchingProduct.id
        }">
            <div class="delivery-date">
                Delivery Date: ${dateString}
            </div>
            <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingProduct.image}">
                <div class="cart-item-details">
                    <div class="product-name">${matchingProduct.name}</div>
                    <div class="product-price">$${formatcurrency(
                      matchingProduct.priceCents
                    )}</div>
                    <div class="product-quantity">
                        <span class="quantity-name">
                            Quantity: <span class="quantity-label js-quantity-label-${
                              matchingProduct.id
                            }">${cartItem.quantity}</span>
                        </span>
                            <span class="update-quantity-link link-primary js-update-link"
                                data-product-id="${matchingProduct.id}">
                                Update
                            </span>
                             <input type="number" max class="quantity-input js-quantity-input-${
                               matchingProduct.id
                             }" min=${cartItem.quantity} value="${
      cartItem.quantity
    }" max="1000 step=1" >
                            <span class="save-quantity-link link-primary"></span>
                            <span class="save-quantity-link link-primary js-save-link"
                            data-product-id="${matchingProduct.id}">
                            Save
                            </span>
                            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
                              matchingProduct.id
                            }">
                            Delete
                            </span>
                    </div>
                </div>
                <div class="delivery-options">
                    <div class="delivery-options-title">Choose a Delivery Option:</div>
                    ${deliveryOptionsHtml(matchingProduct, cartItem)}
                </div>
            </div>
        </div>
        `;
  });

  function deliveryOptionsHtml(matchingProduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliverydate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliverydate.format("dddd, MMMM D");
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatcurrency(deliveryOption.priceCents)} - `;
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html += `
            <div class="delivery-option js-delivery-option" 
                data-product-id="${matchingProduct.id}"
                data-delivery-option-id="${deliveryOption.id}">
                <input type="radio" ${
                  isChecked ? "checked" : ""
                } class="delivery-option-input" name="delivery-option-${
        matchingProduct.id
      }">
                <div>
                    <div class="delivery-option-date">${dateString}</div>
                    <div class="delivery-option-price">${priceString} Shipping</div>
                </div>
            </div>
            `;
    });
    return html;
  }

  document.querySelector(".js-order-summary").innerHTML = cartSummaryHtml;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productid = link.dataset.productId;
      removefromCart(productid);
      const container = document.querySelector(
        `.js-cart-item-container-${productid}`
      );
      container.remove();
      renderCheckoutHeader();
      renderPaymentSummary();
    });
  });
  document.querySelectorAll(".js-update-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.add("is-editing-quantity");
    });
  });
  document.querySelectorAll(".js-save-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.classList.remove("is-editing-quantity");
      const quantityInput = document.querySelector(
        `.js-quantity-input-${productId}`
      );
      const newQuantity = Number(quantityInput.value);
      if (newQuantity < 0 || newQuantity >= 1000) {
        alert("Quantity must be at least 0 and less than 1000");
        return;
      }
      updateQuantity(productId, newQuantity);
      const quantityLabel = document.querySelector(
        `.js-quantity-label-${productId}`
      );
      quantityLabel.innerHTML = newQuantity;

      renderCheckoutHeader();
      renderPaymentSummary();
    });
  });
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        input
          .closest(".cart-item-container")
          .querySelector(".js-save-link")
          .click();
      }
    });
  });
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updatedeliveryoptions(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}
