import { Box, Button, Flex, HStack, Text } from "@react-native-material/core";
import React from "react";
import { IStock } from "../models/IStock";
import NumericInput from 'react-native-numeric-input'
import agent from "../services/agent";

interface IProps {
    stock: IStock
}

const StockItem: React.FC<IProps> = ({
    stock
}) => {
    const { StocksService } = agent;

    const updateStockCount = async (value: number) => {
        let stockToBeUpdate = { ...stock }
        stockToBeUpdate.kg = value

        await StocksService.update(stockToBeUpdate)
    }

    const deleteStock = async () => {
        await StocksService.delete(stock.id)
    }

    return (
        <HStack ph={5} mv={5} >
            <Box style={{ flex: 1, flexDirection: "row" }}>
                <Box style={{ flex: 1, justifyContent: "center" }}>
                    <Text>{stock.name}</Text>
                </Box>
                <Box style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <NumericInput value={stock.kg} totalHeight={40} totalWidth={100} type="plus-minus" onChange={value => updateStockCount(value)} />
                </Box>
                <Box style={{ flex: 1, justifyContent: "center", margin: 5 }}>
                    <Button title="Delete" color="red" tintColor="white" onPress={() => deleteStock()} />
                </Box>
            </Box>
        </HStack>
    )
}

export default StockItem;