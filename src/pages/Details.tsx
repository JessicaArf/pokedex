import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import {NavBar} from "../components/NavBar";
import { api } from "../services/api"
import { CardDetails, CardDetailsProps } from "../components/CardDetails";
import { LoadingPokebola } from "../components/LoadingPokebola";


const Details = () => {

  const {id} = useParams();

  const [ isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState <CardDetailsProps[]>([]);;

  async function getPokemonData() {
  const {data} = await api.get("pokemon?limit=1")

  const dataComplete = await Promise.all(
    data.results.map(async ( result: {url: string}) => {
      const { data }= await api.get(result.url);

      return {
        id: data.id,
        name: data.name,
        types: data.types,
        weight: data.weight,
        heigth: data.height
      };
    })  )
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
   <NavBar hasGoBack={true}/>
    {pokemonList.map((pokemon, index) => (
     <CardDetails
     key={index}
     id={pokemon.id}
     name={pokemon.name}
     types={pokemon.types}
     weigth={pokemon.weigth}
     height={pokemon.height}
     />
     ))}
   

  </>
  )
};

export default Details;