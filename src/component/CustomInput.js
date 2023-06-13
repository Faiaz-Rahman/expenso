import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../asset/theme'

export default function CustomInput({ text, onChangeText }) {
  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={text}
        placeholderTextColor={'slate'}
        style={styles.textInput}
        inputMode={text === 'Amount' ? 'numeric' : 'text'}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderBottomColor: COLORS.primary,
    borderRightColor: COLORS.primary,
    marginBottom: 10,
  },
  textInput: {
    paddingLeft: 15,
    backgroundColor: COLORS.boxOutline,
    fontSize: 16,
    color: 'grey',
  },
})
