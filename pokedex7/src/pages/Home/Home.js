import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
`

export const Home = () => {
    return (
        <div>
            <AppContainer>
                <h2>Logo pokemon</h2>
                <Link to={'/pokedex'}>
                    <button>Pokedex</button>
                </Link>            
            </AppContainer>
                <p>Card dos Pokemons</p>
                <Link to={'/detail'}>
                    <button>Detalhes</button>
                </Link>            
        </div>
    )
}
