import React, { useEffect } from 'react'
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native'
import { COLORS, DIM } from '../asset/theme'

export default function Splash({ navigation }) {
  const { container, logo } = styles

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 2000)
  }, [])

  return (
    <View style={container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Image source={require('../asset/images/expenso.png')} style={logo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    height: DIM.height * 0.15,
    width: DIM.height * 0.15,
    tintColor: COLORS.primary,
  },
})
