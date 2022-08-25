import { Box, Flex, ListItem, Text } from "@react-native-material/core";
import React from "react";
import { StyleSheet } from "react-native";

interface IProps {
    ingredient: string
}

const Ingredient: React.FC<IProps> = ({
    ingredient
}) => {
    return (
        <Flex style={{ flexDirection: "row", alignContent: "flex-start" }}>
            <Text>- {ingredient}</Text>
        </Flex>
    )
}

const styles = StyleSheet.create({
    itemText: {

    }
})

export default Ingredient