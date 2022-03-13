/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Home
 *
 */

import React, { useState } from 'react';
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
import { Container, Header, ModalContainer, PagoContainer } from './styles';
import Modal from '../../components/Modal';
import Input from '../../components/components/Input';
import { InputGroup } from '../../components/components/InputGroup';
import Button from '../../components/components/Button';

export function Home() {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const [modal, setModal] = useState(false);
  // const modal = useRef(null);
  const hideModal = () => {
    setModal(false);
  };
  const showModal = () => {
    setModal(true);
  };

  return (
    <Container>
      <ModalContainer>
        <Modal title="MOVIMIENTO EXITOSO" display={modal}>
          <div className="containerButtonModal">
            <Button variant="primary" style={{ marginRight: '6px' }}>
              Otra referencia
            </Button>
            <Button variant="secondary" type="button" onClick={hideModal}>
              Salir
            </Button>
          </div>
        </Modal>
      </ModalContainer>

      <Header>
        <img src={logo2} className="logo" alt="logo" />
        <h1 className="main-title">
          Bienvenido <b>Juan</b>
        </h1>
        <button
          type="button"
          className="sesion label"
          onClick={() => auth.logout()}
        >
          Cerrar sesión
          {/* <MdOutlineEmail
            style={{ height: '15px', width: '15px', color: '#1E2B31' }}
          /> */}
        </button>
      </Header>

      <PagoContainer>
        <div className="res">
          <div className="referencia">
            <InputGroup>
              <div className="containerInput">
                <Input
                  label="Número de referencia:"
                  type="text"
                  placeholder="Ej.1234567890"
                >
                  <MdOutlineEmail style={{ color: '#113255' }} />
                </Input>
              </div>
              <div className="containerInput">
                <Input label="Monto:" type="text" placeholder="$ USD" />
              </div>
            </InputGroup>
            <div className="containerButton">
              <Button
                variant="primary"
                className="label"
                type="button"
                style={{ marginRight: '6px' }}
              >
                Ingresar
              </Button>
              <Button
                variant="secondary"
                className="label"
                type="button"
                // style={{ height: '80px' }}
              >
                Ver estado de cuenta
              </Button>
            </div>
          </div>
          <div className="containerPlan">
            <h2 className="titlePlan">Nombre del plan</h2>
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
              <div className="label">Elige método</div>
              <div className="center buttons">
                <Button
                  // className="paypal"
                  variant="secondary"
                  onClick={() => showModal()}
                >
                  <img
                    src={paypal}
                    // width="128px"
                    // height="38.23px"
                    alt="paypal"
                  />
                </Button>
                {/* <button
                  type="button"
                  className="paypal"
                  onClick={() => {
                    showModal();
                  }}
                /> */}
                <Button
                  // className="paypal"
                  variant="secondary"
                  onClick={() => showModal()}
                >
                  <img src={zelle} alt="zelle" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PagoContainer>
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
