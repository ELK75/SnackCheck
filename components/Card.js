import React, { useState } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text } from 'react-native'

import Color from '../constants/colors'

const Card = (props) => {
  const [pressed, setPressed] = useState(false);

  let backgroundColor = pressed ? Color.primary : 'white';

  return (
    <TouchableWithoutFeedback style={styles.touchableWrapper} onPress={() => setPressed(pressState => !pressState)}>
      <View style={{ ...styles.card, ...props.style, backgroundColor}}>
        {props.children}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    fontSize: 35
  },
  touchableWrapper: {
    height: '100%',
    width: '100%'
  }
})

export default Card