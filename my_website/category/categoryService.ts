import { api } from '../services/servicesHelper'
import { getCookie } from 'typescript-cookie'
export const fetchProduct = async () => {
  return await api.get('/categories/')
}
export const fetchCategoriesById = async (id: number) => {
  return await api.get('/categories/' + id).then((response) => {
    return response
  })
}

export const createCategory = async (id: number, name: any) => {
  return await api.post(
    '/categories',
    {
      id,
      name
    },
    {
      headers: {
        Authorization: getCookie('Authorization')
      }
    }
  )
}
export const deleteCategory = async (id: number) => {
  return await api.delete('/categories/' + id, {
    headers: {
      Authorization: getCookie('Authorization')
    }
  })
}
