import React from 'react'
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class BooksScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Books</Text>
                </View>
                <ScrollView style={styles.container}>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Currently Reading</Text>
                        <View style={styles.row}>
                            <Image style={styles.book} source={require('../assets/images/hawking.jpg')} />
                            <Image style={styles.book} source={require('../assets/images/einstein.jpg')} />
                        </View>
                        <View style={styles.row}>
                            <Image style={styles.book} source={require('../assets/images/buzz.jpg')} />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Previously Read</Text>
                        <View style={styles.row}>
                            <Image style={styles.book} source={require('../assets/images/neil.jpg')} />
                            <Image style={styles.book} source={require('../assets/images/musk.jpg')} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

BooksScreen.navigationOptions = {
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
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
    },
    section: {
        marginBottom: 30,
    },
    book: {
        width: 180,
        height: 270,
        borderRadius: 3,
        borderWidth: 0.7,
        borderColor: 'black',
    },
    titleText: {
        fontSize: 28,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        marginTop: 10,
        marginBottom: 10,
    },
})
