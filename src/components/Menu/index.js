import React from 'react';
import Logo from '../../assets/icons/logo.png';
import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <ButtonLink href="/" className="ButtonLink" >
                Sobre
            </ButtonLink>

            <ButtonLink href="/" className="ButtonLink" >
                Categorias
            </ButtonLink>

            <a href="/">
                <img className="Logo" src={Logo} alt="Plura logo"></img>
            </a>

            <ButtonLink href="/" className="ButtonLink" >
                Buscar
            </ButtonLink>

            <ButtonLink href="/" className="ButtonLink" >
                Adicionar
            </ButtonLink>
        </nav>
    );
}

export default Menu;
