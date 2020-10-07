import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

import Header from '../../components/Header';

import './styles.css';

function Home() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const resizeHandle = () => {
      setScreenWidth(window.innerWidth);
    }

    resizeHandle();
    window.addEventListener('resize', resizeHandle);
  }, []);

  return (
    <main className="banner">
      <Header />
      <div className="lead">
        <h2>O senhor é meu pastor e nada me faltará</h2>
        <h1>BARBEARIA BELCHIOR</h1>
        <p>Fundada em 1953 trazendo sempre um serviço de qualidade aos nossos clientes</p>
        <Link className="button" to="/agendamento">Agende um horário</Link>
      </div>
      <table>
        <tbody>

          {
            screenWidth < 768
              ? (
                <>
                  <tr>
                    <td className="full">
                      <FaMapMarkerAlt /><br />
                      R. Joana de Menezes Faro
                    </td>
                  </tr>
                  <tr>
                    <td className="full">
                      <FaPhone /><br />
                      +13 9 9123-4567
                    </td>
                  </tr>
                  <tr>
                    <td className="full">
                      <FaRegClock /><br />
                      Terça - Sábado: 9:00 às 18:00<br />
                      Domingo: 9:00 às 12:00
                    </td>
                  </tr>
                </>
              )
              : (
                <tr>
                  <td>
                    <FaMapMarkerAlt /><br />
                    R. Joana de Menezes Faro
                  </td>
                  <td>
                    <FaPhone /><br />
                    +13 9 9123-4567
                  </td>
                  <td>
                    <FaRegClock /><br />
                    Terça - Sábado: 9:00 às 18:00<br />
                    Domingo: 9:00 às 12:00
                  </td>
                </tr>
              )
          }

        </tbody>
      </table>

      <Footer />
    </main>
  );
}

export default Home;