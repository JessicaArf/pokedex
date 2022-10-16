import { useEffect } from "react"
import {CardDetails} from "../components/CardDetails"
import {NavBar} from "../components/NavBar"
import {pokemons} from "../assets/pokemon.json"
import { api } from "../services/api"
import './Home.css'

export const Home = () => {

  async function getPokemonData() {
  const {data} = await api.get("pokemon?limit=151&offset=0")
  console.log("dados:",data.results)}

  useEffect(() => {
  getPokemonData();
  }, [])



  return (
    <> 
    <NavBar/>
    <h1 className="title">Encontre todos os pokémons em um só lugar</h1>
    <div className="list">
    {pokemons.map((pokemon, index)=> (
    <CardDetails  
    key={index}
    pokemonNumber={pokemon.id}
    name={pokemon.name}
    types={pokemon.types}
    />))}
    </div>
      
    </>
  )
}

