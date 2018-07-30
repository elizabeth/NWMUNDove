import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Settings from '../screens/Settings'

export const Tabs = Platform.select({
    ios: createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
            }
        },
        Schedule: {
            screen: Schedule,
            navigationOptions: {
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ tintColor }) => <Icon name="date-range" size={30} color={tintColor} />
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => <Icon name="settings" size={30} color={tintColor} />
            },
        }
    }),
    android: createMaterialTopTabNavigator({
        Home: {
            screen: Home
        },
        Schedule: {
            screen: Schedule
        },
        Settings: {
            screen: Settings
        }
    })
})