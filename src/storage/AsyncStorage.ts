import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const value = await AsyncStorage.getItem('token')

    return value ? JSON.parse(value) : null;
}

const setToken = async (value: string) => {
    return AsyncStorage.setItem('token', value)
}

const removeToken = async () => {
    return AsyncStorage.removeItem('token');
}

export default {
    getToken,
    setToken,
    removeToken
}