import React from 'react';

import Header from '~/components/Header';
import {
  Container,
  Desc,
  TitleContainer,
  Title,
  Description,
  Avatar,
  Slide,
  SlidePagination,
  Pagination,
  SlideText,
  SlideImage,
} from './styles';

import avatar from '~/assets/avatar.jpg';
import image1 from '~/assets/image1.png';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Desc>
        <TitleContainer>
          <Title>Natanael Lima</Title>
          <Description>Desenvolvedor Mobile/Web</Description>
        </TitleContainer>
        <Avatar source={avatar} />
      </Desc>

      <Slide>
        <SlidePagination>
          <Pagination />
        </SlidePagination>
        <SlideText>Shots</SlideText>
        <SlideImage source={image1} />
      </Slide>

      <Slide
        style={{
          position: 'absolute',
          top: 616,
          width: '100%',
          height: '100%',
        }}
      >
        <SlidePagination>
          <Pagination />
        </SlidePagination>
        <SlideText>Whilist</SlideText>
      </Slide>
    </Container>
  );
}
