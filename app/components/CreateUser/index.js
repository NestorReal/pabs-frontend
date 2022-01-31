/**
 *
 * CreateUser
 *
 */

import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
// eslint-disable-next-line import/no-unresolved
import { Container } from './style';

function CreateUser() {
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
      <div className="subtext">
        Ingrese a información del usuario a continuación
      </div>
      <div className="containerFormulario">
        <div className="left">
          <label htmlFor="nombre" className="label">
            Nombre(s):
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nombre" type="text" placeholder="Nombre" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="nombre" className="label">
            Apellidos:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nombre" type="text" placeholder="Apellidos" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="nombre" className="label">
            Teléfono:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nombre" type="text" placeholder="Ej. 1234567890" />
            <div className="icon">
              <BsTelephone
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <label className="label" htmlFor="email">
            Tipo de usuario:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input type="text" id="email" placeholder="Ventas" />
          </div>
          <label className="label" htmlFor="password">
            Correo:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              ref={password}
              id="email"
              type="email"
              placeholder="ejemplo@ejemplo.com"
            />
            <div className="icon">
              <MdOutlineEmail
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label className="label" htmlFor="password">
            Contraseña:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              ref={password}
              id="password"
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
          <div className="containerButton">
            <button type="button" className="enviar">
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

CreateUser.propTypes = {};

export default CreateUser;
