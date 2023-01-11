import Image from 'next/image'
import Footer from '../pages/footer'
import React, { useEffect, useState } from 'react'
import { fetchOrderProducts, deleteOrderProduct } from '../OrderProduct/OrderProductService'
import { getCookie } from 'typescript-cookie'
import { fetchProductById } from '../product/productService'
import { TiDeleteOutline } from 'react-icons/ti'

export default function panier() {
  const [data, setData] = useState(null)
  const price = []
  const date = new Date()
  const livrasiondate = new Date()
  livrasiondate.setDate(date.getDate() + 3)
  const livraison = livrasiondate.getFullYear() + '-' + (livrasiondate.getMonth() + 1) + '-' + livrasiondate.getDate()
  useEffect(() => {
    fetchOrderProducts().then((response) => {
      setData(response.data)
    })
  }, [])
  const deleteProductInBasket = (event, id: number) => {
    deleteOrderProduct(id).then(() => window.location.reload())
  }

  interface product {
    name: String
    price: number
  }
  return (
    <div className="overflow">
      {data &&
        data.map((product, i) => {
          if (product.OrderId.toString() === getCookie('OrderId')) {
            fetchProductById(product.productId).then((response: any) => {
              if (response.data !== null) {
                const product: product = {
                  name: response.data.productName,
                  price: response.data.productPrice
                }
                sessionStorage.setItem(`basketData${i}`, JSON.stringify(product))
              }
            })
            if (sessionStorage.getItem(`basketData${i}`) !== null) {
              const productData: product = JSON.parse(sessionStorage.getItem(`basketData${i}`))
              const src = `/${productData.name}.jpg`
              price.push(productData.price * product.quantity)
              return (
                <div className="courses-container">
                  <div className="course">
                    <div className="course-preview">
                      <Image
                        src={src}
                        alt="Les produits de greento que vous avez choisis dans votre panier"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="course-info">
                      <div className="progress-container">
                        <div className="progress"></div>
                        <TiDeleteOutline
                          onClick={(event) => deleteProductInBasket(event, product.id)}
                          className="deleteProduct"
                        />
                      </div>
                      <h2>{productData && productData.name}</h2>
                      <p>{productData && productData.price} € </p>
                      <p>quantité: {product.quantity} </p>
                    </div>
                  </div>
                </div>
              )
            }
          }
        })}
      <div>
        <div className="boxSummary">
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items"></span>Vos produits
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Prix Total</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                {price.slice(0, price.length).reduce((a, b) => a + b, 0)} €
              </div>
            </div>
            <p> Date de livrasion prévu (~3 Jours) : {livraison}</p>
          </div>
          <div className="summary-delivery">
            <select name="delivery-collection" className="summary-delivery-selection">
              <option value="0">Choisissez votre Option de Livraison</option>
              <option value="first-className">Point relais</option>
              <option value="second-className">Livraison a domicile</option>
              <option value="signed-for">Livraison a L'Etna</option>
            </select>
          </div>
          <div className="summary-total">
            <div className="total-title">Total</div>
            <div className="total-value final-value" id="basket-total"></div>
          </div>
          <div className="summary-checkout">
            <button className="checkout-cta">Passez au payement</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
