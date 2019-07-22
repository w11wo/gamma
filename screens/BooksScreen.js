import React from 'react'
import {
    Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import BookSection from '../components/bookSection'
import AddBookForm from './AddBookForm'
import { db } from "../constants/firebase"

export default class BooksScreen extends React.Component {
    state = {
        showForm: false,
    }

    navigateToDetails = (info) => {
        this.props.navigation.navigate('BookDetailScreen', {
            info: info,
        })
    }

    showForm = () => {
        this.setState({ showForm: true })
    }

    cancelAddingBook = () => {
        this.setState({ showForm: false })
    }

    addBook = (newBook) => {
        db.collection('books').add({
            title: newBook.title,
            author: newBook.author,
            image: newBook.image,
            finished: newBook.finished,
        })
        this.setState({
            showForm: false,
        })
    }

    render() {
        if (this.state.showForm) return <AddBookForm onSubmit={this.addBook} onCancel={this.cancelAddingBook} />
        
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>Books</Text>
                </View>
                <View style={styles.addButtonView}>
                    <Button title="Add Book" onPress={this.showForm} />
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
    addButtonView: {
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
})
