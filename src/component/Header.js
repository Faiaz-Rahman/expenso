import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DIM, COLORS } from '../asset/theme'

export default function Header({ onMenuPress, title }) {
  const {
    container,
    innerContainer,
    textContainer,
    headerText,
    leftIconStyle,
  } = styles

  return (
    <View style={container}>
      <View style={innerContainer}>
        <Image
          source={require('../asset/images/menu.png')}
          style={leftIconStyle}
        />

        <View style={textContainer}>
          <Text style={headerText}>{title}</Text>
        </View>

        <Image
          source={require('../asset/images/profile.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: DIM.height * 0.11,
    width: DIM.width,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    height: DIM.height * 0.07,
    width: DIM.width * 0.4,
    borderRadius: DIM.height * 0.07 * 0.5,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  leftIconStyle: {
    height: 25,
    width: 25,
    tintColor: COLORS.primary,
  },
})
