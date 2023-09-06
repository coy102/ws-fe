import { memo } from 'react'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface Props {
  title: string
  thumbnail: string
}

const ProductItem = ({ title, thumbnail }: Props) => {
  return (
    <Card>
      <img alt={title} src={thumbnail} width='100%' height={265} />
      <CardContent>
        <Typography fontSize={14}>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default memo(ProductItem)
