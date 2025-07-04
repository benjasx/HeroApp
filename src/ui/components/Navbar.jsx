import { Link, NavLink, useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../../auth/'
export const Navbar = () => {
    
    const {user,logout} = useContext(AuthContext);

    const navigate = useNavigate();

    const onlogout = () => {
        logout();
        navigate('/login',{replace: true}); 
    }

    return (
        <nav className='w-100 p-4 bg-dark'>
            <div className=' container d-flex align-items-center'>
                <Link
                    className='text-white fs-4 me-4 text-decoration-none'
                    to='/'
                >
                    HerosApp
                </Link>
                <div className='d-flex gap-2 justify-content-between w-100'>
                    <div className='d-flex gap-3 align-items-center'>
                        <NavLink
                            className={({ isActive }) => `text-decoration-none fw-medium ${isActive ? 'text-primary' : 'text-white'}`}
                            to="/heros/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `text-decoration-none fw-medium ${isActive ? 'text-primary ' : 'text-white'}`}
                            to="/heros/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => `text-decoration-none fw-medium ${isActive ? 'text-primary ' : 'text-white'}`}
                            to="search"
                        >
                            Search
                        </NavLink>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <span className="text-primary fs-5">{(user) ? user.name : 'no cargo el usuario'}</span>
                        <button className='btn btn-danger' onClick={onlogout}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
