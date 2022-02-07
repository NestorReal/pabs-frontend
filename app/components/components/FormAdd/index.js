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
  width: 604px;
  height: 133px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0px 22px;
  .buscar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 86.5%;
    height: 38%;
  }
`;

function FormAdd({ text, placeholder, onChange, onClick, textButton }) {
  return (
    <FormAddStyle>
      <p style={text ? null : { height: '16px' }}>{text}</p>
      <div className="buscar">
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          height="auto"
        >
          <i>
            <VscSearch />
          </i>
        </Input>
        <Button
          primary
          width="110px"
          height="36px"
          borderRadius={6}
          onClick={onClick}
        >
          {textButton}
        </Button>
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
};

export default FormAdd;
