import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { daysToUTS, daysToUAS } from '../constants/DateAPI.js'
import * as Font from 'expo-font'

export default class CounterScreen extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }
    
    render() {
        const UTS = daysToUTS()
        const UAS = daysToUAS()
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Reminders</Text>
                </View>
                <View style={styles.counterView}>
                    <View style={styles.event}>
                        <Text style={styles.counterName}>Days to Mid Exam:</Text>
                        <Text style={styles.dateText}>{UTS}</Text>
                    </View>
                    <View style={styles.event}>
                        <Text style={styles.counterName}>Days to Final Exam:</Text>
                        <Text style={styles.dateText}>{UAS}</Text>
                    </View>
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
    event: {
        alignItems: 'center',
        paddingVertical: 10,
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
        fontSize: 30,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 64,
        fontFamily: 'Avenir Next',
    },
})
