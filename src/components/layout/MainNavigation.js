import {Link} from "react-router-dom";
import classes from './MainNavigation.module.css';
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    const favortiesCtx = useContext(FavoritesContext);

    return (
    <header className={classes.header}>
        <div className={classes.logo}>React Vehicles</div>
        <nav>
            <ul>
                <li>
                    <Link to='/home' >Home</Link>
                </li>
                <li>
                    <Link to='/' >All Vehicles</Link>
                </li>
                <li>
                    <Link to='/newvehicle'>Add New Vehicle</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites
                    <span className={classes.badge}>{favortiesCtx.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;