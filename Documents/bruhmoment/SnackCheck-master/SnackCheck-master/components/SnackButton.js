import React, { Component } from 'react'
import { View, Button, StyleSheet } from 'react-native'

import Colors from '../constants/colors';

export default SnackButton = ({textColor, buttonColor, handler, text}) => {
  return (
    <View style={{ ...styles.startButton, backgroundColor: buttonColor }}><Button color={textColor} title={text} onPress={handler} /></View>
  )
}

const styles = StyleSheet.create({
  startButton: {
    justifyContent: 'center',
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