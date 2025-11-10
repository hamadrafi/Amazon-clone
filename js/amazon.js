import { cart, addtocart, UpdateCartQuantity } from "./cart.js";
import { formatcurrency } from "../utilities/money.js";

export function getProduct(productId) {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "/imgs/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "/imgs/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.5,
      count: 47,
    },
    priceCents: 2090,
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "/imgs/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 127,
    },
    priceCents: 1190,
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "/imgs/black-2-slot-toaster.jpg",
    name: " 2 Slot Toaster - Black",
    rating: {
      stars: 4.5,
      count: 80,
    },
    priceCents: 2990,
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "/imgs/6-piece-white-dinner-plate-set.jpg",
    name: " 6 Piece White Dinner Plate Set",
    rating: {
      stars: 4.5,
      count: 82,
    },
    priceCents: 1390,
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "/imgs/6-piece-non-stick-baking-set.webp",
    name: " 6-Piece Nonstick, Carbon Steel",
    rating: {
      stars: 4.5,
      count: 83,
    },
    priceCents: 1090,
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "/imgs/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: " Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 85,
    },
    priceCents: 590,
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "/imgs/luxury-tower-set-6-piece.jpg",
    name: " Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 75,
    },
    priceCents: 390,
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "/imgs/electric-glass-and-steel-hot-water-kettle.webp",
    name: " Electric Glass and Steel Hot Tea Water Kettle",
    rating: {
      stars: 4.5,
      count: 79,
    },
    priceCents: 1590,
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "/imgs/liquid-laundry-detergent-plain.jpg",
    name: " Liquid Laundry Detergent",
    rating: {
      stars: 4.5,
      count: 35,
    },
    priceCents: 1090,
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "/imgs/knit-athletic-sneakers-gray.jpg",
    name: "  Waterproof Knit Athletic Sneakers - Grays",
    rating: {
      stars: 4.5,
      count: 82,
    },
    priceCents: 890,
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "/imgs/round-sunglasses-black.jpg",
    name: "   Round Sunglasses",
    rating: {
      stars: 4.5,
      count: 90,
    },
    priceCents: 1590,
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "/imgs/women-beach-sandals.jpg",
    name: "  Womens Two Strap Buckle Sandals",
    rating: {
      stars: 4.5,
      count: 67,
    },
    priceCents: 2090,
  },
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "/imgs/facial-tissue-2-ply-18-boxes.jpg",
    name: "   Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4.5,
      count: 76,
    },
    priceCents: 590,
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "/imgs/straw-sunhat.webp",
    name: "   Straw Lifeguard Sun Hat",
    rating: {
      stars: 4.5,
      count: 92,
    },
    priceCents: 1990,
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "/imgs/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 4.5,
      count: 89,
    },
    priceCents: 1790,
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "/imgs/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1290,
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "/imgs/men-golf-polo-t-shirt-blue.jpg",
    name: " Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 4.5,
      count: 93,
    },
    priceCents: 2190,
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "/imgs/trash-can-with-foot-pedal-50-liter.jpg",
    name: " Trash Can with Foot Pedal",
    rating: {
      stars: 4.5,
      count: 65,
    },
    priceCents: 1090,
  },
  {
    id: "d2785924-743d-49b3-8f03-ec259e640503",
    image: "/imgs/women-chunky-beanie-gray.webp",
    name: " Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 2390,
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "/imgs/men-chino-pants-beige.jpg",
    name: " Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceCents: 2190,
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "/imgs/men-athletic-shoes-green.jpg",
    name: " Men's Athletic Sneaker",
    rating: {
      stars: 4.5,
      count: 85,
    },
    priceCents: 2090,
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "/imgs/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 4.5,
      count: 34,
    },
    priceCents: 1090,
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "/imgs/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set",
    rating: {
      stars: 4.5,
      count: 66,
    },
    priceCents: 6190,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.searchbar input[type="search"]');
  const productsGrid = document.querySelector(".js-products-grid");

  // Generate the full products HTML (this is used as the default)
  let fullProductsHtml = "";
  products.forEach((product) => {
    fullProductsHtml += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>
        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>
        <div class="product-rating-container">
          <img class="product-rating-stars" src="/imgs/rating-45.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>
        <div class="product-price">
          $${formatcurrency(product.priceCents)}
        </div>
        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="product-spacer"></div>
        <div class="added-to-cart js-add-to-cart">
          <img src="/imgs/added-to-cart.png">
          Added
        </div>
        <button class="add-to-cart-button button-primary js-add-to-cart" 
          data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  // Render function that updates the container and attaches listeners
  function renderProducts(html) {
    productsGrid.innerHTML = html;
    attachAddToCartListeners();
  }

  // Filter function – when search input is empty, restore full list
  function filterProducts(searchTerm) {
    if (searchTerm === "") {
      renderProducts(fullProductsHtml);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    let filteredHtml = "";

    if (filteredProducts.length === 0) {
      filteredHtml = `<div class="no-results">No products found matching "${searchTerm}"</div>`;
    } else {
      filteredProducts.forEach((product) => {
        // Here you can choose to use a simplified template
        filteredHtml += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-image" src="${product.image}">
            </div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">$${(product.priceCents / 100).toFixed(
              2
            )}</div>
            <div class="product-rating-container">
              <img class="product-rating-stars" src="/imgs/rating-45.png">
              <div class="product-rating-count link-primary">${
                product.rating.count
              }</div>
            </div>
          </div>
        `;
      });
    }
    renderProducts(filteredHtml);
  }

  // Listen for changes on the search input
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.trim();
    filterProducts(searchTerm);
  });

  // Initial render of the full product list
  renderProducts(fullProductsHtml);

  // Function to attach event listeners for "Add to Cart" buttons
  function attachAddToCartListeners() {
    // Select all buttons in the current rendered content
    document.querySelectorAll(".js-add-to-cart").forEach((button) => {
      // Remove any previous listeners by cloning (optional, see note below)
      // Alternatively, consider using event delegation.
      const newButton = button.cloneNode(true);
      button.parentNode.replaceChild(newButton, button);

      // Create and append the check icon
      const checkIcon = document.createElement("img");
      checkIcon.src = "/imgs/checkmark.png";
      checkIcon.className = "check-icon";
      checkIcon.style.display = "none";
      checkIcon.style.width = "15px";
      checkIcon.style.marginLeft = "5px";
      newButton.appendChild(checkIcon);

      newButton.addEventListener("click", (event) => {
        const btn = event.currentTarget;
        const originalText = btn.textContent;
        if (btn.timeoutId) clearTimeout(btn.timeoutId);

        btn.innerHTML =
          'Added <img src="/imgs/checkmark.png" class="check-icon" style="width:15px; margin-left:5px">';
        btn.disabled = true;
        checkIcon.style.display = "inline-block";
        btn.classList.add("button-added");

        btn.timeoutId = setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = originalText;
          checkIcon.style.display = "none";
          btn.classList.remove("button-added");
        }, 1000);

        const productId = btn.dataset.productId;
        const quantitySelector = document.querySelector(
          `.js-quantity-selector-${productId}`
        );
        const quantity = Number(quantitySelector?.value || 1);
        console.log(quantity);
        addtocart(productId, quantity);
        UpdateCartQuantity();
      });
    });
  }

  UpdateCartQuantity();
});
