// @flow
import React from 'react'
import { string } from 'prop-types'
import Icon from 'Icon'
import { ButtonWrapper } from './styles'

import type { Colors } from 'coderbox-components'

type Props = Colors & {
  icon?: string,
  children?: any,
}

const Button = ({ palette, tone, icon, children, ...props }: Props) => {
  return (
    <ButtonWrapper palette={palette} tone={tone} {...props}>
      {icon && <Icon name={icon} palette='white' />}
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  palette: string,
  icon: string
}

Button.defaultProps = {
  palette: 'white',
  tone: 0
}

export default Button
