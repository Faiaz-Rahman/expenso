import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Filters, Header } from '../component'
import { DIM } from '../asset/theme'

export default function History({ navigation }) {
  return (
    <View style={styles.container}>
      <Header onMenuPress={() => navigation.toggleDrawer()} title={'History'} />

      <View style={styles.filterContainer}>
        <Filters title="Day" />
        <Filters title="Month" />
        <Filters title="Year" />
        <Filters title="Week" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  filterContainer: {
    width: DIM.width,
    height: DIM.height * 0.1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
