import { Link, NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {

    //custom hook de react-router
    const navigate = useNavigate();



    const onLogout = () => {
        navigate('/login', {
            replace: true   // evita que regrese con atras 
        } );
    }


    return (
        <nav className="navbar navbar-expand-lg bg-light p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Home
            </Link>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav">
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/marvel">
                        Marvel
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/dc">
                        DC
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/search">
                        Search
                    </NavLink>

                </div>
            </div>

            <div
                className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        Usuario
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        logout
                    </button>
                </ul>
            </div>

        </nav >
    )
}
