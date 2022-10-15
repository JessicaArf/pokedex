import {Link} from "react-router-dom"
import {Badge} from "./Badge"
import './CardDetails.css'

type pokemonTypeProps = {
  type: {
    name: string;
  }
}

type CardProps = {
  pokemonNumber: number;
  name: string;
  types: Array<pokemonTypeProps>

}

export const CardDetails = (props: CardProps) => {
  return (
<Link to={`/details/${props.pokemonNumber}`}>
<div className= {`card type--${props.types[0].type.name.toLocaleLowerCase()}`}>
<div className="info">
<span className="info__number">#{props.pokemonNumber.toString().padStart(3, "0")}</span>
<p className="info__name">{props.name}</p>
{props.types.map((item, index) => {
  return <Badge key={index} name={item.type.name}/>
})}
<div className="infoType"></div>
</div>
<img className="card__img" 
src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokemonNumber}.png`}
alt={props.name} />
</div>
</Link>
  );
}

