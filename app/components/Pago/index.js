/**
 *
 * Pago
 *
 */

import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import paypal from '../../images/paypal.png';
import zelle from '../../images/zelle.png';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';

function Pago() {
  const modal = useRef(null);
  /* const hidden = () => {
    modal.current.style.display = 'none';
  }; */
  return (
    <Container>
      <div ref={modal} className="containerModal" style={{ display: 'none' }}>
        <div className="modal">
          <div className="texModal">PAGO EXITOSO</div>
          <div className="center">
            <div className="textInfo">
              Le recordamos que el contrato ha sido enviado a su correo
            </div>
          </div>
          <div className="texTansaccion">No. transacción</div>
        </div>
      </div>
      <div className="referencia">
        <p>Nombre del representante de pago</p>
        <br />
        <p>Nombre del titular</p>
        <p>Ciudad ejemplo</p>
        <p>Dirección ejemplo</p>
        <div className="containerButton">
          <button className="primary" type="button">
            Ingresar
          </button>
        </div>
      </div>
      <div className="containerPlan">
        <div className="containerCodigo">
          <div>Ingresa código de descuento:</div>
          <div>
            <input type="text" placeholder="Ej.1234567890" />
            <button className="primary" type="button">
              Ingresar
            </button>
          </div>
        </div>
        <div className="titlePlan">Nombre del plan</div>
        <table>
          <tr>
            <td>
              Monto total
              <div style={{ height: '10px', width: '1px' }} />
            </td>
            <th>
              $ 0.00 USD
              <div style={{ height: '10px', width: '1px' }} />
            </th>
          </tr>
        </table>
        <div className="containerMetodo">
          <div>Elige método de pago</div>
          <button
            type="button"
            className="paypal"
            onClick={() => {
              modal.current.style.display = 'flex';
            }}
          >
            <img src={paypal} width="128px" height="38.23px" alt="paypal" />
          </button>
          <button
            type="button"
            className="zelle"
            onClick={() => {
              modal.current.style.display = 'flex';
            }}
          >
            <img src={zelle} width="128px" height="38.23px" alt="zelle" />
          </button>
        </div>
      </div>
    </Container>
  );
}

Pago.propTypes = {};

export default Pago;
