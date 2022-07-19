import React from "react";
import { Link } from 'react-router-dom'

export const DetailList = () => {
    return (
        <div>
            <Link to={'/'}>
                <button>Voltar</button>
            </Link>
            <p>Aqui vao aparecer os detalhes de pokemon em questao</p>
        </div>
    )
}
