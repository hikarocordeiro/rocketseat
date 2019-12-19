import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Header from '~/components/Header';
import Question from '~/components/Question';

import { Container, SubmitButton, QuestionList } from './styles';

function List({ navigation, isFocused }) {
  const [questions, setQuestions] = useState([]);

  const { id } = useSelector(state => state.auth.student);

  const loadQuestions = useCallback(async () => {
    const response = await api.get(`/students/${id}/help-orders`);

    setQuestions(response.data);
  }, [id]);

  useEffect(() => {
    if (isFocused) {
      loadQuestions();
    }
  }, [isFocused, loadQuestions]);

  return (
    <>
      <Header />
      <Container>
        <SubmitButton onPress={() => navigation.navigate('Add')}>
          Novo pedido de auxílio
        </SubmitButton>

        <QuestionList
          data={questions}
          keyExtractor={item => String(item.id)}
          renderItem={({ item: question }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { question })}
            >
              <Question data={question} />
            </TouchableOpacity>
          )}
        />
      </Container>
    </>
  );
}

List.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(List);
