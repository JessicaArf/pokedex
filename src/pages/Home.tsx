import {CardDetails} from "../components/CardDetails"
import {NavBar} from "../components/NavBar"
import {pokemons} from "../assets/pokemon.json"
import './Home.css'

const Home = () => {
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

export default Home