/**
 *
 * CreateUser
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import { Container } from './style';
import Input from '../components/Input';
import Button from '../components/Button';

function CreateUser({ createUser }) {
  const [user, setUser] = useState({
    userName: '',
    lastName: '',
    role: '',
    email: '',
    number: '',
    password: '',
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
      <div className="subtext">
        Ingrese a información del usuario a continuación
      </div>
      <div className="containerFormulario">
        <div className="spaceBetween">
          <div>
            <Input
              label="Nombre(s):"
              placeholder="Nombre"
              onChange={event =>
                setUser({ ...user, userName: event.target.value })
              }
            >
              <AiOutlineUser />
            </Input>
            <Input
              label="Apellidos:"
              placeholder="Apellidos de ejemplo"
              onChange={event =>
                setUser({ ...user, lastName: event.target.value })
              }
            >
              <AiOutlineUser />
            </Input>
            <Input
              label="Teléfono:"
              placeholder="Ej. 1234567890"
              onChange={event =>
                setUser({ ...user, number: event.target.value })
              }
            >
              <BsTelephone />
            </Input>
          </div>
          <div>
            <Input
              label="Tipo de usuario:"
              placeholder="Ventas"
              onChange={event => setUser({ ...user, role: event.target.value })}
            >
              <AiOutlineUser />
            </Input>
            <Input
              label="Correo:"
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
        <div className="center">
          <div className="spaceBetween buttons">
            <Button
              size="medium"
              variant="succes"
              onClick={() => createUser(user)}
            >
              Crear
            </Button>
            <Button variant="cancel" size="medium" onClick={() => {}}>
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

CreateUser.propTypes = {
  createUser: PropTypes.func,
  // sendError: PropTypes.func,
};

export default CreateUser;
