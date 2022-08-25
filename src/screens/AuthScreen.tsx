import { Box, Text, VStack } from "@react-native-material/core";
import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext, useAuthorization } from "../context/AuthContext";
import agent from "../services/agent";
import AsyncStorage from "../storage/AsyncStorage";
import HttpClient from "../utils/HttpClient";
import TokenGenerator from "../utils/TokenGenerator";

const AuthScreen = ({ navigation }) => {

    const { signIn } = useAuthorization()

    const authenticate = async () => {

        await agent.RecipeService.getAll()
        const token = TokenGenerator.generateToken()

        await HttpClient.setBearerToken(token)
        await AsyncStorage.setToken(token)
        signIn(token)
        navigation.navigate('Stocks')
    }

    return (
        <VStack style={{ flex: 1, flexDirection: "column" }}>
            <Box style={{ flex: 1, justifyContent: "center", alignSelf: "center" }} >
                <TouchableOpacity onPress={() => authenticate()}><Text>Sign In</Text></TouchableOpacity>
            </Box>
        </VStack >
    )
}

export default AuthScreen