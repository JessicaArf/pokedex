import { Badge } from "./Badge";
import "./CardDetails.css"

type pokemonTypeProps = {
    type: {
      name: string;
    }
  }

export type CardDetailsProps = {
    id: number;
    name: string;
    weigth: number;
    height: number;
    types: Array<pokemonTypeProps>
  }

export const CardDetails = (props: CardDetailsProps) => {
return(
    <div className="containerCard">
      <img className="imgPokemon" 
       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
        alt={props.name} />
       <div className= {`card type--${props.types[0].type.name.toLocaleLowerCase()} details`}>
         <span className="infoDetails__number">#{props.id.toString().padStart(3, "0")}</span>
           <p className="infoDetails__name">{props.name}</p>
           {props.types.map((item, index) => {
            return <Badge key={index} name={item.type.name}/>
             })}
                <div className="info__weight">
                   <h3>Peso</h3>
                   <span>{props.weigth}</span>
                </div>
            <div className="info__height">
                 <h3>Altura</h3>
                 <span>{props.height}</span>
            </div>
      </div>
    </div>
   
)
}