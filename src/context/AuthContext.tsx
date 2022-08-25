import React, { createContext, ReactNode, useContext, useEffect, useMemo, useReducer } from 'react';
import authReducer from '../reducers/AuthReducer';
import AsyncStorage from '../storage/AsyncStorage'

interface IProps {
    children: ReactNode
}

export const AuthContext = createContext({
    authToken: null,
    signIn: (token: string) => { },
    signOut: () => { }
});

export const useAuthorization = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth Error')
    }


    return context
}

export const AuthProvider: React.FC<IProps> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        authToken: null
    })

    const { getToken, setToken, removeToken } = AsyncStorage

    useEffect(() => {
        const initState = async () => {
            try {
                const authToken = await getToken();
                if (authToken !== null) {
                    dispatch({ type: 'SIGN_IN', token: authToken });
                } else {
                    dispatch({ type: 'SIGN_OUT' });
                }
            } catch (e) {
                throw new Error("State Error")
            }
        };

        initState();
    }, [state, dispatch])

    const actions = useMemo(() => ({
        signIn: async (token: string) => {
            dispatch({ type: "SIGN_IN", token })
        },
        signOut: async () => {
            dispatch({ type: 'SIGN_OUT' });
            await removeToken
        }
    }), [state, dispatch])

    return (
        <AuthContext.Provider value={{ ...state, ...actions }}>
            {children}
        </AuthContext.Provider>
    )
}