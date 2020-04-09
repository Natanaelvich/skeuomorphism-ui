import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${Constants.statusBarHeight + 50}px;
  padding-right: 10px;
  padding-left: 10px;
`;
export const ButtonBack = styled.TouchableOpacity`
  border: 1px solid #e6eef8;
  border-radius: 28px;
  padding: 5px;
  elevation: 2;
`;
export const TitleConteiner = styled.View`
  margin-top: 58px;
`;
export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.4px;
  color: #334669;
`;
export const Info = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #334669;
  opacity: 0.6;
  margin-top: 14px;
`;
export const InputPhone = styled.TextInput`
  height: 58px;
  border-radius: 28px;
  background: #e3edf7;
  margin: 0 24px;
  margin-top: 34px;
  text-align: center;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #334669;
  opacity: 0.6;
`;
export const ButtonContinue = styled.TouchableOpacity`
  background: #e8f3fb;
  height: 59px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
  elevation: 2;
  margin-top: auto;
  margin-bottom: 50px;
  margin-left: 24px;
  margin-right: 24px;
`;
export const ButtonText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #2e476e;
`;
