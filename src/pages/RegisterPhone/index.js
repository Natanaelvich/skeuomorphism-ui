import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  ButtonContinue,
  Header,
  Info,
  InputPhone,
  Title,
  TitleConteiner,
  ButtonText,
  ButtonBack,
} from './styles';

export default function RegisterPhone() {
  return (
    <Container>
      <Header>
        <ButtonBack>
          <Feather name="chevron-left" color="#6E81A0" size={24} />
        </ButtonBack>
        <Info>Skip</Info>
      </Header>
      <TitleConteiner>
        <Title>Register phone</Title>
        <Info>Enter your mobile number to enable 2-step verification</Info>
      </TitleConteiner>

      <InputPhone />
      <ButtonContinue>
        <ButtonText>Continue</ButtonText>
      </ButtonContinue>
    </Container>
  );
}
