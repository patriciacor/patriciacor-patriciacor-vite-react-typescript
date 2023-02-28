import { createContext ,useEffect,useState} from "react";
import { PokemonType,pokemonsApiAll } from "../interface/types";
import axios from "axios";
interface ContextParams{
  types:PokemonType[],
  filterSelected:PokemonType,
  pokeSelected: string[] | null,
  changeTypeSelected: (type: PokemonType)=>void

}


export const PokeContext = createContext({})
function PokeProvider({ children }:any ) {
  let pokemonsApi = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  const defaultPokemons = {
    name:"All",
    url:pokemonsApi,
  }
  const[pokemons,setPokemons]=useState(null)
  const[pokemonsFiltered,setPokemonsFiltered]=useState(null)
  const[types,setTypes]=useState([defaultPokemons]);
  const[filter,setFilter]=useState(defaultPokemons)
  
  const changeTypeSelected = async(type : PokemonType)=>{
  setFilter(type);

  const {data} = await axios.get(type?url);
  let pokemon = data?.type?.map((poke : pokemonsApiAll)=> poke?.url);
  setPokemons(pokemon);
  setPokemonsFiltered(pokemon)
  }
  const getPokemons = async ()=>{
    const {data} = await axios.get(pokemonsApi);
    let pokemon = data?.results?.map((poke : pokemonsApiAll)=> poke?.url);
    setPokemons(pokemon);
    setPokemonsFiltered(pokemon)
  }
  const getTypePokemons = async()=>{
    const {data}= await axios.get('https://pokeapi.co/api/v2/type')
    setTypes([...types,...data.results])
  }
 useEffect(() => {
  getTypePokemons()
  getPokemons()
 }, [])
 
  return (
    <PokeContext.Provider value={{types,filter,pokemonsFiltered,changeTypeSelected() {
        
    },}}>
      {children}
    </PokeContext.Provider>
  );
}
 export default PokeProvider;