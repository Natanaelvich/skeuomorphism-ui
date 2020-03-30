import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, NotificationContainer, ButtonHeader } from './styles';

export default function Header() {
  return (
    <Container>
      <ButtonHeader style={{ marginLeft: 24 }}>
        <Feather name="chevron-left" color="#6E81A0" size={24} />
      </ButtonHeader>

      <NotificationContainer>
        <ButtonHeader style={{ marginRight: 10 }}>
          <Feather name="bell" color="#6E81A0" size={24} />
        </ButtonHeader>
        <ButtonHeader>
          <Feather name="shopping-bag" color="#6E81A0" size={24} />
        </ButtonHeader>
      </NotificationContainer>
    </Container>
  );
}
