import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../asset/theme'

export default function CustomInput({ text, onChangeText, onSubmitEditing }) {
  return (
    <View style={styles.input}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={text}
        placeholderTextColor={'rgb(128,128,128)'}
        style={styles.textInput}
        keyboardType={text === 'Amount' ? 'numeric' : 'default'}
        onSubmitEditing={onSubmitEditing}
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
