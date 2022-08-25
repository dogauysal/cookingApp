import axios from 'axios'
import AsyncStorage from '../../src/storage/AsyncStorage'
import HttpClient from '../../src/utils/HttpClient'

jest.mock('axios')

const token = "randomToken"

beforeAll(() => {
    AsyncStorage.setToken(token)
    HttpClient.setBearerToken(token)
})

afterEach(() => {
    //To check how many times axios.get called 
    jest.clearAllMocks()
})

describe("token", () => {

    it('should clear token', () => {
        AsyncStorage.removeToken()

        expect(AsyncStorage.getToken()).toBe(null)
    })

})