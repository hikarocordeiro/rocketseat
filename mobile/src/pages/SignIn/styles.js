import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;

  justify-content: center;
  align-items: center;
  padding: 0 25px;
  background: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 45px;
  margin-bottom: 10px;
  padding-left: 20px;
  color: #999999;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
