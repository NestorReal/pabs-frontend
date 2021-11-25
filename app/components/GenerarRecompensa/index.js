/**
 *
 * GenerarRecompensa
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { AiOutlineProfile, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { Container } from './style';
function GenerarRecompensa() {
  return (
    <Container>
      <div className="formulario">
        <div className="buscar">
          <div>
            <input placeholder="Buscar contrato*" />
            <AiOutlineProfile
              style={{
                color: '#113255',
                fontSize: '25px',
                marginLeft: '-35px',
              }}
            />
          </div>
          <button type="button" className="buttonBuscar">
            Buscar
          </button>
        </div>
        <div className="form">
          <div className="input">
            <label htmlFor="nombre">Nombre*:</label>
            <div>
              <input id="nombre" type="text" placeholder="Nombre" />
              <AiOutlineUser style={{ height: '27px', marginLeft: '-22px' }} />
            </div>
          </div>
          <div className="select" style={{ marginTop: '15px' }}>
            <label htmlFor="ciudad">Ciudad</label>
            <br />
            <select name="ciudad" id="ciudad">
              <option value="list">List</option>
            </select>
          </div>
          <div className="select" style={{ marginTop: '15px' }}>
            <label htmlFor="referencia">Tipo de referencia:</label>
            <br />
            <select name="referencia" id="referencia">
              <option value="list">List</option>
            </select>
          </div>
          <div className="input" style={{ marginTop: '32px' }}>
            <label htmlFor="correo">Correo*:</label>
            <div>
              <input id="correo" type="text" placeholder="Correo" />
              <MdOutlineEmail style={{ height: '27px', marginLeft: '-22px' }} />
            </div>
          </div>
          <div className="input" style={{ marginTop: '30px' }}>
            <label htmlFor="telefono">Teléfono*:</label>
            <div>
              <input id="telefono" type="text" placeholder="Teléfono" />
              <BsTelephone style={{ height: '27px', marginLeft: '-22px' }} />
            </div>
          </div>
          <div className="containerButton">
            <button type="button" className="enviar">
              Enviar
            </button>
            <button type="button" className="limpiar">
              Limpiar
            </button>
          </div>
        </div>
      </div>
      <div className="notificacion">
        Generando <br />
        referencia...
      </div>
    </Container>
  );
}

GenerarRecompensa.propTypes = {};

export default GenerarRecompensa;
