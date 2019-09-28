import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import MainTabNavigator from './MainTabNavigator'

let Navigation =  createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator,
  })
)

export default () => {
  let theme = useColorScheme()

  return (
    <AppearanceProvider>
      <Navigation theme={theme}/>
    </AppearanceProvider>
  )
}
