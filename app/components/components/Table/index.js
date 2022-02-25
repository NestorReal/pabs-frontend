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
  @media only screen and (max-width: 959px) {
    table {
      min-width: 1000px;
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    table {
      min-width: 1000px;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    height: 400px;
    width: 99%;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    padding: 7px 26px;
    table {
      th {
        border-bottom: 2px solid #00539c;
        line-height: 50px;
      }
      td {
        line-height: 50px;
      }
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    height: 700px;
    width: 99%;
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    padding: 7px 26px;
    table {
      th {
        border-bottom: 3px solid #00539c;
        line-height: 80px;
      }
      td {
        line-height: 80px;
      }
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    height: 1000px;
    width: 99%;
    box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    padding: 7px 26px;
    table {
      th {
        border-bottom: 5px solid #00539c;
        line-height: 130px;
      }
      td {
        line-height: 130px;
      }
    }
  }
  @media only screen and (min-width: 7680px) {
    height: 2000px;
    width: 99%;
    box-shadow: 50px 50px 100px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    padding: 7px 26px;
    table {
      th {
        border-bottom: 10px solid #00539c;
        line-height: 230px;
      }
      td {
        line-height: 230px;
      }
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
  disable,
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
                      disabled={disable}
                      style={disable ? { opacity: '0.5' } : null}
                      type="button"
                      className="editar"
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => FuncEdit(item._id ? item._id : item.id)}
                    >
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>Editar</label>
                    </button>
                  ) : null}
                  {FuncRemove ? (
                    <button
                      disabled={disable}
                      style={disable ? { opacity: '0.5' } : null}
                      type="button"
                      className="eliminar"
                      // eslint-disable-next-line no-underscore-dangle
                      onClick={() => FuncRemove(item._id ? item._id : item.id)}
                    >
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label>Eliminar</label>
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
  disable: PropTypes.bool,
};

export default Table;
