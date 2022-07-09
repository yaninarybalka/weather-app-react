import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Main";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Main />
          <Current />
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
