import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import ListScreen from '../screens/ListScreen'
import CounterScreen from '../screens/CounterScreen'
import BooksScreen from '../screens/BooksScreen'

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

BooksScreen.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons name="md-book" size={30} color={tintColor} />
  )
}

const tabNavigator = createBottomTabNavigator({
  HomeScreen,
  ListScreen,
  CounterScreen,
  BooksScreen,
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
