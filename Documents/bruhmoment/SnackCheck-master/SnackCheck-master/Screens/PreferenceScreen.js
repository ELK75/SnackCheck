import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import PreferenceItem from '../components/PreferenceItem';
import Card from '../components/Card'
import Colors from '../constants/colors'
import SnackButton from '../components/SnackButton';

const PreferenceScreen = (props) => {

  const preferenceList = [
    'Vegan', 'Low Fat', 'Low Carb', 'High Protein',
    'No Gluten', 'No Dairy'
  ];

  const allergyList = [
    'Peanuts', 'Tree Nuts', 'Shellfish', 'Eggs'
  ];

  const preferenceComponents = preferenceList.map((preference, index) => <PreferenceItem userPreferences={props.userPreferences} preference={preference} key={index} />);
  const allergyComponents = allergyList.map((allergy, index) => <PreferenceItem userPreferences={props.userPreferences} preference={allergy} key={index} />);

  return (
    <View style={styles.preferenceContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titles}>Dietary Preferences</Text>
      </View>
      {preferenceComponents}
      <View style={styles.titleContainer}>
        <Text style={styles.titles}>Allergies</Text>
      </View>
      {allergyComponents}

      <View style={styles.btnContainer}>
        <SnackButton textColor={'white'} buttonColor={Colors.primary} text={'Done'} handler={props.preferenceProvided}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  preferenceContainer: {
    alignItems: 'center',
  },
  titles: {
    fontSize: 25,
    color: Colors.primary
  },
  preferences: {
    fontSize: 20
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    height: 40,
    marginVertical: 10
  },
  btn: {
    marginTop: 10
  },
  btnContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  }
})


export default PreferenceScreen
