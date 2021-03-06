/**
 *
 * OptionsPlan
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TiposPlan from '../TiposPlan';
import FormularioDatos from '../FormularioDatos';
import Pago from '../Pago';
import Bienvenida from '../Bienvenida';
function OptionsPlan({
  menu,
  getStep,
  back,
  getTipoPlan,
  getDataPayer,
  dataPaye,
  dataPlans,
  dataPlan,
  createUser,
  toReturn,
}) {
  const [dataUser, setDataUser] = useState({});
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
          createUser={valueUser => {
            createUser(valueUser);
            setDataUser(valueUser);
          }}
          back={step => back(step)}
        />
      );
    case 3:
      return (
        <Pago
          dataPlan={dataPlan}
          dataPaye={dataPaye}
          dataUser={dataUser}
          getStep={step => getStep(step)}
          back={step => back(step)}
        />
      );
    case 4:
      return (
        <Bienvenida
          dataPlan={dataPlan}
          dataPaye={dataPaye}
          toReturns={toReturns => toReturn(toReturns)}
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
}

OptionsPlan.propTypes = {
  menu: PropTypes.number,
  getStep: PropTypes.func,
  back: PropTypes.func,
  getTipoPlan: PropTypes.func,
  getDataPayer: PropTypes.func,
  dataPaye: PropTypes.object,
  dataPlans: PropTypes.object,
  dataPlan: PropTypes.object,
  createUser: PropTypes.func,
  toReturn: PropTypes.func,
};

export default OptionsPlan;
