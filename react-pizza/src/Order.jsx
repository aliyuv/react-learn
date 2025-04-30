import { useState, useEffect } from 'react'
import Pizza from './Pizza'

// feel free to change en-US /usd to your locale
const intl = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export default function Order() {
  const [pizzaType, setPizzaType] = useState('pepperoni')
  const [pizzaSize, setPizzaSize] = useState('M')
  const [pizzaTypes, setPizzaTypes] = useState([])
  const [loading, setLoading] = useState(true)

  let price, selectedPizza
  if (!loading) {
    selectedPizza = pizzaTypes.find(pizza => pizzaType === pizza.id)
    price = intl.format(selectedPizza?.sizes[pizzaSize])
  }

  useEffect(() => {
    fetchPizzaTypes()
  }, [])

  async function fetchPizzaTypes() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const pizzaRes = await fetch('/api/pizzas')
    const pizzaJson = await pizzaRes.json()
    setPizzaTypes(pizzaJson)
    setLoading(false)
  }



  return (
    <div className="order">
      <h2>Create Order</h2>
      <form>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType} onChange={e => setPizzaType(e.target.value)}>
              {
                pizzaTypes.map(pizza =>
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                )
              }
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  type="radio"
                  checked={pizzaSize === 'S'}
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={e => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-m"
                  value="M"
                  checked={pizzaSize === 'M'}
                  onChange={e => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="pizza-size"
                  id="pizza-l"
                  value="L"
                  checked={pizzaSize === 'L'}
                  onChange={e => setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        {
          loading ? (
            <h3>Loading...</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )
        }
      </form>
    </div>
  )
}