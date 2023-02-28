import {PokemonTypes} from "../utils/BackgroundByTypes";


export type PokemonType = { 
    name: PokemonTypes |  "All" ;
    url?:string;
}
export type pokemonsApiAll = { 
    name: string;
    url?:string;
}