import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Foods from '../components/Foods'
import { getProducts } from '../firebase'
import '@material-tailwind/react/tailwind.css'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((products) => {
      console.log(products, 'products')
      if(products && products.length){
        products.filter((item) => {
          item.price = Number(item.price)
          item.qty = 0
        })
        console.log(products, "products")
        setProducts(products)
      }    
    })
  }, [])

  return (
    <div className='home'>
      <Header />
      <Foods products={products} />
    </div>
  )
}

export default Home
