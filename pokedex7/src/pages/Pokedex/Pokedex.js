import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Header/Header";
// import {pokeCard} from "../../Components/PokeCard/pokeCard";
// import { goToDetailPage } from "../../Routes/Coordinator";

export const Pokedex = () => {
    return (
        <div>
            <Header/>
            <Link to={'/'}>
                <button>Voltar</button>
            </Link>
            <p>Aqui vao aparecer os pokemons do usuario</p>
        </div>
    )
}
