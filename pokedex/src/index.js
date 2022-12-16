import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const item = <p>I am an Item</p>;

const elem = (
  <div>
    <h1>Hello, Element</h1>
    <p>This is a paragraph</p>
    {item}
    {item}
    {item}
    {item}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<App />
  //<h1>Hello, World!</h1>,
  elem
);
