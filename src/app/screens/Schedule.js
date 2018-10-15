import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { Text, View } from 'react-native';
import { Calendar, Agenda, calendarTheme } from 'react-native-calendars';
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

class Schedule extends Component {
        constructor(props) {
          super(props);
          this.state = {
            items: {}
          };
        }
      
        render() {
            return (
                <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                // Hide knob button. Default = false
                hideKnob={true}
                rowHasChanged={this.rowHasChanged.bind(this)}
                // initially selected day
                selected={'2018-11-17'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2018-11-15'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2018-11-20'}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={0}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={0}
                firstDay={3}

                // markingType={'period'}
                // markedDates={{
                //    '2017-05-08': {textColor: '#666'},
                //    '2017-05-09': {textColor: '#666'},
                //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
                //    '2017-05-21': {startingDay: true, color: 'blue'},
                //    '2017-05-22': {endingDay: true, color: 'gray'},
                //    '2017-05-24': {startingDay: true, color: 'gray'},
                //    '2017-05-25': {color: 'gray'},
                //    '2017-05-26': {endingDay: true, color: 'gray'}}}
                // monthFormat={'yyyy'}
                // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
                //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
                />
            );
        }
      
        loadItems(day) {
            setTimeout(() => {

                const time = day.timestamp + 0 * 24 * 60 * 60 * 1000;
                const strTime = this.timeToString(time);

                var items = scheduleData[strTime] || [];
                // for (let j = 0; j < 2; j++) {
                //     items.push({
                //         name: 'Item for ' + strTime,
                //         height: Math.max(50, Math.floor(Math.random() * 150))
                //     });
                // }

                this.setState({
                    items: {[strTime]: items}
                });
            }, 1000);
        }
      
        renderItem(item) {
            return (
                <View style={[calendarStyles.item]}><Text>{item.name}</Text></View>
            );
        }
      
        renderEmptyDate() {
            return (
                <View style={calendarStyles.emptyDate}><Text>No events scheduled</Text></View>
            );
        }
      
        rowHasChanged(r1, r2) {
            return r1.name !== r2.name;
        }
      
        timeToString(time) {
            const date = new Date(time);
            return date.toISOString().split('T')[0];
        }
      }
      
      const calendarStyles = StyleSheet.create({
        item: {
            backgroundColor: 'white',
            flex: 1,
            borderRadius: 5,
            padding: 10,
            marginRight: 10,
            marginTop: 17
        },
        emptyDate: {
            height: 15,
            flex:1,
            paddingTop: 30
        }
      });
  
export default Schedule;