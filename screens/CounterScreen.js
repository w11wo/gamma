import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { daysToFEP } from '../constants/DateAPI.js'

export default class CounterScreen extends React.Component {
    render() {
        const daysLeft = daysToFEP()
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.titleText}>Days to FEP:</Text>
                <Text style={styles.dateText}>{daysLeft}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 81,
        fontFamily: 'Avenir Next',
    },
})
