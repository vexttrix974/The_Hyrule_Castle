import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3001',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
})
