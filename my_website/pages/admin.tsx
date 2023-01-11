import { useEffect, useState, useRef } from 'react'
import { getCookie } from 'typescript-cookie'
import { createProduct, deleteProduct } from '../product/productService'
import { createCategory, deleteCategory } from '../category/categoryService'

export default function admin() {
  const [admin, setAdmin] = useState(<></>)
  const productName = useRef(null)
  const productPrice = useRef(null)
  const productCategory = useRef(null)
  const isBottle = useRef(null)
  const isAccessory = useRef(null)
  const id = useRef(null)
  const idCategory = useRef(null)
  const categoryName = useRef(null)
  const IdDeleteCategory = useRef(null)
  function createProductForm() {
    createProduct(
      productName.current.value,
      productPrice.current.value,
      productCategory.current.value,
      isBottle.current.value,
      isAccessory.current.value
    )
  }
  function deleteProductForm() {
    deleteProduct(id.current.value)
  }
  function createCategoryForm() {
    createCategory(idCategory.current.value, categoryName.current.value)
  }
  function deleteCategoryForm() {
    deleteCategory(IdDeleteCategory.current.value)
  }
  useEffect(() => {
    document.title = 'ADMIN'
    if (getCookie('username') !== undefined && getCookie('username') === 'admin') {
      setAdmin(
        <div>
          <div>
            <form onSubmit={createProductForm} id="formpopup">
              <label>
                <input
                  placeholder="Nom du produit"
                  ref={productName}
                  className="inputAccount"
                  id="formInput"
                  type="text"
                />
              </label>
              <label>
                <input placeholder="Price" ref={productPrice} className="inputAccount" id="formInput" type="float" />
              </label>
              <label>
                <input
                  placeholder="ID Category"
                  ref={productCategory}
                  className="inputAccount"
                  id="formInput"
                  type="number"
                />
              </label>
              <label>
                IsBottle
                <input
                  ref={isBottle}
                  className="inputAccount"
                  id="formInput"
                  type="number"
                  defaultValue={0}
                  min="0"
                  max="1"
                  step={1}
                />
              </label>
              <label>
                isAccessory
                <input
                  ref={isAccessory}
                  className="inputAccount"
                  id="formInput"
                  type="number"
                  defaultValue={0}
                  min="0"
                  max="1"
                  step={1}
                />
              </label>
              <button type="submit">Créer le produit</button>
            </form>
            <form onSubmit={deleteProductForm} id="formpopup">
              {' '}
              Effacer produit par son id :
              <label>
                {' '}
                <input ref={id} type="number" placeholder="id"></input>
              </label>
              <button type="submit"> DELETE </button>
            </form>
          </div>

          <form onSubmit={createCategoryForm} id="formpopup">
            {' '}
            Créer une categorie
            <label>
              <input ref={idCategory} type="number" placeholder="id"></input>
            </label>
            <label>
              <input ref={categoryName} type="text" placeholder="Nom de la categorie"></input>
            </label>
            <button type="submit"> Créer la categorie</button>
          </form>
          <form onSubmit={deleteCategoryForm} id="formpopup">
            {' '}
            <label>
              Effacer une categorie <input ref={IdDeleteCategory} type="number" placeholder="id"></input>
            </label>
            <button type="submit"> Effacer la categorie</button>
          </form>
        </div>
      )
      // Ajouter formulaire pour ajouter categories et DELETE
    } else {
      setAdmin(
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="http://localhost:3001/" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }, [])

  return <div>{admin}</div>
}
