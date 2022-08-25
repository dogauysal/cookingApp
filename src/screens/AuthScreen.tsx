import { Box, Text, VStack } from "@react-native-material/core";
import React, { useContext, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext, useAuthorization } from "../context/AuthContext";

const AuthScreen = ({ navigation }) => {

    const { authToken, signIn, signOut } = useAuthorization()

    const navigateStock = () => {
        signIn("token")
        navigation.navigate('')
    }

    useEffect(() => {
        console.log(authToken)
    }, [])

    return (
        <VStack>
            <Box>
                {authToken ? (
                    <TouchableOpacity onPress={() => signOut()}><Text>Logut</Text></TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => navigateStock()}><Text>Sign In</Text></TouchableOpacity>
                )}
            </Box>
        </VStack>
    )
}

export default AuthScreen