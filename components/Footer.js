import React from 'react'
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import Color from "../constants/colors"

const Footer = (props) => {
  return (
    <View style={styles.footerWrapper}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => props.setCurrentPage('recipe')}>
        <View style={{ alignItems: 'center', height: 50, borderBottomWidth: props.currentPage === 'recipe' ? 1 : 0, borderColor: Color.primary }}><Image style={styles.logo} source={require('../assets/book-icon.png')}></Image></View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => props.setCurrentPage('meal')}>
        <View style={{alignItems: 'center', height: 50, borderBottomWidth: props.currentPage === 'meal' ? 1 : 0, borderColor: Color.primary }}><Image style={styles.logo} source={require('../assets/meal-icon.png')}></Image></View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback style={{flex: 1}} onPress={() => props.setCurrentPage('camera')}>
        <View style={{alignItems: 'center',  height: 50, borderBottomWidth: props.currentPage === 'camera' ? 1 : 0, borderColor: Color.primary }}><Image style={styles.logo} source={require('../assets/camera-icon.png')}></Image></View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    justifyContent: 'space-around',
    borderTopColor: Color.primary,
    borderTopWidth: 1,
    height: 180
  },
  logo: {
    marginTop: 10,
    height: 30,
    width: 30
  }
})

export default Footer
