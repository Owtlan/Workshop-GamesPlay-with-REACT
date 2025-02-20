import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import withAuth from "../../HOC/withAuth";



function Header({
    auth,
}) {
    // const { isAuthenticated } = useAuthContext()
    const { isAuthenticated } = auth;

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {isAuthenticated
                    ?
                    (<div id="user">
                        <Link to="/game/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                    </div>)
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }

            </nav>
        </header>

    );
}

export default withAuth(Header);