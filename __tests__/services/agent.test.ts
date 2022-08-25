import axios, { AxiosResponse } from 'axios';
import { IRecipe } from '../../src/models/IRecipe';
import { IStock } from '../../src/models/IStock';
import agent from '../../src/services/agent';

const { RecipeService, StocksService } = agent

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;


const recipes: IRecipe[] = [
    {
        "id": 42,
        "name": "Carne Asada Bowl",
        "price": 15,
        "ingredients": [
            "salt",
            "chicken",
            "steak",
            "farro",
            "black_beans",
            "guacamole"
        ],
        "has_cheese": false,
        "has_salt": true
    },
    {
        "id": 84,
        "name": "Pollo Quesedilla",
        "price": 12,
        "ingredients": [
            "salt",
            "chicken",
            "black_beans",
            "guacamole",
            "cheese"
        ],
        "has_cheese": true,
        "has_salt": true
    }
]

const stocks: IStock[] = [
    {
        "id": 1,
        "name": "Chicken",
        "kg": 2
    },
    {
        "id": 2,
        "name": "Steak",
        "kg": 5
    }
]

afterEach(() => {
    //To check how many times axios.get called 
    jest.clearAllMocks()
})

describe('get all recipes', () => {

    test('should return recipe list', async () => {
        const mockedResponse: AxiosResponse = {
            data: recipes,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await RecipeService.getAll()
        expect(axios.get).toHaveBeenCalled()
        expect(data).toEqual(recipes)
    })
})

describe('get recipe by id', () => {

    test('should return single recipe', async () => {
        const mockedResponse: AxiosResponse = {
            data: recipes[0],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await RecipeService.getById(42)
        expect(axios.get).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data).toEqual(recipes[0])

    })
})

describe('get all stocks', () => {
    test('should return stock list', async () => {
        const mockedResponse: AxiosResponse = {
            data: stocks,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await StocksService.getAll()
        expect(axios.get).toHaveBeenCalled()
        expect(data).toEqual(stocks)
    })

})

describe('get stock by id', () => {
    test('should return single stock', async () => {
        const mockedResponse: AxiosResponse = {
            data: stocks[1],
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }

        mockedAxios.get.mockResolvedValueOnce(mockedResponse);

        expect(axios.get).not.toHaveBeenCalled()
        const data = await StocksService.getById(3)
        expect(axios.get).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data).toEqual(stocks[1])
    })
})

describe('create new stock', () => {
    test('should add new stock and increase stocks number by one', async () => {

        const newStock = {
            id: stocks.length + 1,
            name: "Tomato",
            kg: 10
        }

        const mockedResponse: AxiosResponse = {
            data: newStock,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        };

        mockedAxios.post.mockResolvedValueOnce(mockedResponse)

        const data = await StocksService.create(newStock);
        expect(axios.post).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data.id).toEqual(stocks.length + 1)
    })
})

describe('update stock', () => {
    test('should  update name and kg value of stock', async () => {

        let stockToBeUpdated = { ...stocks[0] };
        stockToBeUpdated.name = "Fish"
        stockToBeUpdated.kg = 4

        const mockedResponse: AxiosResponse = {
            data: stockToBeUpdated,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }

        mockedAxios.put.mockResolvedValueOnce(mockedResponse)

        const data = await StocksService.update(stockToBeUpdated)
        expect(axios.put).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data.id).toEqual(stockToBeUpdated.id)
        expect(data.name).toEqual("Fish")
        expect(data.kg).toEqual(4)

    })
})

describe('delete stock', () => {
    test('should delete item from the stock list', async () => {


        let stockToBeDeleted = { ...stocks[1] };

        const mockedResponse: AxiosResponse = {
            data: stockToBeDeleted,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {}
        }

        mockedAxios.delete.mockResolvedValueOnce(mockedResponse)

        const data = await StocksService.delete(stockToBeDeleted.id)
        expect(axios.delete).toHaveBeenCalled()
        expect(axios).not.toBeNull()
        expect(data.id).toEqual(stockToBeDeleted.id)
    })
})

describe('get recipes by id format', () => {
    test('should return new array list', () => {
        const mockedResponse = [
            {
                42: {
                    "name": "Carne Asada Bowl",
                    "price": 15,
                    "ingredients": [
                        "salt",
                        "chicken",
                        "steak",
                        "farro",
                        "black_beans",
                        "guacamole"
                    ],
                    "has_cheese": false,
                    "has_salt": true
                },
                84: {
                    "name": "Pollo Quesedilla",
                    "price": 12,
                    "ingredients": [
                        "salt",
                        "chicken",
                        "black_beans",
                        "guacamole",
                        "cheese"
                    ],
                    "has_cheese": true,
                    "has_salt": true
                }
            }
        ]

        mockedAxios.get.mockResolvedValueOnce(mockedResponse)
        const data = RecipeService.convertToRecipesById(recipes)
        expect(axios.get).not.toHaveBeenCalled()
        expect(data).not.toEqual(recipes)
    })
})