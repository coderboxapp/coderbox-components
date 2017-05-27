// @flow
import React from 'react'
import md5 from 'js-md5'
import { AvatarContainer, AvatarImage } from '../styles'

type Props = {
  email: ?string,
  url: string,
  size: number,
  edit: boolean,
}

const AvatarComponent = ({ email, url, size = 140, edit = false }: Props) => {
  let hash = md5(email || '')
  let image = url || 'https://www.gravatar.com/avatar/' + hash + '?s=' + size

  return (
    <AvatarContainer>
      <AvatarImage image={image} size={`${size}px`} />
      {edit &&
        <a
          href='https://en.gravatar.com/support/activating-your-account/'
          target='_blank'
          style={{ marginTop: 4, display: 'block' }}
        >
          Change picture
        </a>}
    </AvatarContainer>
  )
}

export default AvatarComponent
