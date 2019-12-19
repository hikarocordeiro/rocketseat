import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/header_logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
    </Container>
  );
}
