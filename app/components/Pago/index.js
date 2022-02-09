/**
 *
 * Pago
 *
 */

import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import paypal from '../../images/paypal.png';
import zelle from '../../images/zelle.png';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';
import Button from '../components/Button';

function Pago(props) {
  const modal = useRef(null);
  const show = () => {
    modal.current.style.display = 'flex';
    // eslint-disable-next-line func-names
    setTimeout(function() {
      // eslint-disable-next-line react/prop-types
      props.history.push('/b');
    }, 3000);
  };

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
            <Button onClick={show}>
              <img src={paypal} width="128px" height="38.23px" alt="paypal" />
            </Button>
            <Button onClick={show}>
              <img src={zelle} width="128px" height="38.23px" alt="zelle" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

Pago.propTypes = {};

export default Pago;
