import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from './styles/colors';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            // Confirm,
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255,255,255,0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboarHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: colors.primaryLight,
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
