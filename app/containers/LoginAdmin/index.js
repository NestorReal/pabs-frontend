/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * LoginAdmin
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
import { AiOutlineUser } from 'react-icons/ai';
import makeSelectLoginAdmin from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';
import logo2 from '../../images/logo2.svg';

export function LoginAdmin() {
  useInjectReducer({ key: 'loginAdmin', reducer });
  useInjectSaga({ key: 'loginAdmin', saga });
  const [passShow, setPassShow] = useState(false);
  const password = useRef(null);
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
    <div>
      <img
        src={logo2}
        className="logo"
        alt="logo"
        height="66.7021255493164px"
        width="110px"
        style={{ position: 'absolute', left: '30px', top: '20px' }}
      />
      <Container>
        <div className="formulario">
          <div className="title">Iniciar sesión</div>
          <div>
            <label className="label">Correo de usuario</label>
            <div className="input" style={{ marginBottom: '21px' }}>
              <input type="text" placeholder="ejemplo@ejemplo.com" />
              <div className="icon">
                <AiOutlineUser
                  style={{ height: '25px', width: '25px', color: '#113255' }}
                />
              </div>
            </div>
            <label className="label">Contraseña</label>
            <div className="input">
              <input ref={password} type="password" placeholder="Contraseña" />
              <div className="icon">
                <button type="button" onClick={show}>
                  {passShow ? (
                    <BsEye
                      style={{
                        height: '25px',
                        width: '25px',
                        color: '#113255',
                      }}
                    />
                  ) : (
                    <BsEyeSlash
                      style={{
                        height: '25px',
                        width: '25px',
                        color: '#113255',
                      }}
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="containerButton" style={{ marginTop: '69px' }}>
              <button className="primary" type="button">
                Ingresar
              </button>
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
