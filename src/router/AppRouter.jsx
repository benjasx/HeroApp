import { BrowserRouter, Navigate, Route, Routes } from "react-router"

import { MarvelPages, DcPages, HeroPage, SearchPage } from "../heroes"
import { LoginPages } from "../auth"
import { HeroLayout } from "../heroes/layouts/HeroLayout"
import { PageNotFound } from "../ui/components/PageNotFound"


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <PageNotFound />
                } />

                <Route path="/heros" element={<HeroLayout />} >
                    {/* <Route index element={<MarvelPages />} /> */}
                    <Route path="dc" element={<DcPages />} />
                    <Route path="marvel" element={<MarvelPages />} />
                    <Route path=":heroId" element={<HeroPage />} />
                    <Route path="search" element={< SearchPage/>} />
                </Route>


                <Route path="/" element={<Navigate to={'/heros/marvel'} />} />
                <Route path="login" element={<LoginPages />} />

            </Routes>

        </BrowserRouter>
    )
}


