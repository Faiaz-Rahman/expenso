import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { History, Home } from '../screen'
import { COLORS, DIM } from '../asset/theme'

const Drawer = createDrawerNavigator()

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Go Home"
      screenOptions={{
        headerStatusBarHeight: 0,
        headerShown: false,
        drawerContentContainerStyle: {
          backgroundColor: 'white',
          height: DIM.height,
        },
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: COLORS.primary,
        drawerInactiveBackgroundColor: COLORS.boxOutline,
        drawerLabelStyle: ({ focused }) => ({
          color: focused ? 'white' : 'grey',
        }),
      }}>
      <Drawer.Screen name="Go Home" component={Home} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  )
}
export { DrawerNav }
