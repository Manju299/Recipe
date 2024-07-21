import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodList from './components/FoodList';
import Nav from './components/Nav';
import Container from './components/Container';
import InnerComponent from './components/InnerComponent';
import FoodDetails from './components/FoodDetails';


function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("");
 
  return (
    <>
    <Nav/>
    <Search setFoodData={setFoodData}/>
    {/* <FoodList foodData={foodData}/> */}
    
    <Container>
      <InnerComponent>
        <FoodList foodData={foodData} setFoodID={setFoodID}/> 
      </InnerComponent>
      <InnerComponent>
        <FoodDetails foodID={foodID}/> 
      </InnerComponent>
      
    </Container>
    </>
  )
}

export default App
