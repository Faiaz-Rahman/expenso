import React from 'react'
import { Home, Splash } from '../screen'

import { createStackNavigator } from '@react-navigation/stack'

import { DrawerNav } from './DrawerNav'

const MainStack = createStackNavigator()

const MainNav = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="home"
        component={DrawerNav}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  )
}

export { MainNav }
