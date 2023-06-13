import React, { useEffect } from 'react'
import {
  Image,
  Text,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { COLORS, DIM, data, colors } from '../asset/theme'

import { ExpenseCard, Header } from '../component'

export default function Home({ navigation }) {
  const {
    container,
    image,
    imageContainer,
    imageOverlayCard,
    imageLayer,
    titleText,
    balanceText,
    expenseButtonStyle,
    expenseButtonContainer,
    expenseImageIconStyle,
  } = styles

  //Created a separate component for the buttons.
  const expenseButton = ({ value }) => {
    return (
      <View style={styles.expenseContainer}>
        <TouchableOpacity style={expenseButtonStyle}>
          {value === 'plus' ? (
            <Image
              source={require('../asset/images/plus.png')}
              style={expenseImageIconStyle}
            />
          ) : (
            <Image
              source={require('../asset/images/history.png')}
              style={expenseImageIconStyle}
            />
          )}
        </TouchableOpacity>
        {value === 'plus' ? (
          <Text style={styles.expenseText}>Add</Text>
        ) : (
          <Text style={styles.expenseText}>History</Text>
        )}
      </View>
    )
  }

  return (
    <View style={container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Header title={'Home'} onMenuPress={() => navigation.openDrawer()} />
      <View style={imageContainer}>
        <Image
          style={image}
          source={require('../asset/images/lighthouse.jpg')}
        />
        <View style={imageLayer}>
          <Text style={titleText}>Expenses</Text>
          <Text style={balanceText}>৳5,500</Text>
          <View style={expenseButtonContainer}>
            {expenseButton({ value: 'plus' })}
            {expenseButton({ value: 'history' })}
          </View>
        </View>
        <View style={imageOverlayCard}>
          <Text style={styles.expenseBottomCardContainerText}>Expenses</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            // backgroundColor: 'red',
            paddingLeft: '7%',
            paddingTop: '17%',
          }}>
          {data.map((item, ind) => {
            return (
              <ExpenseCard
                key={ind}
                item={item}
                color={colors[ind % 4]}
                img={item.img}
              />
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  balanceText: {
    color: 'white',
    fontSize: 45,
    fontWeight: '600',
    opacity: 0.8,
  },
  container: {
    alignItems: 'center',
  },
  expenseBottomCardContainerText: {
    fontSize: 27,
    color: 'black',
    fontWeight: '700',
  },
  expenseButtonStyle: {
    height: DIM.height * 0.1,
    width: DIM.height * 0.1,
    backgroundColor: 'rgba(255,255,255,.09)',
    borderRadius: DIM.height * 0.1 * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseButtonContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  expenseContainer: {
    alignItems: 'center',
  },
  expenseImageIconStyle: {
    height: 27,
    width: 27,
    overlayColor: 'white',
    tintColor: 'white',
    opacity: 1,
    resizeMode: 'contain',
  },
  expenseText: {
    fontSize: 16,
    fontWeight: '300',
    color: 'white',
    marginTop: 5,
  },
  image: {
    height: DIM.height * 0.45,
    width: DIM.width,
    resizeMode: 'cover',
  },
  imageContainer: {
    position: 'relative',
  },
  imageOverlayCard: {
    position: 'absolute',
    top: DIM.height * 0.4,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: '10%',
    paddingLeft: '7%',
    height: DIM.height * 0.6,
    width: '100%',
    // alignItems: 'center',
  },
  imageLayer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'transparent',
    paddingTop: '15%',
    paddingLeft: '5%',
    paddingRight: '5%',
    height: '85%',
    width: '100%',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    opacity: 0.8,
    marginLeft: 5,
  },
})
