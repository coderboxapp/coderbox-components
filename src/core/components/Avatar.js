// @flow
import React from 'react'
import md5 from 'js-md5'
import { AvatarStyle, AvatarImageStyle } from '../styles'

type Props = {
  email: ?string,
  url: string,
  size?: number,
  className?: string,
  edit?: boolean,
}

const AvatarComponent = ({
  email,
  url,
  size = 140,
  className = '',
  edit = false
}: Props) => {
  let hash: string = md5(email || '')
  let image: string = url || 'https://www.gravatar.com/avatar/' + hash + '?s=' + size

  return (
    <AvatarStyle className={className}>
      <AvatarImageStyle image={image} size={`${size}px`} />
      {edit &&
        <a
          href='https://en.gravatar.com/support/activating-your-account/'
          target='_blank'
          style={{ marginTop: 4, display: 'block' }}
        >
          Change picture
        </a>}
    </AvatarStyle>
  )
}

export default AvatarComponent
