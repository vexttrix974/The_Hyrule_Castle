import { api } from '../services/servicesHelper'
import { getCookie } from 'typescript-cookie'

export const fetchProduct = async () => {
  return await api.get('/product/')
}
export const fetchProductById = async (id: number) => {
  return await api.get('/product/' + id).then((response) => {
    return response
  })
}
export const createProduct = async (
  productName: any,
  productPrice: any,
  productCategory: any,
  isBottle: any,
  isAccessory: any
) => {
  return await api.post(
    '/product',
    { productName, productPrice, productCategory, isBottle, isAccessory },
    {
      headers: {
        Authorization: getCookie('Authorization')
      }
    }
  )
}
export const deleteProduct = async (id: number) => {
  return await api.delete('/product/' + id, {
    headers: {
      Authorization: getCookie('Authorization')
    }
  })
}
