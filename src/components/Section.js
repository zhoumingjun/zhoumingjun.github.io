import React from 'react'
import { Box } from 'grommet'

export default ({ children, ...rest }) => (
  <Box
    direction="row"
    justify="center"
    pad={{ horizontal: 'xlarge', vertical: 'large' }}
    {...rest}
  >
    <Box basis="xlarge">{children}</Box>
  </Box>
)
