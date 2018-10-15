import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation'
import { Platform, StyleSheet, Text, View } from 'react-native';
import styles from '../Style'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
class Home extends Component<Props> {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={[styles.container, homeStyles.container]}>
                    <Text style={homeStyles.welcome}>Welcome to my app!</Text>
                </View>
            </SafeAreaView>
        );
    }
}
  
const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});
  
export default Home;