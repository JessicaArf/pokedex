import { useParams } from "react-router-dom";
import {NavBar} from "../components/NavBar"
import {pokemons} from  "../assets/pokemon.json"

const Details = () => {

  const {id} = useParams();

  return (
    <>
   <NavBar hasGoBack={true}/>
  <h1> {pokemons.find((pokemon) => String(pokemon.id) === id)?.name} </h1> 
  </>
  )
};

export default Details;