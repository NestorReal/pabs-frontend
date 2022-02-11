/**
 *
 * ReferenciaGenerada
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from './style';
import FormAdd from '../components/FormAdd';
import Table from '../components/Table';
import Historico from '../components/Historico';
import FilterNumber from '../components/FilterNumber';

function ReferenciaGenerada({
  textForm,
  textButton,
  placeholder,
  header,
  data,
  Fundelete,
  createValue,
  keyData,
  actions,
  historical,
  historicalValue,
  historicalText,
  filterNumber,
}) {
  const [value, setValue] = useState('');
  return (
    <Container>
      <FormAdd
        text={textForm}
        placeholder={placeholder}
        onChange={event => setValue(event.target.value)}
        onClick={() => createValue(value)}
        textButton={textButton}
      />
      {historical && (
        <Historico value={historicalValue} text={historicalText} />
      )}
      <div style={!filterNumber ? { visibility: 'hidden' } : null}>
        <FilterNumber />
      </div>
      {data && (
        <Table
          height="324px"
          top="40%"
          tHeader={header}
          data={data}
          keyData={keyData}
          actions={actions}
          FuncRemove={id => Fundelete(id)}
        />
      )}
    </Container>
  );
}

ReferenciaGenerada.propTypes = {
  textForm: PropTypes.string,
  textButton: PropTypes.string,
  placeholder: PropTypes.string,
  header: PropTypes.array,
  data: PropTypes.array,
  Fundelete: PropTypes.func,
  createValue: PropTypes.func,
  keyData: PropTypes.array.isRequired,
  actions: PropTypes.bool,
  historical: PropTypes.bool,
  historicalValue: PropTypes.number,
  historicalText: PropTypes.string,
  filterNumber: PropTypes.bool,
};

export default ReferenciaGenerada;
