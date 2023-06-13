/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { MainNav } from './src/navigation/MainNav'

function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  )
}

export default App
