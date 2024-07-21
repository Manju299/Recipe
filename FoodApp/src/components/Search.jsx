import { useEffect, useState } from 'react'
import PropTypes from "prop-types"
import Styles from "./Search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "cf95a3d61faa4dee88860a14161fc55f";
// const API_KEY1 = "rXFkKJcZtXIMEaUlMKmKYsyCA4bFbXtEi5q49pK4"
// const URL1 = ""

export default function Search({setFoodData}) {
    const [query, setQuery] = useState("Pizza");

    useEffect(()=>{
      console.log("Effect")
      async function fetchFood(){
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json()
      console.log(data.results)
      setFoodData(data.results)
      }
      fetchFood()
    },[])

  return (
    <div className={Styles.container}>
      <input className={Styles.input} type='text' value={query} onChange={(e)=>setQuery(e.target.value)}></input>
    </div>
  )
}

Search.propTypes = {
    foodData : PropTypes.array,
    setFoodData: PropTypes.func,
}
