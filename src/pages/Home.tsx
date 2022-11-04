import { useEffect, useState } from "react"
import {CardPokemon, CardProps} from "../components/CardPokemon"
import {NavBar} from "../components/NavBar"
import { api } from "../services/api"
import { LoadingPokebola } from "../components/LoadingPokebola"
import * as S from './Home.style'
import { Title } from "../components/Title"

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
    <Title text="Encontre todos os pokémons em um só lugar"/>
    <S.SearchContainer>
    <S.Input type="text" 
    placeholder="Buscar por NOME" 
    value={searchText} 
    onChange={(e) => setSearchText(e.target.value)} />
    </S.SearchContainer>
    <S.List>
    {pokemonList
    .filter((pokemon) => pokemon.name.includes(searchText.toLocaleLowerCase()) || String(pokemon.id) == searchText)
    .map((pokemon, index)=> (
    <CardPokemon  
    key={index}
    id={pokemon.id}
    name={pokemon.name}
    types={pokemon.types}
    />))}
    </S.List>
    </>
  )
}

