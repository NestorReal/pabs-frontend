/**
 *
 * FormAdd
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VscSearch } from 'react-icons/vsc';
import Input from '../Input';
import Button from '../Button';

const FormAddStyle = styled.div`
  position: fixed;
  width: 47.2%;
  height: 18.5%;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0px 22px;
  .buscar {
    display: flex;
    justify-content: space-between;
    width: 86.5%;
    height: 38%;
  }
  @media only screen and (max-width: 700px) {
    width: 90%;
    padding: 0 5px;
    .buscar {
      width: 100%;
    }
  }
  @media only screen and (min-width: 700px) and (max-width: 1000px) {
    .buscar {
      width: 93%;
    }
  }
`;

function FormAdd({ text, placeholder, onChange, onClick, textButton, value }) {
  return (
    <FormAddStyle>
      <p style={text ? null : { height: '16px' }}>{text}</p>
      <div className="buscar">
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          height="auto"
          value={value || ''}
        >
          <i>
            <VscSearch />
          </i>
        </Input>
        <div style={{ marginTop: '2%' }}>
          <Button variant="primary" onClick={onClick} size="medium">
            {textButton}
          </Button>
        </div>
      </div>
    </FormAddStyle>
  );
}

FormAdd.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  textButton: PropTypes.string,
  value: PropTypes.string,
};

export default FormAdd;
