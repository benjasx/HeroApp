import { BrowserRouter, Navigate, Route, Routes } from "react-router"

import { MarvelPages, DcPages, HeroPage, SearchPage } from "../heroes"
import { LoginPages } from "../auth"
import { HeroLayout } from "../heroes/layouts/HeroLayout"
import { PageNotFound } from "../ui/components/PageNotFound"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="*" element={<PageNotFound />} />
                <Route path="login" element={
                    <PublicRoutes>
                        <LoginPages />
                    </PublicRoutes>} />
                <Route path="/" element={<Navigate to={'/heros/marvel'} />} />

                {/* *****************************************************
                  * RUTAS PROTEGIDAS: Envuelvelas con <PrivateRoutes> *
                  *****************************************************
                */}
                <Route path="/heros" element={
                    <PrivateRoutes>
                        <HeroLayout />
                    </PrivateRoutes>
                } >
                    {/* <Route index element={<MarvelPages />} /> */}
                    <Route path="dc" element={<DcPages />} />
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path=":heroId" element={<HeroPage />} />
                    <Route path="search" element={< SearchPage />} />
                </Route>



            </Routes>

        </BrowserRouter>
    )
}


