import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { db } from "../constants/firebase"
import BookButton from './bookButton'

export default class BookSection extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        let bookRef = db.collection('books')
        let _ = bookRef.onSnapshot(snapshot => {
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
        return (
            <View style={styles.section}>
                <Text style={styles.headerText}>{this.props.finished ? "Previously Read" : "Currently Reading"}</Text>
                <View style={styles.row}>
                    {this.filteredBooks(this.props.finished)}
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
        alignContent: 'center',
        paddingTop: 12,
    },
    section: {
        marginBottom: 30,
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        marginTop: 10,
        marginBottom: 10,
    },
})