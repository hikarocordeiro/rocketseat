import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  background-color: #f5f5f5;
`;

export const QuestionInput = styled.TextInput.attrs({
  textAlignVertical: 'top',
})`
  height: 300px;
  background: #ffffff;
  margin: 20px;
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  color: #999999;
`;

export const SubmitButton = styled(Button)`
  margin: 0 20px;
`;
