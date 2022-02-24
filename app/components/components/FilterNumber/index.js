/**
 *
 * FilterNumber
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterNumberStyle = styled.div`
  width: 100%;
  margin: 40px 0 21px 46px;
  height: 6.1%;
  input {
    width: 13.3%;
    height: 100%;
    margin: 0 8px;
    background: #ffffff;
    border: 1px solid #113255;
    box-sizing: border-box;
    border-radius: 3px;
  }
`;

function FilterNumber({ onChange }) {
  return (
    <FilterNumberStyle>
      {/* Mostrar
      <input type="number" defaultValue="10" onChange={onChange} />
      Registros */}
    </FilterNumberStyle>
  );
}

FilterNumber.propTypes = {
  onChange: PropTypes.func,
};

export default FilterNumber;
