import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './styles.css';
import Logomarca from '../../svgs/Logomarca'
import MobileMenu from '../MobileMenu';

function Header() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const resizeHandle = () => {
      if (window.innerWidth < 992) {
        if (!mobile) {
          setMobile(true);
        }
      } else {
        if (mobile) {
          setMobile(false);
        }
      }
    }

    resizeHandle();
    window.addEventListener('resize', resizeHandle);
  }, [mobile]);

  return mobile ? <Mobile /> : <Desktop />;
}

function Mobile() {
  const toggleMenu = (e) => {
    e.preventDefault();

    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('show-mobile-menu')
  }

  return (
    <header className="mobile">
      <a className="logomarca" href="# ">
        <Logomarca />
      </a>

      <a className="toggle" href="# " onClick={e => toggleMenu(e)}>
        <FaBars />
      </a>

      <MobileMenu />
    </header>
  )
}

function Desktop() {
  return (
    <header className="desktop">
      <nav>
        <Link to="/historia">História</Link>
        <Link to="/galeria">Galeria</Link>
        <Link to="/profissionais">Profissionais</Link>
      </nav>

      <Link to="/" className="logomarca" >
        <Logomarca />
      </Link>

      <nav>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/endereco">Endereço</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

export default Header;