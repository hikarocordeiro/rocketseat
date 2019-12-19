import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import CheckIn from './pages/CheckIn';

import List from './pages/Help/List';
import Show from './pages/Help/Show';
import Add from './pages/Help/Add';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn,
            Help: {
              screen: createStackNavigator(
                {
                  List,
                  Show,
                  Add,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#444',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerStyle: {
                      borderBottomWidth: 1,
                      borderBottomColor: '#ddd',
                      height: 45,
                    },
                  },
                }
              ),
              resetOnBlur: true,
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={22} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              labelStyle: {
                marginTop: 4,
                fontSize: 14,
              },
              style: {
                height: 70,
                padding: 15,
                borderTopWidth: 1,
                borderTopColor: '#ddd',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
