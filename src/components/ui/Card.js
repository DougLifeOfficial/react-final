import classes from './Card.module.css'
function Card(props) {
/*
    props.children loads all the values between the <Cards><Cards> Tags in Vehicle Item
 */
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;