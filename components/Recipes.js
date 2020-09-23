import React from 'react'
import { View, Text, StyleSheet, FlatList, Linking } from 'react-native'
import Recipe from "./Recipe"


const Recipes = ({recipeList}) => {
  let recipeListComponents = recipeList.results.map((recipe) => {
      return <Recipe onPressProp={()=> {Linking.openURL(recipe.sourceUrl) }} key={recipe.id} recipeImage={recipe.image} title={recipe.title}></Recipe>});
  // let recipeListComponents = <Recipe recipeImage={recipe}

  return (
    <View style={styles.recipesWrapper}>
      <FlatList data ={recipeListComponents} renderItem = {itemData => {
        return itemData.item;
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  recipesWrapper: {
    alignItems: 'center',
    paddingTop: 185
  }
})


export default Recipes
