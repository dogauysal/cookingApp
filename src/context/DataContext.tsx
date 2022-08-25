import React, { createContext, ReactNode, useEffect, useState } from "react";
import { IRecipe } from "../models/IRecipe";
import { IStock } from "../models/IStock";
import agent from "../services/agent";

interface IProps {
    children: ReactNode
}

export type DataContextType = {
    recipes: IRecipe[];
    getAllRecipes: () => void;
    stocks: IStock[];
    createStock: (stock: IStock) => void;
    updateStock: (stock: IStock) => void;
    deleteStock: (id: number) => void;
    getAllStocks: () => void;
}

export const DataContext = createContext<DataContextType>({
    recipes: [],
    getAllRecipes: () => { },
    stocks: [],
    createStock: (stock: IStock) => { },
    updateStock: (stock: IStock) => { },
    deleteStock: (id: number) => { },
    getAllStocks: () => []
});

const DataProvider: React.FC<IProps> = ({ children }) => {

    const [stocks, setStocks] = useState<IStock[]>([])
    const [recipes, setRecipes] = useState<IRecipe[]>([])

    const { StocksService, RecipeService } = agent

    const createStock = async (stock: IStock) => {
        const newStock: IStock = {
            id: Math.floor(Math.random() * 10000),
            name: stock.name,
            kg: stock.kg
        }

        await StocksService.create(newStock).then((res) => {
            if (res) {
                setStocks([...stocks, newStock])
            }
        }).catch(err => {
            console.log(err)
        })

    }

    const updateStock = async (stock: IStock) => {

        await StocksService.update(stock).then(res => {
            if (res) {
                let _stocks = [...stocks]

                let s = stocks.findIndex(s => s.id === stock.id)

                _stocks[s] = { ...stocks[s], kg: stock.kg }

                setStocks(_stocks)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteStock = async (id: number) => {

        await StocksService.delete(id).then(res => {
            if (res) {
                let _stocks = stocks.filter(s => s.id !== id)

                setStocks(_stocks)
            }
        }).catch(err => {
            console.log(err)
        })


    }

    const getAllStocks = async () => {
        await StocksService.getAll().then((res) => {
            setStocks(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getAllRecipes = async () => {
        await RecipeService.getAll().then(res => {
            setRecipes(res)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getAllRecipes()
    }, [])

    return <DataContext.Provider value={{ stocks, recipes, getAllRecipes, createStock, updateStock, deleteStock, getAllStocks }} >{children}</DataContext.Provider>
}

export default DataProvider