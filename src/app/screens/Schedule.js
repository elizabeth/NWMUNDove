import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { View } from 'react-native';
import moment from 'moment';

import CalendarStrip from 'react-native-calendar-strip';
import styles from '../Style'

const scheduleData = {
    "2018-11-17": [
        {"name": "first item"},
        {"name": "first second"},
    ],
    "2018-11-18": [
        {"name": "second item"},
        {"name": "second second"}
    ]
};

let datesWhitelist = [{
    start: '2018-11-17',
    end: '2018-11-19'  // total 4 days enabled
  }];
let datesBlacklist = [ moment().add(1, 'days') ]; // 1 day disabled


class Schedule extends Component {
        render() {
            return (
                <View>
                    <CalendarStrip
                        calendarAnimation={{type: 'sequence', duration: 30}}
                        daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                        calendarHeaderStyle={{color: '#293A8C'}}
                        calendarColor={'#CED0CE'}
                        dateNumberStyle={{color: 'white'}}
                        dateNameStyle={{color: 'white'}}
                        highlightDateNumberStyle={{color: '#293A8C'}}
                        highlightDateNameStyle={{color: '#293A8C'}}
                        disabledDateNameStyle={{color: 'grey'}}
                        disabledDateNumberStyle={{color: 'grey'}}
                        datesWhitelist={datesWhitelist}
                        datesBlacklist={datesBlacklist}
                        // iconLeft={require('./img/left-arrow.png')}
                        // iconRight={require('./img/right-arrow.png')}
                        iconContainer={{flex: 0.1}}
                    />
                </View>
            );
        }
      

    }
  
export default Schedule;