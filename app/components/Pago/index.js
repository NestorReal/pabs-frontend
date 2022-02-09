/**
 *
 * Pago
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import paypal from '../../images/paypal.png';
import zelle from '../../images/zelle.png';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';
import Button from '../components/Button';

function Pago({ onClickPaypal, onClickNetPay }) {
  return (
    <Container>
      <div className="spaceBetween">
        <div className="referencia">
          <label htmlFor="NombreRepresentante">
            Nombre del representante de pago
          </label>
          <br />
          <br />
          <br />
          <label htmlFor="NombreTitular">Nombre del titular</label>
          <br />
          <br />
          <label htmlFor="Ciudad">Ciudad ejemplo</label>
          <br />
          <br />
          <label htmlFor="Direccion">Dirección ejemplo</label>
          <div className="containerButton">
            <Button primary>Ingresar</Button>
          </div>
        </div>
        <div className="containerPlans">
          <div className="containerCodigo">
            <label htmlFor="codigo">Ingresa código de descuento:</label>
            <div className="spaceBetween" style={{ width: '100%' }}>
              <input id="codigo" type="text" placeholder="Ej.1234567890" />
              <Button primary>Ingresar</Button>
            </div>
          </div>
          <div className="titlePlan">
            <h5>Nombre del plan</h5>
          </div>
          <div className="spaceBetween monto">
            <div>
              <td>Monto total</td>
            </div>
            <div>
              <th>
                <b>$ 0.00 USD</b>
              </th>
            </div>
          </div>
          <h5>Elige método de pago</h5>
          <div className="spaceBetween buttons">
            <Button onClick={onClickPaypal}>
              <img src={paypal} alt="paypal" />
            </Button>
            <Button onClick={onClickNetPay}>
              <img src={zelle} alt="zelle" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

Pago.propTypes = {
  onClickPaypal: PropTypes.func,
  onClickNetPay: PropTypes.func,
};

export default Pago;
