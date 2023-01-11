import { useEffect, useState } from 'react'
import { fetchProduct } from '../product/productService'
import Image from 'next/image'
import Footer from '../pages/footer'
import { setCookie } from 'typescript-cookie'
import Link from '@mui/material/Link'

export default function accesoires() {
  const [data, setData] = useState(null)
  const handleClick = (event, param) => {
    setCookie('productId', param)
  }
  useEffect(() => {
    fetchProduct().then((response) => {
      setData(response.data)
    })
  }, [])
  return (
    <div className="cards">
      {data &&
        data.map((product, i) => {
          const src = `/${product.productName}.jpg`
          if (product.isAccessory === 1) {
            return (
              <div>
                <div className="card">
                  <Image src={src} alt="Produit de greento" width={800} height={800} />
                  <h2 className="card-title">{product.productName}</h2>
                  <Link href="../productPage" className="card-desc" onClick={(event) => handleClick(event, product.id)}>
                    {product.productPrice} €
                  </Link>
                </div>
              </div>
            )
          }
        })}
      <Footer />
    </div>
  )
}
