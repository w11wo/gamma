import { AppLoading } from 'expo' 
import { Asset } from 'expo-asset' 
import * as Font from 'expo-font' 
import React, { useState } from 'react' 
import { Platform, StatusBar, StyleSheet, View } from 'react-native' 
import { Ionicons } from '@expo/vector-icons' 

import AppNavigator from './navigation/AppNavigator' 

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false) 

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    ) 
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    ) 
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
    ]),
    Font.loadAsync({
      'Avenir Next': require('./assets/fonts/AvenirNext-Regular.ttf'),
      'Palatino': require('./assets/fonts/palatino-regular.ttf'),
    }),
  ]) 
}

function handleLoadingError(error) {
  console.warn(error) 
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
}) 
