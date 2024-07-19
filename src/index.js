import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
<<<<<<< HEAD
=======
// import Footer from "./components/Footer/Footer";
>>>>>>> 993d3900d7135f55f7583323a9bcb6a8137c62fe

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
<<<<<<< HEAD
=======
      {/* <Footer /> */}
>>>>>>> 993d3900d7135f55f7583323a9bcb6a8137c62fe
    </BrowserRouter>
  </React.StrictMode>
);
