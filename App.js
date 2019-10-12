import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './Screens/StartScreen';
import PreferenceScreen from './Screens/PreferenceScreen';
import MainMenuScreen from './Screens/MainMenuScreen';

export default function App() {
  const [userPressStart, setUserPressStart] = useState(true);
  const [userProvidedPreferences, setUserProvidedPreferences] = useState(true);

  const [userPreferences, setUserPreferences] = useState({
    'Vegan': false, 'Low Fat': false, 'Low Carb': false, 'High Protein': false,
    'No Gluten': false, 'No Dairy': false, 'Peanuts': false, 'Tree Nuts': false, 'Shellfish': false, 'Eggs': false
  });

  const updatePreferences = preference => {
    setUserPreferences(currentPreferences => {
      currentPreferences[preference] = !currentPreferences[preference]
      return currentPreferences;
    })
  }

  const [menuSelected, setMenuSelected] = useState(false);
  const [mealPlanSelected, setMealPlanSelected] = useState(false);
  const [cameraSelected, setCameraSelected] = useState(false);

  const startPressHandler = () => {
    setUserPressStart(true);
  }

  let content;
  if (!userPressStart) {
    content = <StartScreen startPressHandler={startPressHandler}/>
  } else if (userPressStart && !userProvidedPreferences) {
    content = <PreferenceScreen preferenceProvided={() => setUserProvidedPreferences(true)} userPreferences={updatePreferences}/>
  } else if (userProvidedPreferences) {
    content = <MainMenuScreen />
  }

  return (
    <View style={styles.container}>
      <Header />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
