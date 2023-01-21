import classes from './VehicleList.module.css';
import VehicleItem from "./vehicleItem";
function VehicleList(props) {



    return (
        <ul className={classes.list}>
            {props.vehicles.map((vehicle) => (
                <VehicleItem
                    key={vehicle.id}
                    id={vehicle.id}
                    image={vehicle.image}
                    make={vehicle.make}
                    model={vehicle.model}
                    color={vehicle.color}
                    vin={vehicle.vin}
                />
            ))}
        </ul>
    );
}

export default VehicleList;