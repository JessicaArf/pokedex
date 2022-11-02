import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StoreState } from "../redux";
import { add, remove } from "../redux/favoriteSlice";
import {NavBar} from "../components/NavBar";
import {Badge} from "../components/Badge";
import { CardProps } from "../components/CardPokemon";
import { LoadingPokebola } from "../components/LoadingPokebola";
import {api} from "../services/api";
import * as S from "./Details.style";


type DetailsProps = CardProps & {
  height: number;
  weight: number
}


export function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listPokemonsFavorites = useSelector(
    (state: StoreState) => state.favorite
  );
  
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<DetailsProps>(
    {} as DetailsProps
  );

  function handleClickAdd() {
    dispatch(add(id));
  }

  function handleClickRemove() {
    dispatch(remove(id));
  }

  async function getPokemonData() {
    const { data } = await api.get("pokemon/" + id);
    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
      height: data.height/10,
      weight: data.weight/10,
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
            return <Badge key={index} name={item.type.name} />
          })}

          <S.Label>Peso</S.Label>
          <S.Value>{pokemonData.weight}kg</S.Value>
          <S.Label>Tamanho</S.Label>
          <S.Value>{pokemonData.height}m</S.Value>

          {!!listPokemonsFavorites.find(
            (item) => String(item) === String(id)
          ) ? (
            <S.Button className="button" onClick={handleClickRemove}>
              Remover dos favoritos
            </S.Button>
          ) : (
            <S.Button className="button" onClick={handleClickAdd}>
              Adicionar aos favoritos
            </S.Button>
          )}
        </S.Card>
      </S.Container>
    </>
  );
}


