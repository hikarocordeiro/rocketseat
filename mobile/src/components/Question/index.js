import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import {
  Container,
  Title,
  Left,
  StatusIcon,
  QuestionState,
  Info,
  QuestionText,
} from './styles';

export default function Question({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Title>
        <Left>
          <StatusIcon
            answered={data.answer_at ? 1 : 0}
            name="check-circle"
            size={16}
          />
          <QuestionState answered={data.answer_at ? 1 : 0}>
            {data.answer_at ? 'Respondido' : 'Sem resposta'}
          </QuestionState>
        </Left>

        <Info>{dateParsed}</Info>
      </Title>
      <QuestionText>{data.question}</QuestionText>
    </Container>
  );
}

Question.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    answer_at: PropTypes.string,
    created_at: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};
