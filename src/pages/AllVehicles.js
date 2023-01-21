import VehicleList from "../components/vehicles/vehicleList";
import {useState, useEffect} from "react";


function AllVehiclesPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVehicles, setLoadedVehicles] = useState([]) //Empty initially, Till our Data is loaded from the Back End


    useEffect(() => {
        setIsLoading(true);
        fetch(
        'http://localhost:8080/vehicle/'
    ).then(response => {
        return response.json(); //give us access to the Data from out Backend
    }).then(data => {
        const vehicles = []; //Once we Fetch The Data, We Transform it

            //Goes Through all the Keys We Fetch From PostMan
        for(const key in data) {
            const vehicle = {        //Create a New Vehicle For Every Key Stored in Postman
                id: key,
                ...data[key]        //Then Access the Nest Object For Given Key
            };

            vehicles.push(vehicle)
        }

        setIsLoading(false); //this block is where we get the data, Set to False Once ALl data is loaded
        setLoadedVehicles(vehicles);
    });
    }, []); //We have no External Dependencies, Thus this code will only run once, When this
                // component is rendered for the first time.


    //Default Request is Get,


    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Vehicles</h1>
           <VehicleList vehicles={loadedVehicles}/>

        </section>
    );
}

export default AllVehiclesPage;