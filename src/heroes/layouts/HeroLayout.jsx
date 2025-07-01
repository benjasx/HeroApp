import { Outlet } from "react-router"
import { Navbar } from "../../ui/components/Navbar"

export const HeroLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )
}
