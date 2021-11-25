/**
 *
 * AgregarGrupo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './style';

function AgregarGrupo() {
  return (
    <Container>
      <div className="subtext">
        Ingrese a información del usuario a continuación
      </div>
      <div className="containerFormulario">
        <label className="label" htmlFor="email">
          Correo de usuario
        </label>
        <div className="input" style={{ marginBottom: '21px' }}>
          <input type="text" id="email" placeholder="ejemplo@ejemplo.com" />
          <div className="icon">
            <MdOutlineEmail
              style={{ height: '25px', width: '25px', color: '#113255' }}
            />
          </div>
        </div>
        <div className="select">
          <label htmlFor="referencia">Tipo de referencia:</label>
          <br />
          <select name="referencia" id="referencia">
            <option value="list">List</option>
          </select>
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
    </Container>
  );
}

AgregarGrupo.propTypes = {};

export default AgregarGrupo;
