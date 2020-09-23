import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import Color from '../constants/colors';

const PreferenceItem = (props) => {
  const [pressed, setPressed] = useState(false);

  let backgroundColor = pressed ? Color.primary : 'white';
  let textColor = pressed ? 'white' : 'black';

  const itemSelected = () => {
    setPressed(pressState => !pressState);
    props.userPreferences(props.preference);
  }

  return (
    <TouchableWithoutFeedback style={styles.touchableWrapper} onPress={itemSelected}>
      <View style={{ ...styles.card, ...props.style, backgroundColor }}>
        <View style={styles.preferenceContainer}>
          <Text style={{...styles.preferences, color: textColor}}>{props.preference}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  preferenceContainer: {
    alignItems: 'center'
  },
  preferences: {
    fontSize: 18
  },
  card: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
    fontSize: 35
  },
  touchableWrapper: {
    height: '100%',
    width: '100%'
  }
})


export default PreferenceItem
