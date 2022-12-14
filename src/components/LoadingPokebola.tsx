import { ContainerPokebola } from "./LoadingPokebola.style";

type PokebolaProps = {
 message: string;
}

export const LoadingPokebola = (props: PokebolaProps) => {
    return(
        < ContainerPokebola> 
        <img 
         src="http://orig00.deviantart.net/696e/f/2013/019/2/7/pokeball_by_zel_duh-d5s04qj.gif" 
         alt="pokebola"/>
        <p>
        {props.message}
        </p>
        </ContainerPokebola>
        );
};