import classes from './VehicleList.module.css';
import VehicleItem from "./vehicleItem";

/**
 * Gets a List of Items
 * Displays List ALl Vehicle Items
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */


function VehicleList(props) {
    console.log(props)
    if(props === []) {
        return (<div>No Data Found</div>)
    }

    return (
        <ul className={classes.list}>
            {props.vehicles.map((vehicle) => (
                <VehicleItem {...vehicle} /> //Inherit props with Spread Operator
            ))}
        </ul>
    );
}

export default VehicleList;