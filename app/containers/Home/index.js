/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Home
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';
import Table from '../../components/components/Table';
import logo from '../../images/logo.jpg';
import { getUserAction, getReportAction } from './actions';

export function Home(props) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  useEffect(() => {
    props.dispatch(getUserAction());
    props.dispatch(getReportAction());
  }, []);

  const header = [
    'Número de contrato',
    'metodo de pago',
    'Fecha de compra',
    'Monto total',
  ];

  const key = ['_id', 'payment_method', 'payment_date', 'amount'];

  console.log(props.home);
  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <div className="title">
        <h1>
          {/* eslint-disable-next-line react/prop-types */}
          BIENVENIDO <b>{props.home.user.full_name}</b>
        </h1>
      </div>
      <div className="paper">
        <div className="titulo1">
          <h5>Información personal</h5>
        </div>
        <br />
        <div className="text">
          <label htmlFor="text">
            <b>NOMBRE DEL TITULAR: </b>
            {/* eslint-disable-next-line react/prop-types */}
            {props.home.user.full_name}
          </label>
        </div>
        <div className="text">
          <label htmlFor="text">
            <b>SU NÚMERO DE CONTRATO ES: </b>
            {/* eslint-disable-next-line no-underscore-dangle */}
            {props.home.user._id}
          </label>
        </div>
        <div className="text">
          <label htmlFor="text">
            <b>NÚMERO TELEFONICO: </b>
            {/* eslint-disable-next-line react/prop-types */}
            {props.home.user.phone_number}
          </label>
        </div>
      </div>
      <div
        className="paper"
        style={{ boxShadow: 'none', paddingLeft: '0px', paddingRight: '0px' }}
      >
        {/* eslint-disable-next-line react/prop-types */}
        <Table tHeader={header} keyData={key} data={props.home.report} />
      </div>
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
