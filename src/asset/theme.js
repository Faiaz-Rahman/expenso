import { Dimensions } from 'react-native'

export const DIM = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const COLORS = {
  primary: '#ACB1E6',
  secondary: '#E9AB17',
  lightBlue: '#cbe2ff',
  lighterBlue: '#b0c5f9',
  boxOutline: '#f1f1f1',
  lightGrey: '#a1a1a1',
  lightYellow: '#fec574',
  lightPink: '#f9aec5',
  lightGreen: '#c5f2a0',
}
export const data = [
  {
    category: 'Charity',
    expense: '৳1,300',
    img: require('../asset/images/heart.png'),
  },
  {
    category: 'Journeys',
    expense: '৳3,500',
    img: require('../asset/images/pin.png'),
  },
  {
    category: 'Food',
    expense: '৳1,500',
    img: require('../asset/images/food.png'),
  },

  {
    category: 'Shopping',
    expense: '৳5,000',
    img: require('../asset/images/shopping.png'),
  },
  {
    category: 'Home Rent',
    expense: '৳10,300',
    img: require('../asset/images/home.png'),
  },
]
export const colors = [
  COLORS.lighterBlue,
  COLORS.lightYellow,
  COLORS.lightPink,
  COLORS.lightGreen,
]
