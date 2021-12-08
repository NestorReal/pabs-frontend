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

export function Bienvenida() {
  useInjectReducer({ key: 'bienvenida', reducer });
  useInjectSaga({ key: 'bienvenida', saga });

  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <div className="title">
        BIENVENIDO AL PROGRAMA DE APOYO DE BENEFICIO SOCIAL
      </div>
      <div className="containerPaper">
        <div className="paper">
          <div className="titulo1">
            Le recordamos que el contrato digital ha sido enviado a su correo
            exitosamente
          </div>
          <div className="text">SU NÚMERO DE CONTRATO ES: </div>
          <div className="text">NOMBRE DEL TITULAR:</div>
          <div className="text">NOMBRE DEL PLAN:</div>
          <div className="text">COSTO DEL PLAN:</div>
          <div className="text">FECHA DE COMPRA:</div>
        </div>
        <div
          className="paper"
          style={{ marginTop: '36px', paddingTop: '15px' }}
        >
          <div className="titulo2">
            CUANDO NOS NECESITE… <br style={{ marginBottom: '8px' }} /> SIEMPRE
            ESTAREMOS PARA SERVIRLE.
          </div>
          <div className="subtitulo">
            ESTAREMOS PENDIENTES PARA USTED LOS 365 DÍAS DEL AÑO, LAS 24 HORAS
            DEL DÍA.
          </div>
          <div className="containerInfo">
            <div style={{ marginRight: '57px' }}>800-47-22767</div>
            <div>www.pabsmr.org</div>
          </div>
          <button className="button" type="button">
            Ir a inicio
          </button>
        </div>
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
