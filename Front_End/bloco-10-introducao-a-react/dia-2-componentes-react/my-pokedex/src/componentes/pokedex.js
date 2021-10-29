import react from "react";
import Pokemon from "./pokemon";

class Pokedex extends react.Component{
    render(){
        const { pokemons } = this.props; // todos os dados de pokemom vao ter props
        
        return(
            <div>
                {pokemons.map((pokemon) => 
                    < Pokemon key={Pokemon.id} pokemon = {pokemon} />
                )}
            </div>
        )
    }
}

export default Pokedex;