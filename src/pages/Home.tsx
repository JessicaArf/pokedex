import { useEffect, useState } from "react"
import {CardDetails, CardProps} from "../components/CardDetails"
import {NavBar} from "../components/NavBar"
import { api } from "../services/api"
import { LoadingPokebola } from "../components/LoadingPokebola"
import './Home.css'

export const Home = () => {

  const [ isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState <CardProps[]>([]);;

  async function getPokemonData() {
  const {data} = await api.get("pokemon?limit=151")

  const dataComplete = await Promise.all(
    data.results.map(async ( result: {url: string}) => {
      const { data }= await api.get(result.url);

      return {
        id: data.id,
        name: data.name,
        types: data.types,
      };
    })
  )
  setPokemonList(dataComplete);
  setIsLoading(false)
  };


  useEffect(() => {
  getPokemonData();
  }, []);


  if(isLoading){
    return <LoadingPokebola message="Carregando.."/>
  }
  
  return (
    <> 
    <NavBar/>
    <h1 className="title">Encontre todos os pokémons em um só lugar</h1>
    <div className="list">
    {pokemonList.map((pokemon, index)=> (
    <CardDetails  
    key={index}
    id={pokemon.id}
    name={pokemon.name}
    types={pokemon.types}
    />))}
    </div>
      
    </>
  )
}

