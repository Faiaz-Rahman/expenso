import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS, DIM } from '../asset/theme'

export default function ExpenseCard({ item, color, img }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: DIM.height * 0.1,
          width: DIM.height * 0.1,
          borderRadius: DIM.height * 0.1 * 0.4,
          backgroundColor: color,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={img}
          style={{
            height: DIM.height * 0.05,
            width: DIM.height * 0.05,
            tintColor: 'white',
          }}
        />
      </View>
      <Text style={styles.cardText}>{item.category}</Text>
      <Text style={styles.amountText}>{item.expense}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  amountText: {
    marginTop: 5,
    fontSize: 19,
    color: 'black',
    fontWeight: '700',
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.lightGrey,
    marginTop: 10,
  },
  container: {
    height: DIM.height * 0.25,
    width: DIM.width * 0.35,
    borderRadius: DIM.width * 0.35 * 0.2,
    // backgroundColor: 'tomato',
    marginRight: 25,
    borderWidth: 4,
    borderColor: COLORS.boxOutline,
    paddingTop: 20,
    paddingLeft: 15,
  },
})
