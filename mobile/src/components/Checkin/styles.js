import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 20px;
  margin-bottom: 10px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #666;
`;
