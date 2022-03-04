/**
 *
 * Plan
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notifications from 'containers/Notifications';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import OptionsPlan from '../../components/OptionsPlan';
import makeSelectPlan from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';
import Portada from '../../components/Portada';
import ContainerForm from '../../components/ContainerForm';
import Steppers from '../../components/Steppers';
import Modal from '../../components/Modal';
import { payersAction, stepAction, planAction, getPlan } from './actions';

export function Plan(props) {
  useInjectReducer({ key: 'plan', reducer });
  useInjectSaga({ key: 'plan', saga });

  useEffect(() => {
    props.dispatch(getPlan());
  }, []);

  const [modal] = useState(false);
  /* const show = () => {
    setModal(true);
    // eslint-disable-next-line func-names
    setTimeout(function() {
      // eslint-disable-next-line react/prop-types
      props.history.push('/bienvenida');
    }, 3000);
  }; */
  return (
    <Container>
      <Notifications />
      <Modal
        display={modal}
        title="PAGO EXITOSO"
        subtitle="No. transacción"
        text="Le recordamos que el contrato ha sido enviado a su correo"
      />
      {props.plan.step < 3 && <Portada />}
      <ContainerForm
        footer={false}
        left={props.plan.step === 3 ? '0px' : '31.641%'}
        width={props.plan.step === 3 ? '100%' : '68.359%'}
      >
        <h1>
          {/* eslint-disable-next-line no-nested-ternary */}
          {props.plan.step === 1 ? (
            'Selecciona tu plan'
          ) : props.plan.step === 2 ? (
            'Coloca tus datos'
          ) : (
            <>
              Bienvenido <b>{props.plan.payers.name}</b>
            </>
          )}
        </h1>
        <Steppers
          top={props.plan.step > 1 ? '15.139%' : '17.917%'}
          option={props.plan.step}
        />
        <div className="containerFormulario">
          <OptionsPlan
            menu={props.plan.step}
            getStep={step => props.dispatch(stepAction(step))}
            getTipoPlan={value => props.dispatch(planAction(value))}
            getDataPayer={data => props.dispatch(payersAction(data))}
            dataPaye={props.plan.payers}
            dataPlans={props.plan.plans}
            dataPlan={props.plan.plan}
          />
        </div>
      </ContainerForm>
    </Container>
  );
}

Plan.propTypes = {
  dispatch: PropTypes.func.isRequired,
  plan: PropTypes.object,
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
