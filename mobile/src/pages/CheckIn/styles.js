import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  padding: 0 25px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { marginTop: 20 },
})``;
