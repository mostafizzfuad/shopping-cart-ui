# 🛍️ Shopping Cart UI with React Context API

A fully functional Shopping Cart application built with **React** to demonstrate global state management using the **Context API**. This project simulates a real-world e-commerce flow using **JSON Server** as a mock backend database.

## 🚀 Features

Based on the modules covered, the project includes:

- **Dynamic Product Display:** Fetches product data asynchronously from a JSON server.
- **Global State Management:** Uses `ProductContext` and `CartContext` to manage application state without prop drilling.
- **Cart Functionality:**
  - Add items to the cart.
  - Real-time cart count badge in the header.
  - Cart items dropdown preview.
  - Remove individual items.
  - Clear the entire cart.
- **Data Persistence:** Saves cart items to **Local Storage**, so data isn't lost on refresh.
- **Proxy Setup:** Configured development proxy to communicate seamlessly with the backend.

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks & Context API)
- **Backend:** JSON Server (Mock API)
- **State Management:** React Context API
- **Styling:** CSS / Scoped Modules (based on project setup)

## 📂 Project Workflow

This project covers the following core concepts:
1. **Context API Setup:** Understanding the need for global state.
2. **JSON Server:** Setting up a mock REST API to serve product data.
3. **Proxy Configuration:** solving CORS issues and simplifying API requests.
4. **Contexts:**
   - `ProductContext`: Handles fetching and displaying products.
   - `CartContext`: Handles cart logic (add, remove, clear, count).
5. **Local Storage Integration:** Syncing context state with browser storage.

## ⚙️ How to Run Locally

Since this project uses a JSON Server backend, you need to run both the server and the frontend.

### 1. Clone & Install
```bash
git clone https://github.com/mostafizzfuad/shopping-cart-ui.git
cd shopping-cart-ui
npm install
```
### 2. Start the Backend (JSON Server)
```bash
npm run json-server
```
### 3. Start the Frontend (React App)
```bash
npm run dev
```

# 👨‍💻Author
[Md. Mostafizur Rahman](https://www.linkedin.com/in/mostafizzfuad/) - Full Stack Developer
