/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Login
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { login } from './actions';
import { Container } from './styles';
import Portada from '../../components/Portada';
import ContainerForm from '../../components/ContainerForm';
import Input from '../../components/components/Input';
import Button from '../../components/components/Button';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const [passShow, setPassShow] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const show = () => {
    if (!passShow) {
      setPassShow(true);
    } else {
      setPassShow(false);
    }
  };
  return (
    <Container>
      <Portada />
      <ContainerForm>
        <div className="center">
          <h1>Iniciar sesión</h1>
        </div>
        <div className="center">
          <div className="formulario">
            <Input
              label="Correo de usuario"
              placeholder="ejemplo@ejemplo.com"
              onChange={event =>
                setUser({ ...user, email: event.target.value })
              }
            >
              <MdOutlineEmail />
            </Input>
            <Input
              className={
                user.password !== '' && !passShow ? 'fontFontello' : 'Arial'
              }
              label="Contraseña"
              placeholder="Contraseña"
              type={passShow ? 'text' : 'password'}
              onChange={event =>
                setUser({ ...user, password: event.target.value })
              }
            >
              <button type="button" onClick={show}>
                {passShow ? <BsEye /> : <BsEyeSlash />}
              </button>
            </Input>
          </div>
        </div>
        <div className="center">
          <p>¿Aún no tienes cuenta?</p>
          <div className="containerButton">
            <Button
              primary
              onClick={() =>
                props.dispatch(login(user.email, user.password, props.history))
              }
            >
              Ingresar
            </Button>
            <Button onClick={() => props.history.push('/crear-cuenta')}>
              Crear cuenta
            </Button>
          </div>
        </div>
      </ContainerForm>
    </Container>
  );
}

Login.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
