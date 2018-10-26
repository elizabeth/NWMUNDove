import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, StackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import About from '../screens/About'
import NWMUN from "../screens/About/NWMUN";
import Contact from "../screens/About/Contact";

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

export const AboutStack = StackNavigator({
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        }
    },
    NWMUN: {
        screen: NWMUN,
        navigationOptions: {
            title: 'NWMUN',
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
        About: {
            screen: AboutStack,
            navigationOptions: {
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor }) => <Icon name="info" size={30} color={tintColor} />
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
        About: {
            screen: AboutStack,
            navigationOptions: {
                tabBarLabel: 'About',
                tabBarIcon: ({ tintColor }) => <Icon name="info" color={tintColor} />
            }        
        }
    }, {
        shifting: true,
        initialRouteName: 'Home',
        barStyle: { backgroundColor: '#293A8C' },
    })
})