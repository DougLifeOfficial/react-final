import {useContext} from "react";
import favoritesContext from "../store/favorites-context";
import VehicleList from "../components/vehicles/vehicleList";

function FavoritesPage() {
    const favoritesCtx = useContext(favoritesContext); //Lets Us Get Our Favorites Array

    let content;

    if(favoritesCtx.totalFavorites === 0) {
        content = <p>You Have No Favorites. Go To
                      the all vehicles pages and start adding some! </p>
    } else {
        content = <VehicleList vehicles= {favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>

    );
}

export default FavoritesPage;