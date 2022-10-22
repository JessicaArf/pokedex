import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {NavBar} from "../components/NavBar";
import {Badge} from "../components/Badge";
import { CardProps } from "../components/CardPokemon";
import { LoadingPokebola } from "../components/LoadingPokebola";
import {api} from "../services/api";
import * as S from "./Details.style";


function Details() {
  const { id } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<CardProps>(
    {} as CardProps
  );

  async function getPokemonData() {
    const { data } = await api.get("pokemon/" + id);
    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
      return <LoadingPokebola message="Carregando.."/>
  }

  return (
    <>
      <NavBar hasGoBack />

      <S.Container>
        <S.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemonData.name}
        />
        <S.Card
          className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}
        >
          <S.Number>#{String(id).padStart(3, "0")}</S.Number>
          <S.Title>{pokemonData.name}</S.Title>

          {pokemonData.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />;
          })}
        </S.Card>
      </S.Container>
    </>
  );
}

export default Details;
