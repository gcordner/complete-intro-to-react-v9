import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Margherita",
      description: "Tomato, mozzarella, basil",
    }),
    React.createElement(Pizza, {
      name: "Pepperoni",
      description: "Tomato, mozzarella, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Hawaiian",
      description: "Tomato, mozzarella, ham, pineapple",
    }),
    React.createElement(Pizza, {
      name: "Vegetarian",
      description: "Tomato, mozzarella, mushrooms, peppers, onions",
    }),
    React.createElement(Pizza, {
      name: "Meat Feast",
      description: "Tomato, mozzarella, pepperoni, ham, sausage",
    }),
    React.createElement(Pizza, {
      name: "BBQ Chicken",
      description: "BBQ sauce, mozzarella, chicken",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
