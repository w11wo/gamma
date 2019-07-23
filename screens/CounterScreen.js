import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { daysToFEP } from '../constants/DateAPI.js'
import * as Font from 'expo-font'

export default class CounterScreen extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }
    
    render() {
        const daysLeft = daysToFEP()
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Reminders</Text>
                </View>
                <View style={styles.counterView}>
                    <Text style={styles.counterName}>Days to FEP:</Text>
                    <Text style={styles.dateText}>{daysLeft}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex: 1,
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 30,
    },
    counterView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 28,
        fontFamily: 'Avenir Next',
    },
    counterName: {
        fontSize: 32,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 81,
        fontFamily: 'Avenir Next',
    },
})
