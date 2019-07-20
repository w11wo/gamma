import React from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import AddTodoForm from './AddTodoForm'
import { ListItem } from '../components/listItem'
import { db } from "../constants/firebase"

export default class ListScreen extends React.Component {
  state = {
    showForm: false,
    todos: [],
  }
  
  componentDidMount() {
    let todoRef = db.collection('todos')
    let _ = todoRef.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {

        if (change.type === 'added') {
          this.setState(prevState => ({
            todos: [
              ...prevState.todos,
              { id: change.doc.id, name: change.doc.data().name },
            ],
          }))
        } 

        if (change.type === 'removed') {
          this.setState({
            todos: this.state.todos.filter(todo => todo.id !== change.doc.id)
          })
        }

        if (change.type === 'modified') {
          this.setState({
            todos: this.state.todos.filter(todo => todo.id !== change.doc.id),
          })
          this.setState({
            todos: [
              ...this.state.todos,
              { id: change.doc.id, name: change.doc.data().name },
            ],
          })
        }

      })
    })
  }

  removeTodo = (id) => {
    db.collection('todos').doc(id).delete()
  }

  showForm = () => {
    this.setState({ showForm: true })
  }

  addToDo = (newTodo) => {
    db.collection('todos').add({
      name: newTodo.name,
    })
    this.setState({
      showForm: false,
    })
  }

  cancelAddingToDo = () => {
    this.setState({ showForm: false })
  }

  render() {
    if (this.state.showForm) return <AddTodoForm onSubmit={this.addToDo} onCancel={this.cancelAddingToDo}/>

    let toDoListViews = this.state.todos.map(todo => (
      <ListItem onPress={() => this.removeTodo(todo.id)} key={todo.id} name={todo.name}></ListItem>
    ))
    
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>To Do List</Text>
        </View>
        <View style={styles.addButtonView}>
          <Button title="Add To Do" onPress={this.showForm}/>
        </View>
        <ScrollView style={styles.container}>
          {this.state.todos.length === 0 ? <EmptyList/> : toDoListViews}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

function EmptyList() {
  return (
    <Text style={styles.noticeText} key="0">There is nothing left to do!</Text>
  )
}

ListScreen.navigationOptions = {
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
  addButtonText: {
    fontSize: 18,
    fontFamily: 'Avenir Next',
    color: '#08008B',
  },
  noticeText: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    marginTop: 10,
  },
})
