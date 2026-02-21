import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext.jsx";
import "./index.css"; // optional for styling
import { Toaster } from "react-hot-toast";

// Polyfill for react-hot-toast (fixes blank screen)
if (!window.matchMedia) {
  window.matchMedia = function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  };
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </React.StrictMode>

    {/* Put Toaster OUTSIDE StrictMode */}
    <Toaster position="top-right" reverseOrder={false} />
  </>
);