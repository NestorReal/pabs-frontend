/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * CreateUser
 *
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { MdOutlineEmail } from 'react-icons/md';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import makeSelectCreateUser from './selectors';
import reducer from './reducer';
import saga from './saga';
import { Container } from './styles';
import portada from '../../images/portada1.jpg';
// import logo from '../../images/logo2.svg';

export function CreateUser() {
  useInjectReducer({ key: 'createUser', reducer });
  useInjectSaga({ key: 'createUser', saga });
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
    <Container>
      <img className="portada" src={portada} alt="portada" />
      {/* <img className="logo" src={logo}/> */}
      <div className="formularioContainer">
        <div className="title">Crear cuenta</div>
        <div className="formulario">
          <div>
            <div
              className="respons"
              style={{ display: 'block', marginRight: '35px' }}
            >
              <label className="label">Nombre completo</label>
              <div className="input">
                <input type="text" placeholder="Nombre de ejemplo" />
                <div className="icon">
                  <AiOutlineUser
                    style={{ height: '25px', width: '25px', color: '#113255' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'block' }}>
              <label className="label">Teléfono</label>
              <div className="input">
                <input type="text" placeholder="Ej. 1234567890" />
                <div className="icon">
                  <BsTelephone
                    style={{ height: '25px', width: '25px', color: '#113255' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="respons2" style={{ marginTop: '56px' }}>
            <div
              className="respons"
              style={{ display: 'block', marginRight: '35px' }}
            >
              <label className="label">Correo de usuario</label>
              <div className="input">
                <input type="text" placeholder="ejemplo@ejemplo.com" />
                <div className="icon">
                  <MdOutlineEmail
                    style={{ height: '25px', width: '25px', color: '#113255' }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'block' }}>
              <label className="label">Contraseña</label>
              <div className="input">
                <input
                  ref={password}
                  type="password"
                  placeholder="Contraseña"
                />
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
            </div>
          </div>
        </div>
        <div className="containerTerminos">
          <label className="check">
            Aceptar términos
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="containerButton">
          <button className="primary" type="button">
            Crear cuenta
          </button>
        </div>
        <div className="footer" />
      </div>
    </Container>
  );
}

CreateUser.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createUser: makeSelectCreateUser(),
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

export default compose(withConnect)(CreateUser);
