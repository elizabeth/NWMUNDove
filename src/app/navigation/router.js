import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Settings from '../screens/Settings'
import About from "../screens/Settings/About";
import Contact from "../screens/Settings/Contact";

export const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'NWMUN'
        }
    }
})

export const ScheduleStack = StackNavigator({
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            title: 'Schedule'
        }
    }
})

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }
    },
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => ({
            title: 'About',
        }),
    },
    Contact: {
        screen: Contact,
        navigationOptions: ({ navigation }) => ({
            title: 'Contact',
        }),
    }
})

export const Tabs = Platform.select({
    ios: createBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />
            }
        },
        Schedule: {
            screen: ScheduleStack,
            navigationOptions: {
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ tintColor }) => <Icon name="date-range" size={30} color={tintColor} />
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => <Icon name="settings" size={30} color={tintColor} />
            },
        }
    }, {
        tabBarOptions: {
            activeTintColor: '#293A8C'
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
    }, {
        tabBarOptions: {
            activeTintColor: '#293A8C'
        }
    })
})