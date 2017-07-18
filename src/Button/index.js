// @flow
import React from 'react'
import { string } from 'prop-types'
import Icon from 'Icon'

// styles
import { ButtonWrapper } from './styles'

// types
import type { Colors } from 'coderbox-components'

type Props = Colors & {
  icon?: string,
  children?: any,
}

const Button = ({ icon, children, ...props }: Props) => {
  return (
    <ButtonWrapper {...props}>
      {icon && <Icon name={icon} />}
      {children}
    </ButtonWrapper>
  )
}

Button.propTypes = {
  icon: string
}

Button.defaultProps = {
  palette: 'white'
}

export default Button
