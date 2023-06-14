import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, DIM } from '../asset/theme'

export default function Filters({ title, onFilterClick }) {
  return (
    <TouchableOpacity style={styles.filterContainer} onPress={onFilterClick}>
      <Text style={styles.filterText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  filterContainer: {
    width: DIM.width * 0.2,
    height: '90%',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.boxOutline,
  },
  filterText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 17,
  },
})
