import React, { useEffect, useState } from 'react'
import {
  Image,
  Text,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native'
import { COLORS, DIM, data, colors } from '../asset/theme'

import { CustomInput, ExpenseCard, Header } from '../component'
import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment'

export default function Home({ navigation }) {
  const [showModal, setShowModal] = useState(false)
  const [cat, setCat] = useState('')
  const [amount, setAmount] = useState('')

  const dispatch = useDispatch()
  const myData = useSelector(state => state.add)
  const total_expense = useSelector(state => state.total)

  const onCloseModal = () => {
    if (cat !== '' && amount !== '') {
      setShowModal(false)
      const date = new Date()
      const momentDate = moment(date).format('MMMM Do YYYY')
      const dateTime = momentDate.split(' ')

      let img
      switch (cat) {
        case 'Charity':
          img = require('../asset/images/heart.png')
          break
        case 'Journeys':
          img = require('../asset/images/pin.png')
          break
        case 'Food':
          img = require('../asset/images/food.png')
          break
        case 'Shopping':
          img = require('../asset/images/shopping.png')
          break

        case 'Home Rent':
          img = require('../asset/images/home.png')
          break
        default:
          img = require('../asset/images/pin.png')
          break
      }
      // console.log(dateTime)
      dispatch({
        type: 'add',
        payload: {
          category: cat,
          expense: amount,
          dateTime,
          img,
        },
      })
      dispatch({
        type: 'update_total',
        payload: {
          expense: parseInt(amount, 10),
        },
      })
    }
  }

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

  useEffect(() => {
    console.log(typeof total_expense)
  }, [])

  const handleExpense = value => {
    if (value === 'plus') {
      setShowModal(true)
    } else {
      navigation.navigate('History')
    }
  }

  const handleChangeText = ({ val, text }) => {
    if (val === 'amt') {
      setAmount(text)
    } else {
      setCat(text)
    }
  }

  //Created a separate component for the buttons.
  const expenseButton = ({ value }) => {
    return (
      <View style={styles.expenseContainer}>
        <TouchableOpacity
          style={expenseButtonStyle}
          onPress={() => {
            handleExpense(value)
          }}>
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
      {/* Code for Modal */}
      {showModal && (
        <Modal
          animationType="slide"
          transparent
          onRequestClose={() => {
            setShowModal(false)
          }}>
          <View style={styles.modal}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '900',
                color: COLORS.primary,
                marginBottom: 20,
              }}>
              Add your expense
            </Text>
            <CustomInput
              text="Enter Category"
              onChangeText={text => {
                handleChangeText({ val: 'cat', text })
              }}
            />
            <CustomInput
              text="Amount"
              onChangeText={text => handleChangeText({ val: 'amt', text })}
            />

            {/* Modal Button */}
            <TouchableOpacity
              onPress={() => {
                onCloseModal()
              }}
              style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Header title={'Home'} onMenuPress={() => navigation.openDrawer()} />

      <View style={imageContainer}>
        <Image
          style={image}
          source={require('../asset/images/lighthouse.jpg')}
        />
        <View style={imageLayer}>
          <Text style={titleText}>Expenses</Text>
          <Text style={balanceText}>{`৳${total_expense}`}</Text>
          <View style={expenseButtonContainer}>
            {expenseButton({ value: 'plus' })}
            {expenseButton({ value: 'history' })}
          </View>
        </View>
        <View style={imageOverlayCard}>
          <Text style={styles.expenseBottomCardContainerText}>Expenses</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            paddingLeft: '7%',
            paddingTop: '17%',
          }}>
          {myData.length === 0
            ? data.map((item, ind) => {
                return (
                  <ExpenseCard
                    key={ind}
                    item={item}
                    color={colors[ind % 4]}
                    img={item.img}
                  />
                )
              })
            : myData.map((item, ind) => {
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

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    height: DIM.height * 0.7,
    width: DIM.width * 0.9,
    backgroundColor: 'white',
    top: '12%',
    bottom: '12%',
    left: '5%',
    right: '5%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderRightColor: COLORS.lightBlue,
    borderLeftColor: COLORS.primary,
    borderTopColor: COLORS.primary,
    borderBottomColor: COLORS.lightBlue,
    borderWidth: 10,
    opacity: 0.85,
    elevation: 4,
  },
  modalButton: {
    height: '13%',
    width: '35%',
    borderRadius: 20,
    marginTop: 10,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '800',
  },
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    opacity: 0.8,
    marginLeft: 5,
  },
})
