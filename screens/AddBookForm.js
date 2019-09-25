import React from 'react'
import {
    Button,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import * as Font from 'expo-font'
import { storage } from '../constants/firebase'
import { Ionicons } from '@expo/vector-icons'
import uuid from 'uuid'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddBookForm extends React.Component {
    state = {
        title: '',
        author: '',
        image: '',
        tempImage: null,
        finished: false,
        isFormValid: false,
        uploading: false,
    }

    async componentDidMount() {
        const { status, expires, permissions } = await Permissions.askAsync(
            Permissions.CAMERA_ROLL,
            Permissions.CAMERA
        )
        if (status !== 'granted') {
            alert('Permissions are required to continue.');
        }

        Font.loadAsync({
            'Avenir Next': require('../assets/fonts/AvenirNext-Regular.ttf'),
        })
    }

    componentDidUpdate(_, prevState) {
        if (this.state.title !== prevState.title || this.state.author !== prevState.author || this.state.image !== prevState.image) {
            this.validateForm()
        }
    }

    _pickImage = async () => {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            // aspect: [2, 3],
        })

        this._handleImagePicked(pickerResult)
    }

    _takePhoto = async () => {
        let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [2, 3],
        })

        this._handleImagePicked(pickerResult)
    }

    _handleImagePicked = async pickerResult => {
        try {
            this.setState({ uploading: true })

            if (!pickerResult.cancelled) {
                this.setState({ tempImage: pickerResult.uri })
                uploadUrl = await uploadImageAsync(pickerResult.uri)
                this.setState({ image: uploadUrl })
            }
        } catch (e) {
            console.log(e)
            alert('Upload failed')
        } finally {
            this.setState({ uploading: false })
        }
    }

    validateForm = () => {
        if (this.state.title.length > 0 && this.state.author.length > 0 && this.state.image.length > 0) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }

    getHandler = key => val => {
        this.setState({ [key]: val })
    }

    handleTitleChange = this.getHandler('title')
    handleAuthorChange = this.getHandler('author')
    handleFinishedChange = this.getHandler('finished')

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    handleCancel = () => {
        this.props.onCancel()
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>Add Book</Text>
                    </View>
                    <View style={styles.buttonRow}>
                        <Button title="Cancel" onPress={this.handleCancel} />
                        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
                    </View>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                        <TextInput
                            style={styles.input}
                            value={this.state.title}
                            onChangeText={this.getHandler('title')}
                            placeholder="Title"
                        />
                        <TextInput
                            style={styles.input}
                            value={this.state.author}
                            onChangeText={this.getHandler('author')}
                            placeholder="Author"
                        />
                        <View style={styles.readView}>
                            <Text style={styles.caption}>Mark as read:</Text>
                            <View style={styles.toggleSwitch}>
                                <Switch
                                    value={this.state.finished}
                                    onValueChange={this.getHandler('finished')}
                                    trackColor={{ false: 'rgba(0, 0, 0, 0.2)', true: 'black' }}
                                />
                            </View>
                        </View>
                        <View style={styles.fullWidthContainer}>
                            {this.state.tempImage && <Image source={{ uri: this.state.tempImage }} style={styles.bookCover} />}
                            {!this.state.tempImage &&
                                <View style={styles.emptyImagePlaceholder}>
                                    <Text style={styles.caption}>Select Book Cover</Text>
                                </View>
                            }
                            <View style={styles.iconButtonRow}>
                                <TouchableOpacity onPress={this._pickImage}>
                                    <Ionicons name="md-image" size={30} color={'black'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this._takePhoto}>
                                    <Ionicons name="md-camera" size={30} color={'black'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.onload = function () {
            resolve(xhr.response)
        }
        xhr.onerror = function (e) {
            console.log(e)
            reject(new TypeError('Network request failed'))
        }
        xhr.responseType = 'blob'
        xhr.open('GET', uri, true)
        xhr.send(null)
    })

    let fileName = `${uuid.v1()}.jpg`
    let storageRef = storage.ref().child(fileName)

    const snapshot = await storageRef.put(blob)
    blob.close()

    return await snapshot.ref.getDownloadURL()
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 30,
    },
    contentContainerStyle: {
        paddingBottom: 100,
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
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 100,
        marginTop: 20,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 4,
        fontFamily: 'Avenir Next',
        fontSize: 20,
    },
    emptyImagePlaceholder: {
        width: 200,
        height: 300,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookCover: {
        width: 200,
        height: 300,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,  
    },
    fullWidthContainer: {
        alignItems: 'center'
    },
    buttonRow: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconButtonRow: {
        width: 200,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: 'black',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    caption: {
        fontSize: 20,
        fontFamily: 'Avenir Next',
    },
    readView: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 20,
    },
    toggleSwitch: {
        marginLeft: 10,
        height: 18,
    },
})