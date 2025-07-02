
import { render } from "@testing-library/react"
import { AuthContext } from "../../auth"
import { PublicRoutes } from "../../router/PublicRoutes"

describe('Puebas en PublicRoutes.jsx', () => {
    test('debe de mostar el children si no esta autenticado', () =>{
        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes>
                    <h1>Ruta publica</h1>
                </PublicRoutes>
            </AuthContext.Provider>
        )
    })
})

