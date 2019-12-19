import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, Number, Info } from './styles';

export default function Checkin({ data }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.created_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.created_at]);

  return (
    <Container>
      <Number> Check-in #{data.id}</Number>
      <Info>{dateParsed}</Info>
    </Container>
  );
}

Checkin.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
  }).isRequired,
};
