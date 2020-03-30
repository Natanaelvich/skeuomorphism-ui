import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #e4f0fa;
`;

export const Desc = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 43px;
`;
export const TitleContainer = styled.View``;
export const Title = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: -0.4px;
  color: #334669;
`;
export const Description = styled.Text`
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: #334669;
  opacity: 0.6;
`;
export const Avatar = styled.Image`
  width: 52px;
  height: 52px;
  border-radius: 29px;
`;
export const Slide = styled.View`
  margin-top: 56px;
  align-items: center;
  border-radius: 24px;
  elevation: 2;
  flex: 1;
`;
export const SlidePagination = styled.View``;
export const Pagination = styled.View`
  width: 120px;
  height: 3px;
  margin-top: 12px;
  background: rgba(110, 129, 160, 0.235905);
  border-radius: 100px;
`;
export const SlideText = styled.Text`
  margin-top: 42px;
  width: 327px;
  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  color: #334669;
`;
export const SlideImage = styled.Image`
  width: 327px;
  height: 258px;
`;
