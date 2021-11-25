/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Login
 *
 */

import React, { useRef, useState } from 'react';
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
import portada from '../../images/portada1.jpg';
import { login } from './actions';
// import logo from '../../images/logo.png';
// import logo from '../../images/logo2.svg';
import { Container } from './styles';

export function Login(props) {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });
  const [passShow, setPassShow] = useState(false);
  const password = useRef(null);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const show = () => {
    if (password.current.type === 'password') {
      password.current.type = 'text';
      setPassShow(true);
    } else {
      password.current.type = 'password';
      setPassShow(false);
    }
  };
  return (
    <Container>
      <img className="portada" src={portada} alt="portada" />
      {/* <img className="logo" src={logo}/> */}
      <div className="formularioContainer">
        <div className="title">Iniciar sesión</div>
        <div className="formulario">
          <label className="label">Correo de usuario</label>
          <div className="input">
            <input
              type="text"
              placeholder="ejemplo@ejemplo.com"
              onChange={() => setUser({ ...user, email: event.target.value })}
            />
            <div className="icon">
              <MdOutlineEmail
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label className="label">Contraseña</label>
          <div className="input">
            <input
              ref={password}
              type="password"
              placeholder="Contraseña"
              onChange={() =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <div className="icon">
              <button type="button" onClick={show}>
                {passShow ? (
                  <BsEye
                    style={{ height: '25px', width: '25px', color: '#113255' }}
                  />
                ) : (
                  <BsEyeSlash
                    style={{ height: '25px', width: '25px', color: '#113255' }}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <p>Si no tienes una cuenta</p>
        <div className="containerButton">
          <button
            className="primary"
            type="button"
            style={{ marginRight: '6px' }}
            onClick={() =>
              props.dispatch(login(user.email, user.password, props.history))
            }
          >
            Ingresar
          </button>
          <button
            className="secondary"
            type="button"
            // eslint-disable-next-line react/prop-types
            onClick={() => props.history.push('/crear-cuenta')}
          >
            Crear cuenta
          </button>
        </div>
        <div className="footer" />
      </div>
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
