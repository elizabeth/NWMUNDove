import React, { Component } from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { ListItem } from 'react-native-elements';
import styles from '../Style'

const list = [
    {
        title: 'About'
    },
    {
        title: 'Contact'
    }
]

class Settings extends Component {
    keyExtractor = (item, index) => item.title

    goToSetting = (screen) => {
        this.props.navigation.navigate(screen)
    }

    renderSeparator = () => {
        return (
            <View style={styles.listSeparator}/>
        );
    };

    render() {
        return (
            <FlatList
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={({item}) => <ListItem title={item.title} containerStyle={styles.listItem} onPress={() => this.goToSetting(item.title)} />}
                ItemSeparatorComponent={this.renderSeparator}
            />
        );
    }
}
  
export default Settings;