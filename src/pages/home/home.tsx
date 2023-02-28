import { Fragment } from "react"
import { PokeballSmall } from "../../assets/pokeball"
import './home.css'
export const Home = () => {
  return (
    <Fragment>
      <div  className="home" >
    <header>
        <div className="icon">
            <PokeballSmall/>
            <span>Pokédex</span>

        </div>
    </header>
    </div> 
   </Fragment>
  )
}

