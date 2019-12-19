import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';
import Checkin from '~/components/Checkin';

import { Container, SubmitButton, List } from './styles';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useSelector(state => state.auth.student);

  const loadCheckins = useCallback(async () => {
    const response = await api.get(`/students/${id}/checkins`);

    setCheckins(response.data);
  }, [id]);

  useEffect(() => {
    loadCheckins();
  }, [id, loadCheckins]);

  async function handleCheckIn() {
    try {
      setLoading(true);
      await api.post(`/students/${id}/checkins`);

      loadCheckins();
    } catch (err) {
      Alert.alert(
        'Falha no checkin',
        (err.response && err.response.data.error) || 'Tente novamente'
      );
    }
    setLoading(false);
  }

  return (
    <>
      <Header />
      <Container>
        <SubmitButton loading={loading} onPress={handleCheckIn}>
          Novo check-in
        </SubmitButton>

        <List
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Checkin data={item} />}
        />
      </Container>
    </>
  );
}

CheckIn.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
};
