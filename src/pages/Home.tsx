import { useEffect, useState } from "react"
import {CardPokemon, CardProps} from "../components/CardPokemon"
import {NavBar} from "../components/NavBar"
import { api } from "../services/api"
import { LoadingPokebola } from "../components/LoadingPokebola"
import {List, Title, Input, SearchContainer} from './Home.style'

export const Home = () => {

  const [ isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState <CardProps[]>([]);
  const [searchText, setSearchText] = useState('')

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
    <NavBar />
    <Title>Encontre todos os pokémons em um só lugar</Title>
    <SearchContainer>
    <Input type="text" 
    placeholder="Buscar por NOME" 
    value={searchText} 
    onChange={(e) => setSearchText(e.target.value)} />
    </SearchContainer>
    <List>
    {pokemonList
    .filter((pokemon) => pokemon.name.includes(searchText) || String(pokemon.id) == searchText)
    .map((pokemon, index)=> (
    <CardPokemon  
    key={index}
    id={pokemon.id}
    name={pokemon.name}
    types={pokemon.types}
    />))}
    </List>
    </>
  )
}

