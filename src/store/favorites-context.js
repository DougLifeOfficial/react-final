import {createContext, useState} from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteVehicle) => {},
    removeFavorite: (vehicleId) => {},
    itemIsFavorite: (vehicleId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteVehicle) {

        //Get the Latest State SnapShot
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteVehicle);
        });
    }

    function removeFavoriteHandler(vehicleId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(vehicle => vehicle.id !== vehicleId);
        })
    }

    function itemIsFavoriteHandler(vehicleId) {
        return userFavorites.some(vehicle => vehicle.id === vehicleId);
    }

    //Creates User Favorites and Keeps Track of The Total Amount
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return(
        <FavoritesContext.Provider value={context}>
            {props.children}
    </FavoritesContext.Provider>
    );
}

export default FavoritesContext;