import React, { useEffect, useState } from 'react'
import { Box, Button, Flex, TextInput, VStack } from "@react-native-material/core"
import agent from '../services/agent'
import { IStock } from '../models/IStock';
import StockItem from '../components/StockItem';
import NumericInput from 'react-native-numeric-input';
import { StyleSheet } from 'react-native';

const StocksScreen = () => {
    const { StocksService } = agent;
    const [stocks, setStocks] = useState<IStock[]>([])


    useEffect(() => {
        const fetchAllStocks = async () => {
            await StocksService.getAll().then(res => {
                setStocks(res)
            })
        }

        fetchAllStocks()
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
                    <TextInput />
                </Box>
                <Box style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <NumericInput totalHeight={40} totalWidth={100} type="plus-minus" />
                </Box>
                <Box style={{ flex: 1, justifyContent: "center", margin: 5 }}>
                    <Button title="Add" />
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