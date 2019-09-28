import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import CounterScreen from '../screens/CounterScreen'
import BibleScreen from '../screens/BibleScreen'
import BooksScreen from '../screens/BooksScreen'
import BookDetailScreen from '../screens/BookDetailScreen'

HomeScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="md-person" size={30} color={tintColor} />
  )
}

ListScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-checkmark-circle-outline" size={30} color={tintColor} />
  )
}

CounterScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-calendar" size={30} color={tintColor} />
  )
}

BibleScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="ios-list-box" size={30} color={tintColor} />
  )
}

const bookStackNavigator = createStackNavigator({
  BooksScreen,
  BookDetailScreen,
})

bookStackNavigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="md-journal" size={30} color={tintColor} />
  )
}

const tabNavigator = createBottomTabNavigator({
  HomeScreen,
  ListScreen,
  CounterScreen,
  BibleScreen,
  bookStackNavigator,
}, {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#E8E9EA',
      },
    }
  },
)

tabNavigator.path = ''

export default tabNavigator 
