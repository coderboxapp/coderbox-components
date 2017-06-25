// @flow
import React from 'react'
import md5 from 'js-md5'
import { AvatarStyle, AvatarImageStyle } from './styles'

type Props = {
  email?: string,
  url?: string,
  size?: number,
  edit?: boolean
}

const Avatar = ({
  email,
  url,
  size = 140,
  edit = false,
  ...props
}: Props) => {
  let hash: string = md5(email || '')
  let image: string = url || 'https://www.gravatar.com/avatar/' + hash + '?s=' + size

  return (
    <AvatarStyle {...props}>
      <AvatarImageStyle image={image} size={size} />
      {edit &&
        <a href='https://en.gravatar.com/support/activating-your-account/' target='_blank'>
          Change picture
        </a>}
    </AvatarStyle>
  )
}

export default Avatar
