import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text } from '@react-native-material/core'
import { Divider, VStack } from "react-native-flex-layout";
import { IRecipe } from "../models/IRecipe";
import Ingredient from "./Ingredient";

interface IProps {
    recipe: IRecipe
}

const RecipeItem: React.FC<IProps> = ({
    recipe
}) => {
    return (
        <View style={styles.container}>
            <VStack style={styles.subContainer} spacing={4} divider={<Divider />}>
                <Box style={styles.header} ph={4} pt={4}>
                    <Text style={styles.title} >{recipe.name}</Text>
                </Box>
                <Box style={styles.body}>
                    {recipe.ingredients.map((ingredient, index) => (
                        <Ingredient key={`ing_${index}`} ingredient={ingredient} />
                    ))}
                </Box>
                <Box ph={4} pb={4} style={styles.footer}>
                    <Text style={styles.price}>Price: ${recipe.price}</Text>
                </Box>
            </VStack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        padding: 5,
        margin: 3,
        maxWidth: "50%"
    },
    subContainer: {
        flex: 1,
        flexDirection: "column"
    },
    header: {
        flex: 1
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    body: {
        flex: 3,
        flexDirection: "column",
        justifyContent: "center",
    },
    footer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    price: {
        textAlign: "right",
        fontSize: 15,
        color: "#389526",
        alignItems: "flex-end"
    }
})

export default RecipeItem;