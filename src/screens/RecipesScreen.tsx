import { Box } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RecipeItem from '../components/RecipeItem'
import { IRecipe } from '../models/IRecipe'
import agent from '../services/agent'
const RecipesScreen = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([])

    const { RecipeService } = agent;

    useEffect(() => {
        fetchAllRecipes()
    }, [])

    const fetchAllRecipes = async () => {
        await RecipeService.getAll().then(data => {
            setRecipes(data)
        }).catch(err => {
            console.log(err)
        })
    }

    const renderRecipeItem = (recipe: IRecipe) => {
        return (
            <RecipeItem recipe={recipe} />
        )
    }
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
    }
})

export default RecipesScreen;