/**
 *
 * Table
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const TableStyle = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  top: ${props => props.top};
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 7px 26px;
  overflow: auto;
  table {
    width: 100%;
    th {
      border-bottom: 0.5px solid #00539c;
      font-weight: bold;
      line-height: 38px;
      color: #113255;
    }
    td {
      line-height: 31px;
    }
    tbody {
      color: #113255;
      text-align: center;
      tr:nth-child(odd) {
        background-color: #e8f3fd;
      }
    }
    button {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 38px;
      letter-spacing: 0.375px;
      border: none;
      background: transparent;
    }
    .editar {
      color: #113255;
    }
    .eliminar {
      color: #ed1c24;
    }
  }
`;

function Table({
  width,
  height,
  tHeader,
  data,
  keyData,
  actions,
  FuncEdit,
  FuncRemove,
}) {
  return (
    <TableStyle height={height} width={width}>
      <table>
        <tr className="headerTable">
          {tHeader.map(item => (
            <th key={uuidv4()}>{item}</th>
          ))}
          {actions ? <th>Acción</th> : null}
        </tr>
        <tbody>
          {data.map(item => (
            <tr key={uuidv4()}>
              {keyData.map(itemKey => (
                <td key={uuidv4()}>{item[itemKey]}</td>
              ))}
              {actions ? (
                <td>
                  {FuncEdit ? (
                    <button
                      type="button"
                      className="editar"
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => FuncEdit(item._id ? item._id : item.id)}
                    >
                      Editar
                    </button>
                  ) : null}
                  {FuncRemove ? (
                    <button
                      type="button"
                      className="eliminar"
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => FuncRemove(item._id ? item._id : item.id)}
                    >
                      Eliminar
                    </button>
                  ) : null}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </TableStyle>
  );
}

Table.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  tHeader: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  keyData: PropTypes.array.isRequired,
  actions: PropTypes.bool,
  FuncEdit: PropTypes.func,
  FuncRemove: PropTypes.func,
};

export default Table;
