import { Box, Button, Flex, HStack, Text } from "@react-native-material/core";
import React, { useContext } from "react";
import { IStock } from "../models/IStock";
import NumericInput from 'react-native-numeric-input'
import agent from "../services/agent";
import { DataContext, DataContextType } from '../context/DataContext';


interface IProps {
    stock: IStock
}

const StockItem: React.FC<IProps> = ({
    stock
}) => {

    const { stocks, updateStock, deleteStock } = useContext(DataContext) as DataContextType


    const onNumericInputChange = (value: number) => {
        let _stock = stocks.find(s => s.id === stock.id)
        if (_stock) {
            _stock.kg = value

            updateStock(stock)
        }

    }


    return (
        <HStack ph={5} mv={5} >
            <Box style={{ flex: 1, flexDirection: "row" }}>
                <Box style={{ flex: 1, justifyContent: "center" }}>
                    <Text>{stock.name}</Text>
                </Box>
                <Box style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <NumericInput value={stock.kg} totalHeight={40} totalWidth={100} type="plus-minus" onChange={value => onNumericInputChange(value)} />
                </Box>
                <Box style={{ flex: 1, justifyContent: "center", margin: 5 }}>
                    <Button title="Delete" color="red" tintColor="white" onPress={() => deleteStock(stock.id)} />
                </Box>
            </Box>
        </HStack>
    )
}

export default StockItem;