import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import BookSection from '../components/bookSection'

export default class BooksScreen extends React.Component {
    navigateToDetails = (info) => {
        this.props.navigation.navigate('BookDetailScreen', {
            info: info,
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Books</Text>
                </View>
                <ScrollView style={styles.container}>
                    <BookSection finished={false} onPress={this.navigateToDetails} />
                    <BookSection finished={true} onPress={this.navigateToDetails} />
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
    titleText: {
        fontSize: 28,
        fontFamily: 'Avenir Next',
        marginBottom: 10,
    },
})
