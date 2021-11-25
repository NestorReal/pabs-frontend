/**
 *
 * ConsultarContrato
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import { MdOutlineEmail } from 'react-icons/md';
import { Container } from './style';

function ConsultarContrato() {
  return (
    <Container>
      <div className="formulario">
        <div className="buscar">
          <div>
            <input placeholder="Buscar contrato*" />
            <VscSearch
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
      </div>
      <div className="result">
        <div className="left">
          <div className="title">Ej. 1234567890</div>
          <div className="containerData">
            <div className="label">
              <MdOutlineEmail style={{ marginRight: '11px' }} />
              Nombre: <b style={{ marginLeft: '16px' }}>Nombre de ejemplo</b>
            </div>
            <div className="label">
              <MdOutlineEmail style={{ marginRight: '11px' }} />
              Ciudad: <b style={{ marginLeft: '16px' }}>Guadalajara</b>
            </div>
            <div className="label">
              <MdOutlineEmail style={{ marginRight: '11px' }} />
              Correo:
              <b style={{ marginLeft: '16px', textDecoration: 'underline' }}>
                ejemplo@ejemplo.com
              </b>
            </div>
            <div className="label">
              <MdOutlineEmail style={{ marginRight: '11px' }} />
              Teléfono: <b style={{ marginLeft: '16px' }}>PABS</b>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">Referencia generada</div>
          <div className="containerData">
            <div className="label">
              Numero de referencia:
              <b style={{ marginLeft: '16px' }}>Ej. 1234567890</b>
            </div>
            <div className="label">
              Fecha: <b style={{ marginLeft: '16px' }}>21/10/2021</b>
            </div>
            <div className="label">
              Concepto:
              <b style={{ marginLeft: '16px' }}>Concepto de ejemplo</b>
            </div>
            <div className="label">
              Monto: <b style={{ marginLeft: '16px' }}>Ej. $1234567890</b>
            </div>
          </div>
          <button type="button">Imprimir</button>
        </div>
      </div>
    </Container>
  );
}

ConsultarContrato.propTypes = {};

export default ConsultarContrato;
