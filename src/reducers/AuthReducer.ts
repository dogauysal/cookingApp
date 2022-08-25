import React from "react";

const authReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                authToken: action.token
            }
        case "SIGN_OUT":
            return {
                ...state,
                authToken: null
            }
    }
}

export default authReducer