import { Box } from '@react-native-material/core'
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import RecipeItem from '../components/RecipeItem'
import { DataContext, DataContextType } from '../context/DataContext'
import { IRecipe } from '../models/IRecipe'
import agent from '../services/agent'


const RecipesScreen = () => {
    const { recipes } = useContext(DataContext) as DataContextType
    const { RecipeService } = agent

    const renderRecipeItem = (recipe: IRecipe) => {
        return (
            <RecipeItem key={recipe.id} recipe={recipe} />
        )
    }

    useEffect(() => {
        console.log(RecipeService.convertToRecipesById(recipes))
    }, [])

    return (
        <Box
            style={styles.container}
        >
            <FlatList
                data={recipes}
                renderItem={({ item }) => renderRecipeItem(item)}
                keyExtractor={(item, index) => `${item.id}`}
                numColumns={2}
            />
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 5,

    }
})

export default RecipesScreen;