import React from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'
import { db } from "../constants/firebase"
import * as Font from 'expo-font'

export default class BookDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.info.title}`,
        headerStyle: {
            backgroundColor: '#FFF',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
            fontWeight: '300',
            color: '#000',
            fontSize: 20,
        },
    })

    state = {
        finished: this.props.navigation.getParam('info').finished,
    }

    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    toggleSwitch = (value) => {
        let id = this.props.navigation.getParam('info').id
        let ref = db.collection('books').doc(id)
        let _ = ref.update({finished: value})
        this.setState({finished: value})
   }

    render() {
        let info = this.props.navigation.getParam('info')
        let title = info.title
        let author = info.author
        let image = info.image

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                    <View style={styles.bookView}>
                        <Image style={styles.book} source={{ uri: `${image}` }} />
                    </View>
                    <View style={styles.bookDesc}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.caption}>{`Written by: ${author}`}</Text>
                        <View style={styles.textAndButton}>
                            <Text style={styles.caption}>Mark as read:</Text>
                            <View style={styles.toggleSwitch}>
                                <Switch
                                    onValueChange={this.toggleSwitch} value={this.state.finished} trackColor={{false: 'rgba(0, 0, 0, 0.2)', true: 'black'}}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 100,
    },
    contentContainerStyle: {
        paddingBottom: 50,
    },
    bookView: {
        alignItems: 'center',
        paddingTop: 30,
    },
    bookDesc: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        paddingVertical: 2,
    },
    caption: {
        fontSize: 18,
        fontFamily: 'Avenir Next',
        paddingVertical: 2,
    },
    book: {
        width: 320,
        height: 320 * 1.5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 8,
    },
    textAndButton: {
        flex: 1,
        flexDirection: 'row',
    },
    toggleSwitch: {
        marginLeft: 10,
        height: 18,
    },
})
