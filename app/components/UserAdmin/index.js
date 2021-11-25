/**
 *
 * UserAdmin
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styles';

function UserAdmin(props) {
  return (
    <Container>
      <div className="subtext">
        A continuación se muestra una lista de los usuarios
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
                <td>
                  <button type="button" className="editar">
                    Editar
                  </button>
                  <button type="button" className="eliminar">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

UserAdmin.propTypes = {};

export default UserAdmin;
