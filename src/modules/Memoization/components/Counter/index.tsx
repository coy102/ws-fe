import { memo } from 'react'
import Button from '@mui/material/Button'

interface Props {
  counter: number
  handleClickIncrement: () => void
}

const Counter = ({ counter, handleClickIncrement }: Props) => {
  console.log('re render counter')
  return <Button onClick={handleClickIncrement}>increment count: {counter}</Button>
}

export default memo(Counter)
