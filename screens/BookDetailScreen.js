import React from 'react'
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native'

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

    toggleSwitch = (value) => {
      this.setState({finished: value})
   }

    render() {
        let info = this.props.navigation.getParam('info')
        let title = info.title
        let author = info.author
        let image = info.image

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.bookView}>
                        <Image style={styles.book} source={{ uri: `${image}` }} />
                    </View>
                    <View style={styles.bookDesc}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.author}>{`Written by: ${author}`}</Text>
                        <Switch
                            onValueChange = {this.toggleSwitch}
                            value = {this.state.finished} />
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
    author: {
        fontSize: 16,
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
})
