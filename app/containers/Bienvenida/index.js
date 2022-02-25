/**
 *
 * Bienvenida
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectBienvenida from './selectors';
import reducer from './reducer';
import saga from './saga';
import logo from '../../images/logo.jpg';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';
import Button from '../../components/components/Button';

export function Bienvenida(props) {
  useInjectReducer({ key: 'bienvenida', reducer });
  useInjectSaga({ key: 'bienvenida', saga });

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
          <label htmlFor="text">SU NÚMERO DE CONTRATO ES: </label>
        </div>
        <div className="text">
          <label htmlFor="text">NOMBRE DEL TITULAR:</label>
        </div>
        <div className="text">
          <label htmlFor="text">NOMBRE DEL PLAN:</label>
        </div>
        <div className="text">
          <label htmlFor="text">COSTO DEL PLAN:</label>
        </div>
        <div className="text">
          <label htmlFor="text">FECHA DE COMPRA:</label>
        </div>
      </div>
      <div className="paper">
        <div className="titulo2">
          <h2>
            CUANDO NOS NECESITE… <br /> SIEMPRE ESTAREMOS PARA SERVIRLE.
          </h2>
        </div>
        <div style={{ textAlign: 'center', marginBottom: '0.6%' }}>
          <label htmlFor="text">
            ESTAREMOS PENDIENTES PARA USTED LOS 365 DÍAS DEL AÑO, LAS 24 HORAS
            DÍA.
          </label>
        </div>
        <div className="center">
          <div className="spaceBetween" style={{ width: '30%' }}>
            <label htmlFor="text">800-47-22767</label>
            <label htmlFor="text">www.pabsmr.org</label>
          </div>
        </div>
        <Button
          type="button"
          variant="primary"
          // eslint-disable-next-line react/prop-types
          onClick={() => props.history.push('/auth')}
        >
          Ir a inicio
        </Button>
      </div>
      <div className="footer" />
    </Container>
  );
}

Bienvenida.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bienvenida: makeSelectBienvenida(),
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

export default compose(withConnect)(Bienvenida);
