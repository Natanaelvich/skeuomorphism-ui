import React from 'react';

import {
  Container,
  Card,
  PaginationContainer,
  Title,
  Image,
  TitleImage,
  TextArea,
} from './styles';
import Header from '~/components/Header';

import image from '~/assets/image.png';

export default function Detail() {
  return (
    <Container>
      <Header />
      <Title>Rate your order</Title>

      <Card>
        <PaginationContainer></PaginationContainer>
        <TitleImage>Bottle Magic Tricks</TitleImage>
        <Image source={image} />
        <TextArea />
      </Card>
    </Container>
  );
}
