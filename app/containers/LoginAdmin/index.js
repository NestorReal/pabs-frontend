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
import Input from '../../components/components/Input';
import Button from '../../components/components/Button';

export function LoginAdmin(props) {
  useInjectReducer({ key: 'loginAdmin', reducer });
  useInjectSaga({ key: 'loginAdmin', saga });
  const [user, setUser] = useState({
    email: '',
    password: '',
    pass: '',
  });
  const [passShow, setPassShow] = useState(false);
  const show = () => {
    if (!passShow) {
      setPassShow(true);
    } else {
      setPassShow(false);
    }
  };
  return (
    <div>
      <img
        src={logo2}
        className="logo"
        alt="logo"
        height="9.167%"
        width="8.594%"
        style={{ position: 'absolute', left: '2.344%', top: '2.778%' }}
      />
      <Container>
        <div className="formulario">
          <div className="title">
            <h1>Iniciar sesión</h1>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Input
                label="Correo de usuario"
                placeholder="ejemplo@ejemplo.com"
                name="email"
                onChange={event =>
                  setUser({ ...user, email: event.target.value })
                }
              >
                <AiOutlineUser />
              </Input>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Input
                className={
                  user.password !== '' && !passShow ? 'fontFontello' : 'Arial'
                }
                label="Contraseña"
                placeholder="Contraseña"
                type={passShow ? 'text' : 'password'}
                name="password"
                onChange={event =>
                  setUser({ ...user, password: event.target.value })
                }
              >
                <button type="button" onClick={show}>
                  {passShow ? <BsEye /> : <BsEyeSlash />}
                </button>
              </Input>
            </div>
            <div className="containerButton" style={{ marginTop: '69px' }}>
              <Button
                variant="primary"
                onClick={() =>
                  props.dispatch(
                    login(user.email, user.password, props.history),
                  )
                }
              >
                Ingresar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

LoginAdmin.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object,
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
