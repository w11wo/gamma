import React from 'react'
import { 
    Button, 
    KeyboardAvoidingView, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View 
} from 'react-native'

export default class AddTodoForm extends React.Component {
    state = {
        name: '',
        isFormValid: false,
    }

    componentDidUpdate(_, prevState) {
        if (this.state.name !== prevState.name) {
            this.validateForm()
        }
    }

    validateForm = () => {
        if (this.state.name.length > 0) {
            this.setState({ isFormValid: true })
        } else {
            this.setState({ isFormValid: false })
        }
    }
    
    getHandler = key => val => {
        this.setState({ [key]: val })
    }

    handleNameChange = this.getHandler('name') 

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
                        <Text style={styles.titleText}>Add To Do</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        value={this.state.name}
                        onChangeText={this.getHandler('name')}
                        placeholder="Name"
                    />
                    <View style={styles.buttons}>
                        <Button title="Cancel" onPress={this.handleCancel} />
                        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 30,
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
    buttons: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})