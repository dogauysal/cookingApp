import React, { useContext } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { AuthContext } from '../context/AuthContext';
import StocksScreen from '../screens/StocksScreen';
import StockDetailScreen from '../screens/StockDetailScreen';
import AuthScreen from '../screens/AuthScreen';
import RecipesScreen from '../screens/RecipesScreen';
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const RootStack = () => {
    const { authToken } = useContext(AuthContext)

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
            {authToken ?
                (<Stack.Screen
                    name="Stocks"
                    component={StocksScreen}
                />) : (
                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                    />
                )
            }



        </Stack.Navigator>
    )
}

export default RootStack;