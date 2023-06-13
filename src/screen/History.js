import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import { Filters, Header } from '../component'
import { COLORS, DIM, colors } from '../asset/theme'
import { useSelector } from 'react-redux'

export default function History({ navigation }) {
  const myData = useSelector(state => state.add)

  return (
    <View style={styles.container}>
      <Header onMenuPress={() => navigation.toggleDrawer()} title={'History'} />

      <View style={styles.filterContainer}>
        <Filters title="Month" />
        <View style={styles.filterTextContainer}>
          <Text style={styles.filterText}>Filter by</Text>
        </View>
        <Filters title="Year" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 10 }}>
        {myData.map((item, ind) => {
          return (
            <View key={ind} style={styles.historyCardContainer}>
              <View
                style={{
                  height: DIM.height * 0.09,
                  width: DIM.height * 0.09,
                  borderRadius: DIM.height * 0.09 * 0.4,
                  backgroundColor: colors[ind % 4],
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.img}
                  style={{
                    height: DIM.height * 0.05,
                    width: DIM.height * 0.05,
                    tintColor: 'white',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: 'red',
                  paddingLeft: 15,
                }}>
                <Text style={styles.title}>{item.category}</Text>
                <Text style={styles.dateTimeText}>
                  {`${item.dateTime[1]} ${item.dateTime[0]}, ${item.dateTime[2]}`}
                </Text>
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: '100%',
                  width: '30%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.amountText}>{`৳${item.expense}`}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  amountText: {
    marginTop: 5,
    fontSize: 17,
    color: 'black',
    fontWeight: '800',
  },
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  filterContainer: {
    width: DIM.width,
    height: DIM.height * 0.1,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  filterText: {
    fontSize: 21,
    fontWeight: '400',
    color: COLORS.primary,
  },
  filterTextContainer: {
    height: DIM.height * 0.07,
    width: DIM.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyCardContainer: {
    height: DIM.height * 0.12,
    width: DIM.width * 0.9,
    borderRadius: 10,
    backgroundColor: COLORS.boxOutline,
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    color: COLORS.primary,
    fontWeight: '700',
  },
  dateTimeText: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '400',
  },
})
