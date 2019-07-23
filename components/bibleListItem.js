import React from 'react'
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { getBiblePlan } from '../constants/BiblePlan'
import * as Font from 'expo-font'
import { db } from "../constants/firebase"

export class BibleListItem extends React.Component {
    state = {
        read: false,
        dataLoaded: false,
    }

    componentDidMount() {
        this.getListData()

        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    getListData = () => {
        let ref = db.collection('bible').doc(`${this.props.dayNumber}`)
        let _ = ref.get()
            .then(doc => {
                this.setState({
                    read: doc.data().read,
                    dataLoaded: true,
                })
            })
    }

    updateData = () => {
        let ref = db.collection('bible').doc(`${this.props.dayNumber}`)
        let _ = ref.update({ read: !this.state.read })
        this.setState(prevState => ({
            read: !prevState.read
        }))
    }

    render() {
        let db = getBiblePlan()
        let day = this.props.dayNumber
        return (
            <View style={styles.listItem}>
                <View style={styles.labelView}>
                    <Text style={styles.labelText}>{`Day ${db[day][0]}`}</Text>
                    {this.state.dataLoaded && 
                        <TouchableOpacity onPress={this.updateData}>
                            <Ionicons name={this.state.read ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"} style={styles.bookmarkIcon} />
                        </TouchableOpacity>
                    }
                </View>
                <View style={styles.booksList}>
                    <Text style={styles.bookText}>{db[day][1]}</Text>
                    <Text style={styles.bookText}>{db[day][2]}</Text>
                    <Text style={styles.bookText}>{db[day][3]}</Text>
                    <Text style={styles.bookText}>{db[day][4]}</Text>
                    <Text style={styles.bookText}>{db[day][5]}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
    },
    labelText: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    labelView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    booksList: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bookText: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    bookmarkIcon: {
        fontSize: 24,
        color: 'black',
    }
})