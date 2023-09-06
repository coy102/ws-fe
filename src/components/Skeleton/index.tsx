import { memo } from 'react'

import Box from '@mui/material/Box'

const SekeltonLoading = () => {
  return <Box height={300} display='flex' flexDirection='column' bgcolor='#282828' />
}

export default memo(SekeltonLoading)
