import { types } from "../../../auth/types/types"

describe('Pruebas en types.js', () => {
    test('debe de ser iguales', () => {

        expect(types).toEqual({
            loging: '[Auth] Loging',
            logout: '[Auth] Logout',
        })
    })
})

