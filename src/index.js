import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Main from "./Main";
import Forecast from "./Forecast";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Main defaultCity="Ternopil" />

          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
