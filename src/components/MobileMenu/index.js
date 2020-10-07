import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import './styles.css';

function MobileMenu() {
  const history = useHistory();

  const handleNavigation = (e, to) => {
    e.preventDefault();

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('show-mobile-menu');

    history.push(to);
  }

  const closeMenu = (e) => {
    e.preventDefault();

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('show-mobile-menu');
  }

  return (
    <nav className="mobile-menu">
      <a className="close" href="# " onClick={e => closeMenu(e)}>
        <FaTimes />
      </a>

      <a href="# " onClick={e => handleNavigation(e, "/historia")}>História</a>
      <a href="# " onClick={e => handleNavigation(e, "/galeria")}>Galeria</a>
      <a href="# " onClick={e => handleNavigation(e, "/profissionais")}>Profissionais</a>
      <a href="# " onClick={e => handleNavigation(e, "/agendamento")}>Agendamento</a>
      <a href="# " onClick={e => handleNavigation(e, "/endereco")}>Endereço</a>
      <a href="# " onClick={e => handleNavigation(e, "/contato")}>Contato</a>
    </nav>
  );
}

export default MobileMenu;