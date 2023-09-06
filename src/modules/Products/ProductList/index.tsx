import Grid from '@mui/material/Grid'
import LazyLoad from 'react-lazyload'

import ProductItem from '~/components/ProductItem'
import Skeleton from '~/components/Skeleton'
import Typography from '@mui/material/Typography'
import { memo } from 'react'

interface Props {
  products: any[]
}

const ProductList = ({ products }: Props) => {
  console.log('render products')

  return (
    <>
      <Typography>Products</Typography>
      <Grid container spacing={3}>
        {products?.map((item) => (
          <Grid item md={6} key={item.id}>
            <LazyLoad debounce={100} placeholder={<Skeleton />}>
              <ProductItem thumbnail={item.thumbnail} title={item.title} />
            </LazyLoad>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default memo(ProductList)
