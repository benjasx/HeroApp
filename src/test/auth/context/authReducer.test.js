import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types"


describe('Pruebas en el authReducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('debe autenticar y colocar el usuario', () => {
        const action = {
            type: types.loging,
            payload: {
                name: 'Benjamín Sánchez',
                uid: 'abc'
            }
        }

        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('debe borrar el nombre del usuario y logged en false', () => {
        const state = {
            name: 'Benjamín Sánchez',
            uid: 'abc'
        }

        const action = {
            type: types.logout,
        }
        const newState = authReducer(state, action)

        expect(newState).toEqual({ logged: false })
    })
})