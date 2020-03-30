import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight + 50}px;
`;
export const ButtonHeader = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 0;
  background: transparent;
  border-radius: 28.4907px;
  elevation: 2;
`;
export const NotificationContainer = styled.View`
  margin-right: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
