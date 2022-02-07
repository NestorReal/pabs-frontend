/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * CreateUser
 *
 */

import React, { useState } from 'react';
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
import Portada from '../../components/Portada';
import ContainerForm from '../../components/ContainerForm';
import Input from '../../components/components/Input';
import Button from '../../components/components/Button';
import Check from '../../components/components/Check';

export function CreateUser() {
  useInjectReducer({ key: 'createUser', reducer });
  useInjectSaga({ key: 'createUser', saga });
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
    number: '',
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
    <Container>
      <Portada />
      <ContainerForm>
        <div className="center">
          <h1>Crear cuenta</h1>
        </div>
        <div className="center">
          <div className="formulario">
            <div className="between">
              <Input
                label="Nombre completo"
                placeholder="Nombre de ejemplo"
                onChange={event =>
                  setUser({ ...user, userName: event.target.value })
                }
              >
                <AiOutlineUser />
              </Input>
              <Input
                label="Teléfono"
                placeholder="Ej. 1234567890"
                onChange={event =>
                  setUser({ ...user, number: event.target.value })
                }
              >
                <BsTelephone />
              </Input>
            </div>
            <div className="between">
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
                className={user.password !== '' ? 'fontFontello' : ''}
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
        </div>
        <div className="containerTerminos">
          <Check label="Aceptar términos" />
        </div>
        <div className="center">
          <div className="containerButton">
            <Button primary>Crear cuenta</Button>
          </div>
        </div>
      </ContainerForm>
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
