import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import Router from "./routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
