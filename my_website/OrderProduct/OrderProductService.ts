import { api } from '../services/servicesHelper'
import { getCookie, setCookie } from 'typescript-cookie'

export const fetchOrderProducts = async () => {
  return await api.get('/OrderProduct/')
}

export const createOrder = async (orderdate: any, userid: any) => {
  if (getCookie('OrderId') === undefined && getCookie('Id') !== undefined) {
    return await api
      .post(
        '/order',
        {
          orderdate,
          userid
        },
        {
          headers: {
            Authorization: getCookie('Authorization')
          }
        }
      )
      .then((response) => setCookie('OrderId', response.data.id))
  }
}

export const createOrderProduct = async (date: any, quantity: any, productId: any, OrderId: any) => {
  return await api.post(
    '/OrderProduct/',
    {
      date,
      quantity,
      productId,
      OrderId
    },
    {
      headers: {
        Authorization: getCookie('Authorization')
      }
    }
  )
}
export const deleteOrderProduct = async (id: number) => {
  return await api.delete('/OrderProduct/' + id, {
    headers: {
      Authorization: getCookie('Authorization')
    }
  })
}
