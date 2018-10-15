import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation'
import { Text, View } from 'react-native';
import styles from '../Style'

class Schedule extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}> 
            <View style={styles.container}>
                <Text>Schedule here</Text>
            </View>
            </SafeAreaView>
        );
    }
}
  
export default Schedule;