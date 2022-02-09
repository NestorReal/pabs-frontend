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
import Portada from '../../components/Portada';
import ContainerForm from '../../components/ContainerForm';
import Steppers from '../../components/Steppers';

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
          top
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
  const [menu, setMenu] = useState(3);
  const user = '[Nombre del cliente]';
  return (
    <Container>
      {menu < 3 && <Portada />}
      <ContainerForm
        footer={false}
        left={menu === 3 ? '0px' : '31.641%'}
        width={menu === 3 ? '100%' : '68.359%'}
      >
        <h1>
          {/* eslint-disable-next-line no-nested-ternary */}
          {menu === 1 ? (
            'Selecciona tu plan'
          ) : menu === 2 ? (
            'Coloca tus datos'
          ) : (
            <>
              Bienvenido <b>{user}</b>
            </>
          )}
        </h1>
        <Steppers top={menu > 1 ? '15.139%' : '17.917%'} option={menu} />
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
      </ContainerForm>
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
