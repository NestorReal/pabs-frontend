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
import Modal from '../../components/Modal';
import { payersAction, stepAction, planAction, getPlan } from './actions';

export function Plan(props) {
  useInjectReducer({ key: 'plan', reducer });
  useInjectSaga({ key: 'plan', saga });

  useEffect(() => {
    props.dispatch(getPlan());
  }, []);
  console.log(props.plan.plans);

  const ContainerFormulario = valueData => {
    const getStep = step => {
      // eslint-disable-next-line react/prop-types
      valueData.getStep(step);
    };

    const getTipoPlan = value => {
      // eslint-disable-next-line react/prop-types
      valueData.getTipoPlan(value);
    };

    const getDataPayer = data => {
      // eslint-disable-next-line react/prop-types
      valueData.getDataPayer(data);
    };

    // eslint-disable-next-line react/prop-types
    switch (valueData.menu) {
      case 1:
        return (
          <TiposPlan
            getStep={step => getStep(step)}
            getTipoPlan={value => getTipoPlan(value)}
            top
            dataPlans={props.plan.plans}
          />
        );
      case 2:
        return <FormularioDatos getData={data => getDataPayer(data)} />;
      case 3:
        return (
          <Pago
            // eslint-disable-next-line react/prop-types
            onClickPaypal={props.onClickPaypal}
            // eslint-disable-next-line react/prop-types
            onClickNetPay={props.onClickNetPay}
            // eslint-disable-next-line react/prop-types
            dataPlan={props.dataPlan}
            // eslint-disable-next-line react/prop-types
            dataPaye={props.dataPaye}
          />
        );
      default:
        return (
          <TiposPlan
            getStep={step => getStep(step)}
            getTipoPlan={value => getTipoPlan(value)}
          />
        );
    }
  };
  const [modal, setModal] = useState(false);
  const show = () => {
    setModal(true);
    // eslint-disable-next-line func-names
    setTimeout(function() {
      // eslint-disable-next-line react/prop-types
      props.history.push('/bienvenida');
    }, 3000);
  };
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
          <ContainerFormulario
            menu={props.plan.step}
            getStep={step => props.dispatch(stepAction(step))}
            // eslint-disable-next-line no-console
            getTipoPlan={value => props.dispatch(planAction(value))}
            // eslint-disable-next-line react/prop-types
            onClickPaypal={show}
            onClickNetPay={show}
            getDataPayer={data => props.dispatch(payersAction(data))}
            dataPaye={props.plan.payers}
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
