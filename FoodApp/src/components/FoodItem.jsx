import PropTypes from "prop-types"
import Styles from "./FoodItem.module.css"

// eslint-disable-next-line react/prop-types
export default function FoodItem({food,setFoodID}) {
  return (
        <div className={Styles.itemContainer}>
            <img className={Styles.itemImage}src={food.image} alt="image"/>
            <div className={Styles.itemContent}>
               <p>{food.title}</p>
            </div>
            <div className={Styles.itemButton}>
            <button onClick={()=>setFoodID(food.id)} className={Styles.button}> View Recipe </button>
            </div>
        </div>
  )
}


FoodItem.propTypes = {
    food: PropTypes.array,
}
