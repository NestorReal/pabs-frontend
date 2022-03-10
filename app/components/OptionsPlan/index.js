/**
 *
 * OptionsPlan
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TiposPlan from '../TiposPlan';
import FormularioDatos from '../FormularioDatos';
import Pago from '../Pago';

function OptionsPlan({
  menu,
  getStep,
  getTipoPlan,
  getDataPayer,
  dataPaye,
  dataPlans,
  dataPlan,
  createUser,
}) {
  switch (menu) {
    case 1:
      return (
        <TiposPlan
          getStep={step => getStep(step)}
          getTipoPlan={value => getTipoPlan(value)}
          top
          dataPlans={dataPlans}
        />
      );
    case 2:
      return (
        <FormularioDatos
          getData={data => getDataPayer(data)}
          createUser={valueUser => createUser(valueUser)}
        />
      );
    case 3:
      return <Pago dataPlan={dataPlan} dataPaye={dataPaye} />;
    default:
      return (
        <TiposPlan
          getStep={step => getStep(step)}
          getTipoPlan={value => getTipoPlan(value)}
        />
      );
  }
}

OptionsPlan.propTypes = {
  menu: PropTypes.number,
  getStep: PropTypes.func,
  getTipoPlan: PropTypes.func,
  getDataPayer: PropTypes.func,
  dataPaye: PropTypes.object,
  dataPlans: PropTypes.object,
  dataPlan: PropTypes.object,
  createUser: PropTypes.func,
};

export default OptionsPlan;
