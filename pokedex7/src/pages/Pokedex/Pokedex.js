import React from "react";
import { Link } from 'react-router-dom'

export const Pokedex = () => {
    return (
        <div>
            <Link to={'/'}>
                <button>Voltar</button>
            </Link>
            <p>Aqui vao aparecer os pokemons do usuario</p>
        </div>
    )
}
