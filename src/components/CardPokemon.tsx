import {Link} from "react-router-dom"
import {Badge} from "./Badge"
import * as S from "./CardPokemon.style";


type pokemonTypeProps = {
  type: {
    name: string;
  }
}

export type CardProps = {
  id: number;
  name: string;
  types: Array<pokemonTypeProps>
}

export const CardPokemon = (props: CardProps) => {
  return (
<Link to={`/details/${props.id}`}>
<S.Card className= {`card type--${props.types[0].type.name.toLocaleLowerCase()}`}>
<div>
<S.Number >#{props.id.toString().padStart(3, "0")}</S.Number>
<S.Title >{props.name}</S.Title>

{props.types.map((item, index) => {
  return <Badge key={index} name={item.type.name}/>
})}
</div>
<S.Image  
src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
alt={props.name} />
</S.Card>
</Link>
  );
}

