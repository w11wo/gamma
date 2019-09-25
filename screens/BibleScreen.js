import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { BibleListItem } from '../components/bibleListItem'
import * as Font from 'expo-font'
import { db } from "../constants/firebase"
import { FlatList } from 'react-native-gesture-handler'

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

    getKeyAndDays = () => {
        const range = (start, end) => Array.from({ length: (end - start) }, (_, k) => k + start)
        let bibleList = range(1, 366)
        let bibleListObject = bibleList.map(i => (
            { key: `${i}`}
        ))
        return bibleListObject
    }

    render() {
        return (
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.container}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Bible Reading Plan</Text>
                    </View>
                    <FlatList
                        data = {
                            this.getKeyAndDays()
                        }
                        renderItem={({ item }) => <BibleListItem dayNumber={item.key} passedDB={this.getListData()} />}
                    />
                </View>  
            </SafeAreaView>
        )
    }
}

BibleScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
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
