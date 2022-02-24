/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * LoginAdmin
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Notifications from 'containers/Notifications';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import makeSelectLoginAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';
import logo2 from '../../images/logo2.svg';
import { login } from './actions';
import Input from '../../components/Input';
import Button from '../../components/Button';

export function LoginAdmin(props) {
  useInjectReducer({ key: 'loginAdmin', reducer });
  useInjectSaga({ key: 'loginAdmin', saga });
  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
    pass: '',
  });
  const show = () => {
    if (!passShow) {
      setPassShow(true);
    } else {
      setPassShow(false);
    }
  };
  const asterisco = event => {
    const string = event.target.value;
    setUser({
      ...user,
      password: event.target.value,
      pass: string.replace(/./g, '*'),
    });
  };

  return (
    <Container>
      <Notifications />
      <img src={logo2} className="logo" alt="logo" />
      <div className="formulario">
        <h1>Iniciar sesión</h1>
        <Input
          label="Correo de usuario"
          onChange={event => setUser({ ...user, email: event.target.value })}
        >
          <AiOutlineUser />
        </Input>
        <Input
          label="Contraseña"
          placeholder="Contraseña"
          value={passShow ? user.pass : user.password}
          onChange={asterisco}
        >
          <button type="button" onClick={show}>
            {passShow ? <BsEye /> : <BsEyeSlash />}
          </button>
        </Input>
        <div className="containerButton">
          <Button
            primary
            onClick={() =>
              // eslint-disable-next-line react/prop-types
              props.dispatch(login(user.email, user.password, props.history))
            }
          >
            Ingresar
          </Button>
        </div>
      </div>
    </Container>
  );
}

LoginAdmin.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginAdmin: makeSelectLoginAdmin(),
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

export default compose(withConnect)(LoginAdmin);
