import React from 'react'
import {
    Image,
    Platform,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default class BookButton extends React.Component {
    _onPress = () => {
        this.props.onPress(this.props.desc)
    }

    render() {
        return (
            <TouchableOpacity style={styles.shadow} onPress={this._onPress} >
                <Image style={styles.book} source={{ uri: `${this.props.image}` }} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
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
})