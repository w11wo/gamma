import React from 'react'
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { db } from "../constants/firebase"
import BookButton from './bookButton'
import * as Font from 'expo-font'

export default class BookSection extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    getBooks = () => {
        let bookRef = db.collection('books')
        this.unsubscribe = bookRef.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {

                if (change.type === 'added') {
                    this.setState(prevState => ({
                        books: [
                            ...prevState.books,
                            {
                                id: change.doc.id,
                                title: change.doc.data().title,
                                author: change.doc.data().author,
                                image: change.doc.data().image,
                                finished: change.doc.data().finished,
                            },
                        ],
                    }))
                }

                if (change.type === 'removed') {
                    this.setState({
                        books: this.state.books.filter(books => books.id !== change.doc.id)
                    })
                }

                if (change.type === 'modified') {
                    this.setState({
                        books: this.state.books.filter(books => books.id !== change.doc.id),
                    })
                    this.setState({
                        books: [
                            ...this.state.books,
                            {
                                id: change.doc.id,
                                title: change.doc.data().title,
                                author: change.doc.data().author,
                                image: change.doc.data().image,
                                finished: change.doc.data().finished,
                            },
                        ],
                    })
                }
            })
        })
    }

    componentDidMount() {
        this.getBooks()
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    _onPress = (info) => {
        this.props.onPress(info)
    }

    filteredBooks = (finished) => {
        let books = this.state.books.filter(book => book.finished == finished)
        let booksViews = books.map(book => (
            <BookButton key={book.id} onPress={this._onPress} image={book.image} desc={book} />
        ))
        return booksViews
    }

    render() {
        var bookRows = this.filteredBooks(this.props.finished)
        var numberOfBooks = this.filteredBooks(this.props.finished).length
        
        if (numberOfBooks % 2 != 0) {
            bookRows.push(<View key={0} style={styles.empty}></View>)
        }

        return (
            <View style={styles.section}>
                <Text style={styles.headerText}>{this.props.finished ? "Previously Read" : "Currently Reading"}</Text>
                <View style={styles.row}>
                    {bookRows}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        // paddingTop: 12,
    },
    section: {
        // marginBottom: 30,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        // marginTop: 10,
        marginBottom: 10,
    },
    empty: {
        width: Dimensions.get('window').width / 2 - 48,
        height: (Dimensions.get('window').width / 2 - 48) * 1.5,
        borderRadius: 3,
        marginBottom: 20,
    }
})