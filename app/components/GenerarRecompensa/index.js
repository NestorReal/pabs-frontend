/**
 *
 * GenerarRecompensa
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from './style';
function GenerarRecompensa() {
  return (
    <Container>
      <div className="formulario">
        <div className="form">
          <div className="select" style={{ marginTop: '15px' }}>
            <label htmlFor="ciudad">Ciudad</label>
            <br />
            <select name="ciudad" id="ciudad">
              <option value="list">List</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="nombre">Nombre del plan</label>
            <div>
              <input id="nombre" type="text" placeholder="Nombre" />
            </div>
          </div>
          <div className="input" style={{ marginTop: '32px' }}>
            <label htmlFor="correo">Precio en pesos</label>
            <div>
              <input id="correo" type="text" placeholder="Correo" />
            </div>
          </div>
          <div className="input" style={{ marginTop: '30px' }}>
            <label htmlFor="descripcion">Descripción</label>
            <div>
              <textarea
                id="descripcion"
                placeholder="Teléfono"
                rows="10"
                cols="32"
              >
                Presiona Enter para separar los detalles por puntos
              </textarea>
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
    </Container>
  );
}

GenerarRecompensa.propTypes = {};

export default GenerarRecompensa;
