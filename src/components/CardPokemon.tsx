import {Link} from "react-router-dom"
import {Badge} from "./Badge"
import './CardPokemon.css'

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
<div className= {`card type--${props.types[0].type.name.toLocaleLowerCase()}`}>
<div className="info">
<span className="info__number">#{props.id.toString().padStart(3, "0")}</span>
<p className="info__name">{props.name}</p>
{props.types.map((item, index) => {
  return <Badge key={index} name={item.type.name}/>
})}
<div className="infoType"></div>
</div>
<img className="card__img" 
src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
alt={props.name} />
</div>
</Link>
  );
}

