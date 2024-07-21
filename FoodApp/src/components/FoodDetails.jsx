import { useEffect, useState } from "react";


// eslint-disable-next-line react/prop-types
export default function FoodDetails({foodID}) {
  const[food,setFood] = useState({})
  const[isLoading, setIsLoading] = useState(true)
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`
  const API_KEY = "your key ";

  useEffect(()=>{
   async function fetchFood(){
      const res = await fetch(`${URL}?apiKey=${API_KEY}`)
      const data = await res.json();
      console.log(data)
      setFood(data)
      setIsLoading(false)
    }
    fetchFood()
  },[])

    
  return (
    <div>
        <p>Food Details:{foodID}</p>
        <p>{food.title}</p>
        <img src={food.image} alt="image"></img>
        <span><strong>⏰{food.readyInMinutes} Minutes</strong></span>
        <span>
          <strong>👪{food.servings} Members
        </strong>
          </span>
        <span><strong>{food.vegetarian? "🍠 Veg": "🍗 Non-Veg"}</strong></span>
  
        <span><strong>💲{food.pricePerServing}</strong></span>
        
        <div>
          <h2>Instructions</h2>
          {isLoading ? <p>Loading...</p>: 
          (food.analyzedInstructions[0]
          .steps.map((step)=>
          (<li key={step.number}>{step.step}</li>

          )))
        }
        </div>
    </div>
  )
}
