# Planner & Purpose 🌿
A thoughtfully designed, responsive stationery e-commerce website for planners, diaries, and journals.
**Planner & Purpose** is a frontend project built with **HTML, CSS, and JavaScript**, featuring a soft editorial aesthetic, interactive product browsing, shopping cart functionality, and a demo checkout experience.

---

## ✨ Features
- 🎨 Soft, editorial-inspired responsive design
- 📱 Mobile-friendly layout
- 📚 Product categories:
  - Planners
  - Diaries
  - Journals
- 🔎 Product filtering by category
- 🛒 Interactive shopping bag/cart
- ➕ Increase and decrease product quantities
- 🗑️ Remove products from cart
- 💾 Cart persistence using `localStorage`
- 💰 Automatic subtotal calculation
- 📧 Newsletter subscription interaction
- 🧾 Demo checkout form
- ✅ Demo order confirmation
- 🎯 Smooth scrolling navigation
- ✨ Responsive layouts for desktop, tablet, and mobile

---

## 🛍️ Products
The website currently includes four products:
| Product | Type | Price |
|---|---|---:|
| The Weekly Edit | Planner | ₹699 |
| Notes to Self | Journal | ₹549 |
| The Everyday Diary | Diary | ₹599 |
| Grow at Your Own Pace | Planner | ₹749 |

Product prices are defined and used by the JavaScript cart system. fileciteturn0file2L1-L12

---

## 🧰 Technologies Used
- **HTML5** — Website structure and semantic elements
- **CSS3** — Styling, layouts, animations, responsiveness
- **JavaScript** — Interactivity and cart functionality
- **LocalStorage** — Persistent shopping cart data
- **Google Fonts**
  - DM Sans
  - DM Mono
  - Playfair Display

The project loads its stylesheets and Google Fonts directly in the HTML file. fileciteturn0file1L3-L12

---

## 📁 Project Structure
```text
Planner-and-Purpose/
│
├── index.html
├── style.css
├── fixes.css
├── script.js
└── README.md
```

### `index.html`
Contains the main structure of the website, including:- Header and navigation
- Hero section
- Product collections
- Shop section
- Product cards
- Brand/story section
- Cover showcase
- Newsletter section
- Footer
- Shopping cart
- Checkout dialog

The HTML also defines the demo checkout form and explicitly indicates that no payment is collected. 

### `style.css`
Contains the primary visual design, including:
- Typography
- Colors
- Product cards
- Hero artwork
- Navigation
- Shopping cart
- Responsive layouts
- Mobile breakpoints

### `fixes.css`
Contains additional styling adjustments and refinements for:
- Collection cards
- Cart quantity controls
- Checkout dialog
- Checkout form
- Product cover showcase
- Responsive cover designs
- Updated color palette

### `script.js`
Handles the website's interactive functionality:
- Cart management
- Product quantities
- Product filtering
- LocalStorage
- Newsletter submission
- Checkout dialog
- Demo order confirmation

---

## 🛒 Shopping Cart
Users can add products using the **Quick Add** buttons.
The cart supports:
- Adding products
- Increasing quantity
- Decreasing quantity
- Removing products
- Calculating subtotal
- Persisting cart data between page refreshes

Cart information is stored in the browser using:

```javascript
localStorage
```

---

## 🔎 Product Filtering

Products can be filtered using:
- **All Goods**
- **Planners**
- **Diaries**
- **Journals**

The JavaScript dynamically hides products that don't match the selected category. 

---

## 💳 Checkout
This project contains a **demo checkout flow**.
Users can enter:
- Full name
- Email address
- Delivery address
No real payment is processed.
After submitting the form, a demo order confirmation is displayed and the cart is cleared. 

---

## 🚀 Getting Started
### 1. Clone the repository

```bash
git clone https://github.com/your-username/planner-and-purpose.git
```

### 2. Open the project
Navigate into the project folder:

```bash
cd planner-and-purpose
```

### 3. Run the website
Simply open:
```text
index.html
```
in any modern web browser.
No backend or package installation is required.

---

## 🎯 Project Purpose
The goal of this project is to demonstrate how a modern stationery storefront can be created using only frontend technologies.
It focuses on combining:
**Design + User Experience + Interactivity**
while keeping the implementation simple and accessible.

---

## ⚠️ Disclaimer
This is a **frontend demonstration project**.
The checkout system is simulated and does not process real payments or create actual orders. The website currently has no backend or database.

---

## 👩‍💻 Author
**Gayatri Deshmukh**

Built as a frontend web development project.

---

## 📄 License

This project is created for educational and demonstration purposes.
