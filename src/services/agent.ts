import axios, { AxiosResponse } from 'axios';
import { IRecipe } from '../models/IRecipe';
import { IStock } from '../models/IStock';

axios.defaults.baseURL = "http://localhost:3000"

const responseBody = (response: AxiosResponse) => response.data

const RecipeService = {
    getAll: (): Promise<IRecipe[]> => axios.get("/recipe").then(responseBody),
    getById: (id: number): Promise<IRecipe> => axios.get(`/recipe/${id}`).then(responseBody)
}

const StocksService = {
    getAll: (): Promise<IStock[]> => axios.get("/stock").then(responseBody),
    getById: (id: number): Promise<IStock> => axios.get(`/stock/${id}`).then(responseBody),
    create: (stock: IStock): Promise<IStock> => axios.post('/stock', stock).then(responseBody),
    update: (stock: IStock): Promise<IStock> => axios.put(`/stock/${stock.id}`, stock).then(responseBody),
    delete: (id: number): Promise<IStock> => axios.delete(`/stock/${id}`).then(responseBody)
}

export default {
    RecipeService,
    StocksService
}