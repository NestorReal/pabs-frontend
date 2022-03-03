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
  onClickPaypal,
  onClickNetPay,
  getDataPayer,
  dataPaye,
  dataPlan,
}) {
  // eslint-disable-next-line no-redeclare
  /* const getStep = step => {
    getStep(step);
  };

  // eslint-disable-next-line no-redeclare
  const getTipoPlan = value => {
    getTipoPlan(value);
  };

  // eslint-disable-next-line no-redeclare
  const getDataPayer = data => {
    getDataPayer(data);
  }; */

  switch (menu) {
    case 1:
      return (
        <TiposPlan
          getStep={step => getStep(step)}
          getTipoPlan={value => getTipoPlan(value)}
          top
          dataPlans={dataPlan}
        />
      );
    case 2:
      return <FormularioDatos getData={data => getDataPayer(data)} />;
    case 3:
      return (
        <Pago
          onClickPaypal={onClickPaypal}
          onClickNetPay={onClickNetPay}
          dataPlan={dataPlan}
          dataPaye={dataPaye}
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
  getTipoPlan: PropTypes.func,
  onClickPaypal: PropTypes.func,
  onClickNetPay: PropTypes.func,
  getDataPayer: PropTypes.func,
  dataPaye: PropTypes.object,
  dataPlan: PropTypes.object,
};

export default OptionsPlan;
