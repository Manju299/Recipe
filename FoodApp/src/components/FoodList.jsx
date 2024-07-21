import PropTypes from "prop-types"
import Styles from "./FoodList.module.css"
import FoodItem from "./FoodItem"


// eslint-disable-next-line react/prop-types
export default function FoodList({foodData,setFoodID}) {
  return (
    <div className={Styles.container}>
        {foodData.map((food)=>
           <FoodItem key={food.id} food={food} setFoodID={setFoodID}/>
      )}
      
    </div>
  )
}

FoodList.propTypes = {
    foodData: PropTypes.array,
}
