import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'


function App() {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState([])
  
  useEffect(() => {

    fetch("http://localhost:3004/products")
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
    
  }, [])

  useEffect(() => {

    setTotal(basket.reduce((a, b) => a + b.subtotal, 0))
  }, [basket])

  const moveToCard = id => {
    let found = products.find(x => x.id == id)
    if (found) {
      setBasket(elm => {
        const setInBasket = elm.find(x => x.id == id)

        if (setInBasket) {
          return elm.map(item => item.id == id ? { ...item, count: item.count + 1, subtotal: item.price * (item.count + 1) } : item)
        }

        else {
          return [...elm, { ...found, count: 1, subtotal: found.price * 1 }]
        }
      })
    }
  }

  const handleAdd = (id) => {

    setBasket(elm => {
      return elm.map(item => item.id == id ? { ...item, count: item.count + 1, subtotal: item.price * (item.count + 1) } : item)
    })
  }

  const handleUnAdd = (id) => {
    let decrement = 0

    setBasket(elm => {
      elm.forEach(item => {
        if (item.count > 1) {
          decrement = -1
        }
        else {
          decrement = 0
        }
      })
      return elm.map(item => item.id == id ? { ...item, count: item.count + decrement, subtotal: item.price * (item.count + decrement) } : item)
    })
  }

  const handleDelete = (id) => {
    let found = basket.find(x => x.id == id)
    setBasket([...basket.filter(item => item.id != found.id)])
  }

  return (
    <>
      <div className='row'>
        <ProductList items={products} onMove={moveToCard} />
        <Basket items={basket} handleAdd={handleAdd} handleUnAdd={handleUnAdd} handleDelete={handleDelete} total={total} />
      </div>
    </>
  )
}

export default App
