import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native'
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import MealPlan from "../components/MealPlan";
import CameraScreen from "../components/CameraScreen";
import getFoodData from "../apiWrapper/Spoonacular";

import Colors from "../constants/colors"

let api_key = 'ddc7f808c5b645edad88c026b9439779';

const MainMenuScreen = ({userPreferences, userProvidedPreferences, setUserProvidedPreferences}) => {
  const [recipeList, setRecipeList] = useState();
  const [currentPage, setCurrentPage] = useState('recipe');

  useEffect(() => {
    getFoodData(userPreferences, api_key).then(res => {
      setRecipeList(res);
    })
  }, [userProvidedPreferences])

  let menuContent;
  if(currentPage === "recipe") {
    menuContent = recipeList ? <Recipes recipeList ={recipeList} ></Recipes> : <View style={styles.loadContainer}><ActivityIndicator size="large" color={Colors.primary} /></View>;
  } else if (currentPage === "meal") {
    menuContent = setUserProvidedPreferences(false);
  } else if (currentPage === "camera") {
    menuContent = <CameraScreen></CameraScreen>;
  }

  return (
    <View style={styles.mainMenuWrapper}>
      {menuContent}
      <Footer setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainMenuWrapper: {
    height: '100%',
    justifyContent: "flex-end"
  },
  loadContainer: {
    height: "100%",
    justifyContent: "center"
  }
})


export default MainMenuScreen
