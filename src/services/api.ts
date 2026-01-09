import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ItemCardapio, Restaurante } from '../pages/Home'

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
    })
  })
})

export const { useGetFeacturedCardapioQuery, useGetFeacturedRestauranteQuery } =
  api

export default api
