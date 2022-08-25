import axios, { AxiosResponse } from 'axios';
import { IRecipe } from '../models/IRecipe';
import { IStock } from '../models/IStock';
import HttpClient from '../utils/HttpClient';

const RecipeService = {
    getAll: () => HttpClient.get<IRecipe[]>('/recipe'),
    getById: (id: number) => HttpClient.get<IRecipe>(`/recipe/${id}`),
    convertToRecipesById: (recipes: IRecipe[]) => {
        return Object.assign({}, ...recipes.map((x) => ({
            [x.id]: {
                name: x.name,
                price: x.price,
                ingredients: x.ingredients,
                has_cheese: x.has_cheese,
                has_salt: x.has_salt
            }
        })))
    }
}

const StocksService = {
    getAll: () => HttpClient.get<IStock[]>("/stock"),
    getById: (id: number) => HttpClient.get<IStock>(`/stock/${id}`),
    create: (stock: IStock) => HttpClient.post<IStock>('/stock', stock),
    update: (stock: IStock) => HttpClient.put<IStock>(`/stock/${stock.id}`, stock),
    delete: (id: number) => HttpClient.delete<IStock>(`/stock/${id}`, {})
}

export default {
    RecipeService,
    StocksService,
}