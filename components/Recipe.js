import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const Recipe = ({recipeImage, title, onPressProp}) => {
    return (
    <TouchableWithoutFeedback onPress={onPressProp}>
        <View style={styles.recipeWrapper}>
            <View><Image
          style={{width: 100, height: 100, margin: 5, borderRadius: 15}}
          source={{uri: recipeImage}}
            /></View>
            <View style={{...styles.title, width: "70%", paddingLeft: 10, paddingRight: 10}}><Text style={{fontSize: 20}}>{title}</Text></View>
        </View>
    </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    recipeWrapper: {
        alignItems: "center",
        height: 110,
        borderColor: "#d3d3d3",
        borderWidth: 1,
        width: '95%',
        flexDirection: "row",
        borderRadius: 15,
        marginTop: 3,
        marginBottom: 3,
    },
    title: {

    }
})


export default Recipe
