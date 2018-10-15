import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
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
            title: 'NWMUN',
            ...Platform.select({
                android: {
                    headerStyle: {
                        backgroundColor: '#293A8C',
                    },
                    headerTintColor: '#fff'
                }
            }) 
        }
    }
})

export const ScheduleStack = StackNavigator({
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            title: 'Schedule',
            ...Platform.select({
                android: {
                    headerStyle: {
                        backgroundColor: '#293A8C',
                    },
                    headerTintColor: '#fff'
                }
            })
        }
    }
})

export const SettingsStack = StackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        },
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Contact',
        },
    }},
    {
        navigationOptions: {
            ...Platform.select({
                android: {
                    headerStyle: {
                        backgroundColor: '#293A8C',
                    },
                    headerTintColor: '#fff'
                }
            })
        }
    }
)

export const androidHeader = Platform.select({
    android: {
        headerStyle: {
            backgroundColor: '#293A8C',
        },
        headerTintColor: '#fff'
    }
})

export const Tabs = Platform.select({
    ios: createBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={tintColor} />,
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
    android: createMaterialBottomTabNavigator({
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
            }        
        },
        Schedule: {
            screen: ScheduleStack,
            navigationOptions: {
                tabBarLabel: 'Schedule',
                tabBarIcon: ({ tintColor }) => <Icon name="date-range" color={tintColor} />
            }        
        },
        //TODO: Move settings
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
            }        
        }
    }, {
        shifting: true,
        initialRouteName: 'Home',
        barStyle: { backgroundColor: '#293A8C' },
    })
})