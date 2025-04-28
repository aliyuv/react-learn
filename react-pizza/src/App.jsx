import React from "react"
import { createRoot } from "react-dom/client"
import Pizza from "./Pizza"

const App = () => {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <Pizza
        name="Pepperoni"
        description="Mozzarella Cheese, Pepperoni"
        image={"/public/pizzas/bbq_ckn.webp"}
      />
      <Pizza
        name="Margherita"
        description="Mozzarella Cheese, Tomato Sauce, Basil"
        image={"/public/pizzas/ckn_alfredo.webp"}
      />
      <Pizza
        name="Vegetarian"
        description="Mozzarella Cheese, Tomato Sauce, Mushrooms, Onions, Peppers"
        image={"/public/pizzas/ckn_pesto.webp"}
      />
      <Pizza
        name="Hawaiian"
        description="Mozzarella Cheese, Tomato Sauce, Ham, Pineapple"
        image={"/public/pizzas/ckn_pesto.webp"}
      />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))