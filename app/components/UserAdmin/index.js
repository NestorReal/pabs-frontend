/**
 *
 * UserAdmin
 *
 */

import React from 'react';
import auth from 'utils/auth';
import PropTypes from 'prop-types';
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
                <td>{item.full_name}</td>
                <td>{item.full_name}</td>
                <td>{item.email}</td>
                <td>{item.full_name}</td>
                <td>{item.is_active ? 'Activo' : 'Desactivado'}</td>
                <td>
                  {/* <button type="button" className="editar">
                     Editar
                   </button> */}
                  {props.user._id !== item.id ? (
                    <button
                      type="button"
                      className="eliminar"
                      onClick={() => props.deleteUser(item.id)}
                    >
                      Desactivar
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

UserAdmin.propTypes = {
  deleteUser: PropTypes.func,
};

export default UserAdmin;
