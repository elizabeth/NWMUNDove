import React, { Component } from 'react';
import { FlatList, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-navigation'
import { ListItem } from 'react-native-elements';

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

    renderSeparator = () => {
        return (
            <View
                style={{
                height: 0.5,
                backgroundColor: "#CED0CE",
                marginLeft: 15
                }}
            />
        );
    };

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={({item}) => <ListItem title={item.title} containerStyle={{ borderBottomWidth: 0 }}></ListItem>}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    
});
  
export default Settings;