import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'

export class ListItem extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    _onPress = () => {
        this.props.onPress(this.props)
    }

    render() {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listText}>{this.props.name}</Text>
                <TouchableOpacity onPress={this._onPress}>
                    <Ionicons name="md-checkmark-circle" style={styles.checkIcon} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
    },
    listText: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
    },
    checkIcon: {
        fontSize: 40,
        color: 'green',
    }
})