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

function Pago({ onClickPaypal, onClickNetPay, dataPlan, dataPaye }) {
  return (
    <Container>
      <div className="spaceBetween">
        <div className="referencia">
          <label>
            {dataPaye.name} {dataPaye.father_lastname}{' '}
            {dataPaye.mothers_lastname}
          </label>
          <br />
          <br />
          <br />
          <label>
            Titular {dataPaye.name} {dataPaye.father_lastname}{' '}
            {dataPaye.mothers_lastname}
          </label>
          <br />
          <br />
          <label>Ciudad {dataPaye.city}</label>
          <br />
          <br />
          <label>
            Calle {dataPaye.street} #{dataPaye.ext_number}
            {' Col.'}
            {dataPaye.neighborhood}
          </label>
          <div className="containerButton">
            <Button variant="primary" size="medium">
              Ingresar
            </Button>
          </div>
        </div>
        <div className="containerPlans">
          <div className="containerCodigo">
            <label htmlFor="codigo">Ingresa código de descuento:</label>
            <div className="spaceBetween" style={{ width: '100%' }}>
              <input id="codigo" type="text" placeholder="Ej.1234567890" />
              <Button variant="primary" size="medium">
                Ingresar
              </Button>
            </div>
          </div>
          <div className="titlePlan">
            <h5>{dataPlan.name}</h5>
          </div>
          <div className="spaceBetween monto">
            <div>
              <td>Monto total a pagar</td>
            </div>
            <div>
              <th>
                <b>{dataPlan.amount}</b>
              </th>
            </div>
          </div>
          <h5>Elige método de pago</h5>
          <div className="spaceBetween buttons">
            <Button variant="secondary" onClick={onClickPaypal}>
              <img src={paypal} alt="paypal" />
            </Button>
            <Button variant="secondary" onClick={onClickNetPay}>
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
  dataPlan: PropTypes.object,
  dataPaye: PropTypes.object,
};

export default Pago;
