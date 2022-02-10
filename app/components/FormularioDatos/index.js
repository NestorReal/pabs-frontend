/**
 *
 * FormularioDatos
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AiOutlineUser, AiOutlineEnvironment } from 'react-icons/ai';
import { BsEye, BsEyeSlash, BsTelephone } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './styles';
import Input from '../components/Input';
import Check from '../components/Check';
import Button from '../components/Button';

function FormularioDatos(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    confipassword: '',
    userName: '',
    number: '',
  });
  const [passShow, setPassShow] = useState({
    password: false,
    confipassword: false,
  });
  const show = () => {
    if (!passShow.password) {
      setPassShow({ ...passShow, password: true });
    } else {
      setPassShow({ ...passShow, password: false });
    }
  };
  const showConfi = () => {
    if (!passShow.confipassword) {
      setPassShow({ ...passShow, confipassword: true });
    } else {
      setPassShow({ ...passShow, confipassword: false });
    }
  };
  const [check, setCheck] = useState(false);
  const getStep = step => {
    // eslint-disable-next-line react/prop-types
    props.getStepFormulario(step);
  };
  const createUser = event => {
    setCheck(event.target.checked);
  };

  return (
    <Container>
      <div className="tituloDos">
        <h2>Datos del responsable de pago</h2>
      </div>
      <div className="responsable">
        <div className="left">
          <Input
            label="Nombre(s) del reponsable de pago:"
            placeholder="Nombre de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Segundo apellido:"
            placeholder="Apellido de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Teléfono:"
            placeholder="Ej. 1234567890"
            onChange={() => {}}
          >
            <BsTelephone />
          </Input>
          <Input
            label="Calle:"
            placeholder="Calle de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineEnvironment />
          </Input>
          <Input
            label="No. interior:"
            placeholder="Ej. 1234567890"
            onChange={() => {}}
          >
            <AiOutlineEnvironment />
          </Input>
          <Input label="Municipio:" placeholder="municipio" onChange={() => {}}>
            <AiOutlineUser />
          </Input>
          {check && (
            <div>
              <Input
                className={user.password !== '' ? 'fontFontello' : ''}
                label="Contraseña"
                placeholder="Contraseña"
                type={passShow.password ? 'text' : 'password'}
                onChange={event =>
                  setUser({ ...user, password: event.target.value })
                }
              >
                <button type="button" onClick={show}>
                  {passShow.password ? <BsEye /> : <BsEyeSlash />}
                </button>
              </Input>
            </div>
          )}
          <div>
            <Check label="Acepto los términos y condiciones" />
          </div>
        </div>
        <div className="right">
          <Input
            label="Primer apellido:"
            placeholder="Apellido de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Fecha de nacimiento:"
            placeholder="dd/mm/aaaa"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Correo:"
            placeholder="ejemplo@ejemplo.com"
            onChange={() => {}}
          >
            <MdOutlineEmail />
          </Input>
          <Input
            label="No. exterior:"
            placeholder="Ej. 1234567890"
            onChange={() => {}}
          >
            <AiOutlineEnvironment />
          </Input>
          <Input
            label="Colonia:"
            placeholder="Colonia de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineEnvironment />
          </Input>
          <div className="containerTerminos">
            <Check label="Crear cuenta" onChange={createUser} />
          </div>
          {check && (
            <div>
              <Input
                className={user.confipassword !== '' ? 'fontFontello' : ''}
                label="Confirmar contraseña"
                placeholder="Confirmar contraseña"
                type={passShow.confipassword ? 'text' : 'password'}
                onChange={event =>
                  setUser({ ...user, confipassword: event.target.value })
                }
              >
                <button type="button" onClick={showConfi}>
                  {passShow.confipassword ? <BsEye /> : <BsEyeSlash />}
                </button>
              </Input>
            </div>
          )}
        </div>
      </div>
      <div className="tituloDos" style={{ marginTop: '8.333%' }}>
        <h2>Datos del titular del contrato</h2>
      </div>
      <div className="titular">
        <div className="left">
          <Input
            label="Nombre(s) del reponsable de pago:"
            placeholder="Nombre de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Segundo apellido:"
            placeholder="Apellido de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Teléfono:"
            placeholder="Ej. 1234567890"
            onChange={() => {}}
          >
            <BsTelephone />
          </Input>
        </div>
        <div className="right">
          <Input
            label="Primer apellido:"
            placeholder="Apellido de ejemplo"
            onChange={() => {}}
          >
            <AiOutlineUser />
          </Input>
          <Input
            label="Correo:"
            placeholder="ejemplo@ejemplo.com"
            onChange={() => {}}
          >
            <MdOutlineEmail />
          </Input>
        </div>
      </div>
      <div className="center" style={{ marginTop: '6.389%' }}>
        <Button onClick={() => getStep(3)} variant="primary">
          Ir a pagar
        </Button>
      </div>
    </Container>
  );
}

FormularioDatos.propTypes = {};

export default FormularioDatos;
