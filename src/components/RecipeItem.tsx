import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text } from '@react-native-material/core'
import { Divider, VStack } from "react-native-flex-layout";
import { IStock } from "../models/IStock";
import { IRecipe } from "../models/IRecipe";

interface IProps {
    recipe: IRecipe
}

const RecipeItem: React.FC<IProps> = ({
    recipe
}) => {
    return (
        <View style={styles.container}>
            <VStack spacing={4} divider={<Divider />}>
                <Box ph={4} pt={4}>
                    <Text style={styles.title} >{recipe.name}</Text>
                </Box>
                <Box>
                    <Text>{recipe.ingredients}</Text>
                </Box>
                <Box ph={4} pb={4}>
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
        margin: 3,
        padding: 5,
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    body: {
        justifyContent: "center"
    },
    price: {
        textAlign: "right",
        fontSize: 15,
        color: "#389526"
    }
})

export default RecipeItem;