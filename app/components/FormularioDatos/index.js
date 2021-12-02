/**
 *
 * FormularioDatos
 *
 */

import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AiOutlineUser, AiOutlineEnvironment } from 'react-icons/ai';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './styles';

function FormularioDatos(props) {
  const [passShow, setPassShow] = useState(false);
  const password = useRef(null);
  const getStep = step => {
    // eslint-disable-next-line react/prop-types
    props.getStepFormulario(step);
  };
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
      <div className="tituloDos">Datos del responsable de pago</div>
      <div className="responsable">
        <div className="left">
          <label htmlFor="nombre" className="label">
            Nombre(s) del reponsable de pago:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nombre" type="text" placeholder="Nombre de ejemplo" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="segundoApellido" className="label">
            Segundo apellido:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              id="segundoApellido"
              type="text"
              placeholder="Apellido de ejemplo"
            />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="tel" className="label">
            Teléfono:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="tel" type="text" placeholder="Ej. 1234567890" />
            <div className="icon">
              <BsTelephone
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="calle" className="label">
            Calle:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="calle" type="text" placeholder="Calle de ejemplo" />
            <div className="icon">
              <AiOutlineEnvironment
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="noInterno" className="label">
            No. interior:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="noInterno" type="text" placeholder="Ej. 1234567890" />
            <div className="icon">
              <AiOutlineEnvironment
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="municipio" className="label">
            Municipio:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="municipio" type="text" placeholder="municipio" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label className="label" htmlFor="password">
            Contraseña
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
          <div>
            <label className="check">
              Acepto los términos y condiciones
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
        <div className="right">
          <label htmlFor="primerApellido" className="label">
            Primer apellido:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              id="primerApellido"
              type="text"
              placeholder="Apellido de ejemplo"
            />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="nacimiento" className="label">
            Fecha de nacimiento:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nacimiento" type="date" placeholder="dd/mm/aaaa" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="correo" className="label">
            Correo:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="correo" type="text" placeholder="ejemplo@ejemplo.com" />
            <div className="icon">
              <MdOutlineEmail
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="noExterior" className="label">
            No. exterior:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="noExterior" type="text" placeholder="Ej. 1234567890" />
            <div className="icon">
              <AiOutlineEnvironment
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="colonia" className="label">
            Colonia:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="colonia" type="text" placeholder="Colonia de ejemplo" />
            <div className="icon">
              <AiOutlineEnvironment
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <div className="containerTerminos">
            <label className="check">
              Crear cuenta
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
          <label className="label" htmlFor="password">
            Contraseña
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
        </div>
      </div>
      <div className="tituloDos" style={{ marginTop: '60px' }}>
        Datos del titular del contrato
      </div>
      <div className="titular">
        <div className="left">
          <label htmlFor="nombre" className="label">
            Nombre(s) del reponsable de pago:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="nombre" type="text" placeholder="Nombre de ejemplo" />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="segundoApellido" className="label">
            Segundo apellido:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              id="segundoApellido"
              type="text"
              placeholder="Apellido de ejemplo"
            />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="tel" className="label">
            Teléfono:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="tel" type="text" placeholder="Ej. 1234567890" />
            <div className="icon">
              <BsTelephone
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
        </div>
        <div className="right">
          <label htmlFor="primerApellido" className="label">
            Primer apellido:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input
              id="primerApellido"
              type="text"
              placeholder="Apellido de ejemplo"
            />
            <div className="icon">
              <AiOutlineUser
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
          <label htmlFor="correo" className="label">
            Correo:
          </label>
          <div className="input" style={{ marginBottom: '21px' }}>
            <input id="correo" type="text" placeholder="ejemplo@ejemplo.com" />
            <div className="icon">
              <MdOutlineEmail
                style={{ height: '25px', width: '25px', color: '#113255' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="containerButton">
        <button type="button" className="button" onClick={() => getStep(3)}>
          Ir a pagar
        </button>
      </div>
    </Container>
  );
}

FormularioDatos.propTypes = {};

export default FormularioDatos;
