import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}

export const AuthProvider = ({ children }) => {
    const [AuthState, dispatch] = useReducer(authReducer, initialState, init)

    const login = (name) => {
        const user = {id: 'abc',name: name}
        const acction = {type: types.loging,payload: user}
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(acction)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const acction = {type: types.logout}
        dispatch(acction)
    }

    return (
        <AuthContext.Provider value={{
            ...AuthState,
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}


