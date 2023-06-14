import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

import { CustomInput, Filters, Header } from '../component'
import { COLORS, DIM, colors, dummyData } from '../asset/theme'

//Redux
import { useSelector } from 'react-redux'

export default function History({ navigation }) {
  // const myData = useSelector(state => state.add)
  const [historyData, setHistoryData] = useState(dummyData)
  const [year, setYear] = useState()
  const [month, setMonth] = useState()

  const [showTextInput, setShowTextInput] = useState({
    showIt: false,
    which: '',
  })

  const handleFilter = type => {
    if (type === 'year') {
      if (year !== '') {
        let tmparr = historyData.filter(item => item.dateTime[2] === year)
        setHistoryData(tmparr)
      }
    } else {
      if (month !== '') {
        let tmparr = historyData.filter(item => item.dateTime[1] === month)
        setHistoryData(tmparr)
      }
    }
  }

  useEffect(() => {
    // console.log(year, month)
    if (year === '' || month === '') {
      setHistoryData(dummyData)
    }
  }, [year, month])

  return (
    <View style={styles.container}>
      <Header onMenuPress={() => navigation.toggleDrawer()} title={'History'} />

      <View style={styles.filterContainer}>
        <Filters
          title="Month"
          onFilterClick={() => {
            setShowTextInput(prev => {
              if (prev.showIt && prev.which === 'year') {
                return { showIt: prev.showIt, which: 'month' }
              }
              return { showIt: !prev.showIt, which: 'month' }
            })
          }}
        />
        <View style={styles.filterTextContainer}>
          <Text style={styles.filterText}>Filter by</Text>
        </View>
        <Filters
          title="Year"
          onFilterClick={() => {
            setShowTextInput(prev => {
              if (prev.showIt && prev.which === 'month') {
                return { showIt: prev.showIt, which: 'year' }
              }
              return { showIt: !prev.showIt, which: 'year' }
            })
          }}
        />
      </View>

      {showTextInput.showIt && (
        <View
          style={{
            paddingTop: 10,
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <CustomInput
            text={
              showTextInput.which === 'month'
                ? 'Enter first 3 letters of month (e.g Aug)'
                : 'Enter year to filter'
            }
            onChangeText={text => {
              showTextInput.which === 'month' ? setMonth(text) : setYear(text)
            }}
            onSubmitEditing={() => {
              showTextInput.which === 'month'
                ? handleFilter('month')
                : handleFilter('year')
            }}
          />
        </View>
      )}

      {historyData.length !== 0 && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 10 }}>
          {historyData.map((item, ind) => {
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
      )}
      {historyData.length === 0 && (
        <View style={styles.nothingToShowContainer}>
          <Text
            style={{
              fontSize: 17,
              color: COLORS.primary,
              fontWeight: '700',
            }}>
            Nothing to show
          </Text>
        </View>
      )}
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
  nothingToShowContainer: {
    width: DIM.width,
    height: DIM.height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
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
