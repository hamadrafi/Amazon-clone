# 🛒 AmazonCart WebApp

AmazonCart is an interactive e-commerce shopping cart simulation inspired by Amazon's interface and cart workflow.  
Built with **HTML, CSS, JavaScript**, and **Jasmine for unit testing**, this app demonstrates product browsing, add-to-cart functionality, real-time price updates, delivery options, and an intuitive checkout flow.

---

## ✨ Overview

This project focuses on simulating the core elements of an online shopping experience:

- Adding & removing products from the cart
- Dynamic quantity updates
- Real-time total price, shipping fees, and tax calculations
- Order placement and tracking pages
- Responsive, lightweight UI for smooth interaction

---

## 📁 Project Structure

AmazonCart/
├── html/
│ ├── index.html # Product listing homepage
│ ├── checkout.html # Checkout summary & payment page
│ ├── orders.html # Past orders page
│ ├── prod-code-ref.html # Internal reference for product codes
│ └── tracking.html # Track order delivery status
│
├── js/
│ ├── amazon.js # Core product data & utilities
│ ├── cart.js # Cart logic (add/remove/update)
│ ├── order.js # Order placement & history logic
│ ├── orders.js # Display past orders
│ └── delivery-opts.js # Shipping logic & delivery date calculation
│
├── js/checkout/
│ └── addorders.js # Checkout order submission script
│
├── styles/
│ ├── amazon.css # Global layout & UI styles
│ ├── cart.css # Cart page styling
│ ├── checkout.css # Checkout layout & forms
│ ├── orders.css # Order history page
│ └── tracking.css # Delivery tracking page
│
├── imgs/ # Images & UI assets
│
├── tests/
│ ├── lib/ # Jasmine library
│ └── testrunner.html # Testing dashboard
│
├── utilities/ # Helper functions & reusable modules
│
├── README.md # Project documentation
└── MIT.LICENSE # Open-source license


---

## 🧩 Features

| Feature | Description |
|--------|-------------|
| 🛍 Add to Cart | Select products and update quantities in real time |
| 💲 Dynamic Pricing | Auto-updates item totals, taxes, and shipping fees |
| 🚚 Delivery Options | Choose between standard and fast delivery |
| 📦 Order History | Save & view previously placed orders |
| 🔍 Product Lookup | Organized product structure for quick reference |
| ✅ Checkout Simulation | Complete flow from cart → checkout → order placed |

---

## 🎨 UI & Styling

- Clean **responsive layout**
- Organized pages for **Cart**, **Checkout**, **Orders**, and **Tracking**
- Styled using custom CSS files for modular maintainability

---

## 🛠 JavaScript Logic Breakdown

| File | Responsibility |
|------|----------------|
| `amazon.js` | Product list info & utility functions |
| `cart.js`   | Handles cart updates and price calculations |
| `order.js`  | Stores & retrieves order history |
| `orders.js` | Displays previous orders |
| `delivery-opts.js` | Shipping fees & arrival date calculation |

---

## 🧪 Testing

This project uses **Jasmine** for full unit testing.

- Open `tests/testrunner.html` in a browser to execute tests
- Ensures pricing logic & product/cart operations are correct

---

## 📦 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Jasmine** for automated testing

---

## 🌐 Live Demo

👉 **[View Website](YOUR_DEPLOYED_LINK_HERE)**  

## 📜 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---