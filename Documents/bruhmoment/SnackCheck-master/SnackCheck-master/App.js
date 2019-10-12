import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './Screens/StartScreen';
import PreferenceScreen from './Screens/PreferenceScreen';
import MainMenuScreen from './Screens/MainMenuScreen';

import getFoodData from './APIWrapper/Spoonacular';

let api_key = 'dd358f4971124d2199da4431d56767af';

export default function App() {
  const [userPressStart, setUserPressStart] = useState(false);
  const [userProvidedPreferences, setUserProvidedPreferences] = useState(false);
  const [foodData, setFoodData] = useState();

  const [userPreferences, setUserPreferences] = useState({
    'Vegan': false, 'Low Fat': false, 'Low Carb': false, 'High Protein': false,
    'No Gluten': false, 'No Dairy': false, 'Peanuts': false, 'Tree Nuts': false, 'Shellfish': false, 'Eggs': false
  });

  useEffect(() => {
    getFoodData(userPreferences, api_key);
  }, [userProvidedPreferences])
//   setFoodData(userPreferences, api_key);

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
