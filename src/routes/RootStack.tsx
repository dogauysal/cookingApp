import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import RecipesScreen from "../screens/RecipesScreen";
import StocksScreen from "../screens/StocksScreen";

const RootStack = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Recipes"
                component={RecipesScreen}
            />
            <Stack.Screen
                name="Stocks"
                component={StocksScreen}
            />
        </Stack.Navigator>
    )
}

export default RootStack;