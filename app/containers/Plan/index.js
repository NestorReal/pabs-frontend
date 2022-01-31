/**
 *
 * Plan
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import TiposPlan from 'components/TiposPlan/';
import FormularioDatos from 'components/FormularioDatos/';
import Pago from 'components/Pago';
import makeSelectPlan from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';

const ContainerFormulario = props => {
  const getStep = step => {
    // eslint-disable-next-line react/prop-types
    props.getStep(step);
  };

  const getTipoPlan = value => {
    // eslint-disable-next-line react/prop-types
    props.getTipoPlan(value);
  };

  const getStepFormulario = step => {
    // eslint-disable-next-line react/prop-types
    props.getStepFormulario(step);
  };

  // eslint-disable-next-line react/prop-types
  switch (props.menu) {
    case 1:
      return (
        <TiposPlan
          getStep={step => getStep(step)}
          getTipoPlan={value => getTipoPlan(value)}
        />
      );
    case 2:
      return (
        <FormularioDatos getStepFormulario={step => getStepFormulario(step)} />
      );
    case 3:
      // eslint-disable-next-line react/prop-types
      return <Pago history={props.history} />;
    default:
      return (
        <TiposPlan
          getStep={step => getStep(step)}
          getTipoPlan={value => getTipoPlan(value)}
        />
      );
  }
};

export function Plan(props) {
  useInjectReducer({ key: 'plan', reducer });
  useInjectSaga({ key: 'plan', saga });
  const [menu, setMenu] = useState(1);
  const user = '[Nombre del cliente]';
  return (
    <Container>
      {menu === 3 ? null : <div className="portada" />}
      <div
        style={menu === 3 ? { left: '0px', width: '100%' } : null}
        className="containerPlan"
      >
        <div className="titulo">
          {/* eslint-disable-next-line no-nested-ternary */}
          {menu === 1 ? (
            'Selecciona tu plan'
          ) : menu === 2 ? (
            'Coloca tus datos'
          ) : (
            <div>
              Bienvenido <b>{user}</b>
            </div>
          )}
        </div>
        <div className="containerSteppers">
          <div className="steppers">
            <div
              className="circle"
              style={menu === 1 ? { background: '#00539C' } : null}
            >
              1
            </div>
            <div className="line" />
            <div
              className="circle"
              style={menu === 2 ? { background: '#00539C' } : null}
            >
              2
            </div>
            <div className="line" />
            <div
              className="circle"
              style={menu === 3 ? { background: '#00539C' } : null}
            >
              3
            </div>
          </div>
        </div>
        <div className="containerSteppers" style={{ width: '97%' }}>
          <div
            className="steppers"
            style={{ width: '686px', marginTop: '10px' }}
          >
            <div>Tipos de plan</div>
            <div style={{ marginLeft: '-28px' }}>Datos</div>
            <div>Pagar</div>
          </div>
        </div>
        <div>
          <div className="containerFormulario">
            <ContainerFormulario
              menu={menu}
              getStep={step => setMenu(step)}
              // eslint-disable-next-line no-console
              getTipoPlan={value => console.log(value)}
              getStepFormulario={step => setMenu(step)}
              // eslint-disable-next-line react/prop-types
              history={props.history}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

Plan.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  plan: makeSelectPlan(),
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

export default compose(withConnect)(Plan);
