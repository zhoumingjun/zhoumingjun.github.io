import React from 'react'
import { Anchor } from 'grommet'

export default ({ path, ...rest }) => <Anchor href={path} {...rest} />
