import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  height: 150px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StatusIcon = styled(Icon)`
  color: ${props => (props.answered ? '#42cb59' : '#999')};
`;

export const QuestionState = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#999')};
  margin-left: 8px;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #666;
`;

export const QuestionText = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 14px;
  color: #666;
  line-height: 26px;
  margin-top: 16px;
`;
