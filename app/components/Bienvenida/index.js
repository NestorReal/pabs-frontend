/**
 *
 * Bienvenida
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Button from '../components/Button';
import logo from '../../images/logo.jpg';

function Bienvenida({ dataPlan, dataPaye }) {
  const titular = `${dataPaye.name} ${dataPaye.father_lastname} ${
    dataPaye.mothers_lastname
  }`;

  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <div className="title">
        <h1>BIENVENIDO AL PROGRAMA DE APOYO DE BENEFICIO SOCIAL</h1>
      </div>
      <div className="paper">
        <div className="titulo1">
          <h5>
            Le recordamos que el contrato digital ha sido enviado a su correo
            exitosamente
          </h5>
        </div>
        <div className="text">
          <label htmlFor="text">
            <b>NOMBRE DEL TITULAR: </b>
            {titular}
          </label>
        </div>
        <div className="text">
          <label htmlFor="text">
            <b>NOMBRE DEL PLAN: </b>
            {dataPlan.name}
          </label>
        </div>
        <div className="text">
          <label htmlFor="text">
            <b>COSTO DEL PLAN: </b>
            {dataPlan.amount}
          </label>
        </div>
      </div>
      <div className="paper paper-contacto">
        <div className="titulo2">
          <h2>
            CUANDO NOS NECESITE… <br /> SIEMPRE ESTAREMOS PARA SERVIRLE.
          </h2>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '0.6%' }}>
          <label htmlFor="text">
            <b>
              ESTAREMOS PENDIENTES PARA USTED LOS 365 DÍAS DEL AÑO, LAS 24 HORAS
              DÍA.
            </b>
          </label>
        </div>
        <div className="center contact-info" style={{ gap: '5%' }}>
          <label htmlFor="text">
            <b>800-47-22767</b>
          </label>
          <label htmlFor="text">
            <b>www.pabsmr.org</b>
          </label>
        </div>
        <Button
          size="medium"
          type="button"
          variant="primary"
          // eslint-disable-next-line react/prop-types
          // onClick={() => props.history.push('/auth')}
        >
          Ir a inicio
        </Button>
      </div>
      <div className="footer" />
    </Container>
  );
}

Bienvenida.propTypes = {
  dataPlan: PropTypes.object,
  dataPaye: PropTypes.object,
};

export default Bienvenida;
