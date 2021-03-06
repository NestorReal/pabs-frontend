/**
 *
 * Pago
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import auth from 'utils/auth';
// import { addSuccessMessage } from 'containers/Notifications/actions';
import Notifications from 'containers/Notifications';
import NewWindow from 'react-new-window';
import paypal from '../../images/paypal.png';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';
import Button from '../components/Button';

function Pago({ dataPlan, dataPaye, getStep, back, dataUser }, props) {
  const [dataUrl, setDataUrl] = useState({});
  const titular = `${dataPaye.name} ${dataPaye.father_lastname} ${
    dataPaye.mothers_lastname
  }`;
  const getUrl = () => {
    fetch(
      `https://api.hispanocash.com/payments/paypal/?currency_code=${'MXN'}&value=${
        dataPlan.amount
      }&reference_id=${dataUser.phone_number}&soft_descriptor=${
        dataPlan.name
      }&user_email=${dataUser.email}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.getToken()}`,
        },
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(success => {
        setDataUrl(success);
      })
      .catch(error => console.log(error));
  };

  let component = null;
  if (dataUrl.approve_link) {
    component = (
      <NewWindow
        url={dataUrl.approve_link.href}
        onUnload={() => getStep(4)}
        closeOnUnmount
      />
    );
  }
  return (
    <Container>
      <Notifications />
      <div className="res">
        <Notifications />
        <div className="referencia">
          <label className="representante-pago">{titular}</label>
          <label>Titular {titular}</label>
          <label>Ciudad {dataPaye.city}</label>
          <label>
            Calle {dataPaye.street} #{dataPaye.ext_number}
            {' Col.'}
            {dataPaye.neighborhood}
          </label>
          <div className="containerButton">
            <Button variant="primary" size="medium" onClick={() => back(2)}>
              Atr??s
            </Button>
          </div>
        </div>
        <div className="containerPlans">
          <div className="containerCodigo">
            <label htmlFor="codigo">Ingresa c??digo de descuento:</label>
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
                <b>
                  $
                  {new Intl.NumberFormat('es-MX', {
                    maximumSignificantDigits: 9,
                  }).format(dataPlan.amount)}
                </b>
              </th>
            </div>
          </div>
          {component}
          <h5>Elige m??todo de pago</h5>
          <div className="center buttons">
            <Button variant="secondary" onClick={() => getUrl()}>
              <img src={paypal} alt="paypal" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapDispatchToProps);
Pago.propTypes = {
  // onClickPaypal: PropTypes.func,
  dataPlan: PropTypes.object,
  dataPaye: PropTypes.object,
  getStep: PropTypes.func,
  back: PropTypes.func,
  dispatch: PropTypes.func,
};

export default compose(withConnect)(Pago);
