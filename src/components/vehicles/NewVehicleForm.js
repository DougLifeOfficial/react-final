import Card from "../ui/Card";
import classes from './NewVehicleForm.module.css';
import {useRef} from "react";

function NewVehicleForm(props) {
   const makeInputRef = useRef();
   const imageInputRef = useRef();
   const modelInputRef = useRef();
   const vinInputRef = useRef();
   const colorInputRef = useRef();
   const priceInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredMake = makeInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredModel = modelInputRef.current.value;
        const enteredVin = vinInputRef.current.value;
        const enteredColor = colorInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;

        const vehicleData = {
            make: enteredMake,
            model: enteredModel,
            image: enteredImage,
            vin: enteredVin,
            color: enteredColor,
            price: enteredPrice
        };
        props.onAddVehicle(vehicleData);
        console.log(vehicleData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='make' >Vehicle Make</label>
                <input type="text" required id="make" ref={makeInputRef}/>
            </div>
                <div className={classes.control}>
                    <label htmlFor='image' >Vehicle Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='model' >Model</label>
                    <input type="text" required id="model" ref={modelInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='vin' >VIN</label>
                    <input type="text" required id="vin" ref={vinInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='color' >Color</label>
                    <input type="text" required id="color" ref={colorInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='price' >Price</label>
                    <input type="text" required id="price" ref={priceInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Vehicle</button>
                </div>
            </form>
        </Card>
    );

}

export default NewVehicleForm;