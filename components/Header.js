import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <View><Image style={styles.logo} source={require('../assets/snack_check.png')} /></View>
      <Text style={styles.headerTitle}>SnackCheck</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    fontSize: 22
  },
  logo: {
    height: 50,
    width: 50,
  }
});

export default Header;
