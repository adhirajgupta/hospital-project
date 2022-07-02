import React, { Component } from 'react';
import { View, } from 'react-native'
import { Searchbar } from 'react-native-paper';
import AppBar from '../../globalComponents/AppBar';
import ListComponent from './components/List';


class Affiliations extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: ''
        }
    }

    onChangeSearch = (text) => {
        console.log("Text Changed")
        this.setState({
            searchQuery: text
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ margin: 30 }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={this.onChangeSearch}
                        value={this.state.searchQuery}
                    />
                </View>
                <ListComponent />
            </View>
        );
    }
}

export default Affiliations;