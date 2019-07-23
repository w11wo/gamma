import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { getCurrentDayAndDate } from '../constants/DateAPI.js'
import * as Font from 'expo-font'

export default class HomeScreen extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
            'Palatino': require('../assets/fonts/palatino-regular.ttf'),
        })
    }

    render() {
        const date = getCurrentDayAndDate()
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Welcome to </Text>
                    <Text style={styles.logo}>γ</Text>
                    <Text style={styles.titleText}>, Wilson.</Text>
                </View>
                <Text style={styles.dateText}>{date}</Text>
            </SafeAreaView>
        )
    }
}

HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        fontSize: 32,
        fontWeight: '500',
        fontFamily: 'Palatino',
    },
    titleView: {
        flexDirection: 'row',
    },
    titleText: {
        fontSize: 32,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    dateText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
    },
})
