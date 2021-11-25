/**
 *
 * ReferenciaGenerada
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import { Container } from './style';

function ReferenciaGenerada(props) {
  return (
    <Container>
      <div className="formulario">
        <div className="text">Selecciona rango de fechas</div>
        <div className="buscar">
          <div>
            <input placeholder="21/10/2021 - 21/10/2021 " />
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
      <div className="filtreNumber">
        Mostrar
        <input type="number" defaultValue="10" />
        Registros
      </div>
      <div className="containerTable">
        <table className="table">
          <tr className="headerTable">
            {/* eslint-disable-next-line react/prop-types */}
            {props.header.map(item => (
              <th>{item}</th>
            ))}
          </tr>
          <tbody>
            {/* eslint-disable-next-line react/prop-types */}
            {props.data.map(item => (
              <tr>
                {item.map(td => (
                  <td>{td}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

ReferenciaGenerada.propTypes = {};

export default ReferenciaGenerada;
