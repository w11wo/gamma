import React from 'react'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { BibleListItem } from '../components/bibleListItem'
import * as Font from 'expo-font'
import { db } from "../constants/firebase"

export default class BibleScreen extends React.Component {
    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    getListData = () => {
        let ref = db.collection('bible')
        return ref
    }

    bibleList = () => {
        let bibleList = []
        for (var i = 1; i < 366; i++) {
            bibleList.push(<BibleListItem key={i} dayNumber={i} passedDB={this.getListData()}/>)
        }
        return bibleList
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Bible Reading Plan</Text>
                </View>
                <ScrollView style={styles.container}>
                    {this.bibleList()}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

BibleScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 30,
    },
    titleText: {
        fontSize: 28,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    addButtonView: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    addButtonText: {
        fontSize: 18,
        fontFamily: 'Avenir Next',
        color: '#08008B',
    },
    noticeText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        marginTop: 10,
    },
})
