import React from 'react'
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { db } from "../constants/firebase"

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
                            { id: change.doc.id, image: change.doc.data().image, finished: change.doc.data().finished },
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
                            { id: change.doc.id, image: change.doc.data().image, finished: change.doc.data().finished },
                        ],
                    })
                }
            })
        })
    }

    filteredBooks = (finished) => {
        let books = this.state.books.filter(book => book.finished == finished)
        let booksViews = books.map(book => (
            <View key={book.id} style={styles.shadow}>
                <Image style={styles.book} source={{ uri: `${book.image}` }} />
            </View>
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
    book: {
        width: 180,
        height: 270,
        borderRadius: 3,
        marginBottom: 8,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 2,
                    height: 2
                },
                shadowOpacity: 0.8,
                shadowRadius: 1,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
        marginTop: 10,
        marginBottom: 10,
    },
})