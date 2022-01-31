/**
 *
 * CreateUser
 *
 */

import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import { Container } from './style';

function CreateUser(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    number: '',
    lastName: '',
    bussiness: 'PABS',
    role: '',
  });
  const [passShow, setPassShow] = useState(false);
  const [passShowConf, setPassShowConf] = useState(false);

  const password = useRef(null);
  const confirmPassword = useRef(null);
  const show = () => {
    if (password.current.type === 'password') {
      password.current.type = 'text';
      setPassShow(true);
    } else {
      password.current.type = 'password';
      setPassShow(false);
    }
  };
  const showConf = () => {
    if (confirmPassword.current.type === 'password') {
      confirmPassword.current.type = 'text';
      setPassShowConf(true);
    } else {
      confirmPassword.current.type = 'password';
      setPassShowConf(false);
    }
  };
  return (
    <Container>
      <div className="subtext">
        Ingrese a información del usuario a continuación
      </div>
      <div className="containerFormulario">
        <div className="left">
          <label htmlFor="nombre" className="label">
            Nombre(s):
          </label>
          <div className="input">
            <input
              id="nombre"
              type="text"
              placeholder="Nombre"
              onChange={event =>
                setUser({ ...user, userName: event.target.value })
              }
            />
            <div className="icon">
              <AiOutlineUser />
            </div>
          </div>
          <label htmlFor="nombre" className="label">
            Apellidos:
          </label>
          <div className="input">
            <input
              id="nombre"
              type="text"
              placeholder="Apellidos"
              onChange={event =>
                setUser({ ...user, lastName: event.target.value })
              }
            />
            <div className="icon">
              <AiOutlineUser />
            </div>
          </div>
          {/* <label htmlFor="nombre" className="label">
            Empresa:
          </label>
          <div className="input">
            <input
              id="nombre"
              type="text"
              placeholder="Empresa"
              onChange={event =>
                setUser({ ...user, bussiness: event.target.value })
              }
            />
            <div className="icon">
              <AiOutlineUser />
            </div>
          </div> */}
          <label htmlFor="nombre" className="label">
            Teléfono
          </label>
          <div className="input">
            <input
              id="nombre"
              type="text"
              placeholder="Teléfono"
              onChange={event =>
                setUser({ ...user, number: event.target.value })
              }
            />
            <div className="icon">
              <BsTelephone />
            </div>
          </div>
        </div>
        <div className="right">
          <label className="label" htmlFor="role">
            Role
          </label>
          <div className="input">
            <input
              type="text"
              id="role"
              placeholder="administrador"
              onChange={event => setUser({ ...user, role: event.target.value })}
            />
            {/* <div className="icon">
               
             </div> */}
          </div>
          <label className="label" htmlFor="email">
            Correo de usuario
          </label>
          <div className="input">
            <input
              type="text"
              id="email"
              placeholder="ejemplo@ejemplo.com"
              onChange={event =>
                setUser({ ...user, email: event.target.value })
              }
            />
            <div className="icon">
              <MdOutlineEmail />
            </div>
          </div>
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <div className="input">
            <input
              ref={password}
              id="password"
              type="password"
              placeholder="Contraseña"
              onChange={event =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <div className="icon">
              <button type="button" onClick={show}>
                {passShow ? <BsEye /> : <BsEyeSlash />}
              </button>
            </div>
          </div>
          <label className="label" htmlFor="password">
            Confirmar contraseña
          </label>
          <div className="input">
            <input
              ref={confirmPassword}
              id="password"
              type="password"
              placeholder="Confirmar contraseña"
            />
            <div className="icon">
              <button type="button" onClick={showConf}>
                {passShowConf ? <BsEye /> : <BsEyeSlash />}
              </button>
            </div>
          </div>
          <div className="containerButton">
            <button
              type="button"
              className="enviar"
              onClick={() => props.createUser(user)}
            >
              Crear
            </button>
            <button type="button" className="limpiar">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

CreateUser.propTypes = {
  createUser: PropTypes.func,
  sendError: PropTypes.func,
};

export default CreateUser;
