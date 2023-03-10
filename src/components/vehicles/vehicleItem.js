import classes from './vehicleItem.module.css';
import Card from '../ui/Card';
import {useContext} from "react";
import FavoritesContext from "../../store/favorites-context";
import {useNavigate} from "react-router-dom";

/**
 * Displays The Vehicle
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function VehicleItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const navigate = useNavigate();
    const FALLBACK_IMAGE = 'https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png';

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    /**
     * Toggle favorite vehicles
     */
    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
            return
        }  //Guard Clause
        favoritesCtx.addFavorite({...props})

    }

    /**
     * Deletes an item from the database
     */
    function handleDelete () {
        fetch('http://localhost:8080/vehicle/' + props.id,
            {
                method: 'DELETE',
            }
        ).then(() => {
            navigate('/') //Takes User Back to Home Page after they submit new vehicle
        });
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={(props.image.length > 0) ? props.image : FALLBACK_IMAGE} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>Make: {props.vehicleModel.vehicleMake.make}</h3>
                    <h3>Model: {props.vehicleModel.model}</h3>
                    <p>COLOR: {props.color}</p>
                    <p>Price: {props.price}</p>
                    <p>VIN: {props.vin}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
                    <button>Update Vehicle</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </Card>
        </li>
    );
}
export default VehicleItem;