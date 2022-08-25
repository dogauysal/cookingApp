import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Flex, TextInput, VStack } from "@react-native-material/core"
import agent from '../services/agent'
import { IStock } from '../models/IStock';
import StockItem from '../components/StockItem';
import NumericInput from 'react-native-numeric-input';
import { StyleSheet } from 'react-native';
import { DataContext, DataContextType } from '../context/DataContext';


const StocksScreen = () => {

    const { stocks, createStock, getAllStocks } = useContext(DataContext) as DataContextType
    const initialStockState: IStock = {
        id: 0,
        name: '',
        kg: 0
    }
    const [newStock, setNewStock] = useState<IStock>(initialStockState);

    const onTextChange = (value: string) => {
        console.log(value)
        if (value) {
            setNewStock(currentState => ({
                ...currentState,
                name: value
            }))
        }
    }

    const onNumericInputChange = (value: number) => {
        if (value) {
            setNewStock(currentState => ({
                ...currentState,
                kg: value
            }))
        }
    }

    const onSubmit = async () => {
        if (newStock) {
            await createStock(newStock)
            setNewStock(initialStockState)
        }
    }
    useEffect(() => {
        getAllStocks()
    }, [])


    return (
        <VStack style={styles.container} >
            <VStack style={styles.stockContainer}>
                {stocks.map(stock => (
                    <StockItem key={stock.id} stock={stock} />
                ))}
            </VStack>
            <VStack style={styles.newStockContainer}>
                <Box style={{ flex: 1, justifyContent: "center" }}>
                    <TextInput value={newStock?.name} onChangeText={(value) => onTextChange(value)} />
                </Box>
                <Box style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <NumericInput value={newStock?.kg} totalHeight={40} totalWidth={100} type="plus-minus" onChange={(value) => onNumericInputChange(value)} />
                </Box>
                <Box style={{ flex: 1, justifyContent: "center", margin: 5 }}>
                    <Button title="Add" disabled={!newStock?.name} onPress={() => onSubmit()} />
                </Box>
            </VStack>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    stockContainer: {
        flex: 2
    },
    newStockContainer: {
        flex: 1,
        flexDirection: "row"
    }
})

export default StocksScreen