import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurante } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-havokk.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeacturedRestaurante: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getFeacturedCardapio: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => {
        return {
          url: 'checkout',
          method: 'POST',
          body
        }
      }
    })
  })
})

export const {
  useGetFeacturedCardapioQuery,
  useGetFeacturedRestauranteQuery,
  usePurchaseMutation
} = api

export default api
