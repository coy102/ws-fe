import { memo, useCallback } from 'react'

import TextField from '@mui/material/TextField'
import debounce from 'lodash/debounce'

import useAxios from '~/utils/useAxios'
import ProductList from './ProductList'

const Products = () => {
  const { data, refetch } = useAxios('https://dummyjson.com/products')

  const handleChangeSearch = useCallback(
    (e) => {
      refetch(`/search?q=${e.target.value}`)
    },
    [refetch],
  )

  const debouncedChangeSearch = debounce(handleChangeSearch, 500)

  return (
    <>
      <TextField size='small' onChange={debouncedChangeSearch} />
      <ProductList products={data?.products} />
    </>
  )
}

export default memo(Products)
