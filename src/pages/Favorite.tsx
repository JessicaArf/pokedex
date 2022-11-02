import { CardPokemon, CardProps } from '../components/CardPokemon';
import { NavBar } from '../components/NavBar'
import { Title } from '../components/Title'
import { LoadingPokebola } from '../components/LoadingPokebola';
import { api } from '../services/api';
import { StoreState } from '../redux';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {List} from "../components/List.style"


export function Favorite() {

  const [pokemonList, setPokemonList] = useState<CardProps[]>([])
  const listPokemonsFavorites = useSelector(
    (state: StoreState) => state.favorite
  );
  const [isLoading, setIsLoading] = useState(true);

  async function getPokemonData() {
    
    const dataComplete = await Promise.all(
    listPokemonsFavorites.map(async(pokemonId) => {
      const { data } = await api.get("pokemon/"+pokemonId);

      return{
        id: data.id,
        name: data.name,
        types: data.types      
      }
    }
    ))
    setPokemonList(dataComplete);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    return <LoadingPokebola message="Carregando.."/>
}

  return (
    <>
    <NavBar />
     <Title text= "Seus pokémons favoritos"/>
     <List>
     {pokemonList.map((pokemon, index) => {
      return ( 
        <CardPokemon
        key={index}
        id={pokemon.id}
        name={pokemon.name}
        types={pokemon.types}
        />)
     })}
     </List>
    </>
  )
}
