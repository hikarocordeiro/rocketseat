import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Wrapper,
  Container,
  Title,
  TitleText,
  Info,
  TextBlock,
} from './styles';

export default function Show({ navigation }) {
  const question = navigation.getParam('question');

  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(question.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [question.created_at]);

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Title>
            <TitleText>PERGUNTA</TitleText>
            <Info>{dateParsed}</Info>
          </Title>
          <TextBlock>{question.question}</TextBlock>

          <Title>
            <TitleText>RESPOSTA</TitleText>
          </Title>
          <TextBlock>{question.answer}</TextBlock>
        </Container>
      </Wrapper>
    </>
  );
}

Show.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('List');
      }}
    >
      <Icon name="chevron-left" size={24} color="#444" />
    </TouchableOpacity>
  ),
});
