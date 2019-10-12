import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Colors from '../constants/colors'

import SnackButton from '../components/SnackButton';

const StartScreen = ({startPressHandler}) => {
  return (
    <View style={styles.startScreenWrapper}>
      <SnackButton textColor={Colors.primary} buttonColor={'white'} text={'GET STARTED'} handler={startPressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  startScreenWrapper: {
    height: '100%',
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    justifyContent: 'center',
    backgroundColor: 'white',
    color: Colors.primary,
    marginBottom: 200,
    width: '50%',
    borderRadius: 20,
    height: 60,
  },
  btn: {
    color: Colors.primary,
    fontSize: 30
  }
})


export default StartScreen
