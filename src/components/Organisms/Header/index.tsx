import React from 'react'
import { Container  } from './styles'
import Image from 'next/image'
import Logo from '@/assets/header/logo.png'

const Header: React.FC = () => {
  return (
      <Container>
        <Image src={Logo} alt="Logo" width={160} height={35} />
      </Container>
  )
}

export default Header
