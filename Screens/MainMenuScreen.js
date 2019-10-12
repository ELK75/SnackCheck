import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Footer from "../components/Footer";
import Recipes from "../components/Recipes";
import MealPlan from "../components/MealPlan";
import Camera from "../components/Camera";

const MainMenuScreen = () => {

  const [currentPage, setCurrentPage] = useState('recipe');

  let menuContent;
  if(currentPage === "recipe") {
    menuContent = <Recipes></Recipes>;
  } else if (currentPage === "meal") {
    menuContent = <MealPlan></MealPlan>;
  } else if (currentPage === "camera") {
    menuContent = <Camera></Camera>;
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
  }
})


export default MainMenuScreen
