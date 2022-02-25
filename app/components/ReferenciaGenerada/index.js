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
  FuncEdit,
  createValue,
  keyData,
  actions,
  historical,
  historicalValue,
  historicalText,
  filterNumber,
  valueInput,
}) {
  const [value, setValue] = useState(null);
  const [edit, setEdit] = useState(false);
  if (valueInput !== undefined && edit) {
    if (!value) {
      setValue(valueInput);
    }
  }

  const search = dataArray => {
    if (Object.keys(dataArray).length !== 0) {
      return dataArray.filter(test =>
        test.create_time !== undefined
          ? test.create_time.includes(value)
          : test,
      );
    }
    return [];
  };

  return (
    <Container>
      <FormAdd
        text={textForm}
        placeholder={placeholder}
        onChange={event => setValue(event.target.value)}
        onClick={() => {
          createValue(value);
          setValue(null);
          setEdit(false);
        }}
        textButton={textButton}
        value={value}
      />
      <div style={{ marginTop: '14%' }} />
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
          data={search(data)}
          keyData={keyData}
          actions={actions}
          FuncRemove={id => Fundelete(id)}
          FuncEdit={id => {
            FuncEdit(id);
            setEdit(true);
          }}
          disable={valueInput !== undefined}
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
  FuncEdit: PropTypes.func,
  createValue: PropTypes.func,
  keyData: PropTypes.array.isRequired,
  actions: PropTypes.bool,
  historical: PropTypes.bool,
  historicalValue: PropTypes.number,
  historicalText: PropTypes.string,
  filterNumber: PropTypes.bool,
  valueInput: PropTypes.string,
};

export default ReferenciaGenerada;
