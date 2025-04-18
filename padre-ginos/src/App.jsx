import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Margherita"
        description="Tomato, mozzarella, basil"
      />
      <Pizza
        name="Pepperoni"
        description="Tomato, mozzarella, pepperoni"
      />
      <Pizza
        name="Hawaiian"
        description="Tomato, mozzarella, ham, pineapple"
      />
      <Pizza
        name="Vegetarian"
        description="Tomato, mozzarella, mushrooms, peppers, onions"
      />
      <Pizza
        name="Meat Feast"
        description="Tomato, mozzarella, pepperoni, ham, sausage"
      />
      <Pizza
        name="BBQ Chicken"
        description="BBQ sauce, mozzarella, chicken"
      />
      <Pizza
        name="Four Cheese"
        description="Tomato, mozzarella, gorgonzola, parmesan, goat cheese"
      />
      <Pizza
        name="Seafood"
        description="Tomato, mozzarella, shrimp, squid, mussels"
      />
      <Pizza
        name="Buffalo Chicken"
        description="Buffalo sauce, mozzarella, chicken, blue cheese"
      />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
