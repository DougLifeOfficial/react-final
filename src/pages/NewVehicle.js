import NewVehicleForm from "../components/vehicles/NewVehicleForm";
import {useNavigate} from "react-router-dom";

function NewVehiclePage() {
    const navigate = useNavigate();
    function addVehicleHandler(vehicleData) {
        fetch('http://localhost:8080/vehicle/',
            {
                method: 'POST',
                body: JSON.stringify(vehicleData),
                headers: {
                    "Accept": 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            navigate('/') //Takes User Back to Home Page after they submit new vehicle
        });
    }

    return (
    <section>
        <h1>Add New Vehicle</h1>
        <NewVehicleForm onAddVehicle={addVehicleHandler} />
    </section>
    );
}

export default NewVehiclePage;