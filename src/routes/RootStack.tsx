import React, { useContext } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthContext } from '../context/AuthContext';
import StocksScreen from '../screens/StocksScreen';
import AuthScreen from '../screens/AuthScreen';
import RecipesScreen from '../screens/RecipesScreen';
import { TouchableOpacity, TouchableOpacityBase } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Text } from '@react-native-material/core';

const RootStack = () => {
    const { authToken, signOut } = useContext(AuthContext)

    const Stack = createNativeStackNavigator();

    let navigateTo = authToken ? 'Stocks' : 'Auth'

    return (
        <Stack.Navigator
            initialRouteName='RecipeNavigatior'
        >
            <Stack.Screen
                name="Recipes"
                component={RecipesScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigateTo)}
                        ><Icon name='list-status' size={25} color={"blue"} /></TouchableOpacity>
                    ),

                })}
            />
            <Stack.Screen
                name="Stocks"
                component={StocksScreen}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => signOut()}><Text>Logout</Text></TouchableOpacity>
                    )
                }}
                navigationKey={authToken ? 'public' : 'private'}
            />
            <Stack.Screen
                navigationKey={authToken ? 'private' : 'public'}
                name="Auth"
                component={AuthScreen}
            />
        </Stack.Navigator>
    )
}

export default RootStack;