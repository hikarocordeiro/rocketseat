import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 22px 20px;
`;

export const Container = styled.View`
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  padding: 0 20px 20px 20px;
`;

export const Title = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #444;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const TextBlock = styled.Text`
  font-size: 14px;
  color: #666;
  margin-top: 16px;
  line-height: 26px;
  text-align: justify;
`;
