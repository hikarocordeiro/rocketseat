import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';

import { Container, QuestionInput, SubmitButton } from './styles';

export default function Add({ navigation }) {
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(false);

  const { id } = useSelector(state => state.auth.student);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);

      await api.post(`/students/${id}/help-orders`, { question });

      setLoading(false);

      navigation.navigate('List');
    } catch (err) {
      Alert.alert(
        'Falha ao pedir ajuda',
        (err.response && err.response.data.error) || 'Tente novamente'
      );
      setLoading(false);
    }
  }, [id, navigation, question]);

  return (
    <>
      <Container>
        <Header />

        <QuestionInput
          autoCorrect={false}
          placeholder="Inclua seu pedido de auxílio"
          multiline
          numberOfLines={15}
          value={question}
          onChangeText={setQuestion}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Enviar pedido
        </SubmitButton>
      </Container>
    </>
  );
}

Add.navigationOptions = ({ navigation }) => ({
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
