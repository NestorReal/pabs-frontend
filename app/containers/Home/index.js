/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Home
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import auth from 'utils/auth';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { MdOutlineEmail } from 'react-icons/md';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo2 from '../../images/logo2.svg';
import paypal from '../../images/paypal.png';
import zelle from '../../images/zelle.png';
import { Container } from './styles';

export function Home() {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const modal = useRef(null);
  const hidden = () => {
    modal.current.style.display = 'none';
  };
  console.log(auth);
  return (
    <Container>
      <div ref={modal} className="containerModal" style={{ display: 'none' }}>
        <div className="modal">
          <div className="texModal">MOVIMIENTO EXITOSO</div>
          <div className="containerButtonModal">
            <button
              className="primary"
              type="button"
              style={{ marginRight: '6px' }}
            >
              Otra referencia
            </button>
            <button className="secondary" type="button" onClick={hidden}>
              Salir
            </button>
          </div>
        </div>
      </div>
      <img src={logo2} className="logo" alt="logo" />
      <div className="title">
        Bienvenido <b>Juan</b>
      </div>
      <button type="button" className="sesion" onClick={() => auth.logout()}>
        Cerrar sesión
        <MdOutlineEmail
          style={{ height: '15px', width: '15px', color: '#1E2B31' }}
        />
      </button>
      <div className="referencia">
        <div className="containerInput">
          <label className="label">Número de referencia:</label>
          <div className="input">
            <input type="text" placeholder="Ej.1234567890" />
            <div className="icon">
              <MdOutlineEmail
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
        </div>
        <div className="monto">
          <div className="text">Monto</div>
          <div>
            $<input type="number" /> USD
          </div>
        </div>
        <div className="containerButton">
          <button
            className="primary"
            type="button"
            style={{ marginRight: '6px' }}
          >
            Ingresar
          </button>
          <button
            className="secondary"
            type="button"
            style={{ height: '80px' }}
          >
            Ver estado de cuenta
          </button>
        </div>
      </div>
      <div className="containerPlan">
        <div className="titlePlan">Nombre del plan</div>
        <table>
          <tr>
            <td>
              Número de referencia
              <div style={{ height: '10px', width: '1px' }} />
            </td>
            <th>
              1234567890
              <div style={{ height: '10px', width: '1px' }} />
            </th>
          </tr>
          <tr>
            <td>
              Movimiento
              <div style={{ height: '10px', width: '1px' }} />
            </td>
            <th>
              $ 0.00 USD
              <div style={{ height: '10px', width: '1px' }} />
            </th>
          </tr>
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
          <div>Elige método</div>
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
      <div className="footer" />
    </Container>
  );
}

Home.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Home);
