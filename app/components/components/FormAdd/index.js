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
  width: 47.2%;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 2% 1%;
  .buscar {
    display: flex;
    justify-content: space-between;
  }
  button {
    height: 100%;
  }
  .icon {
    transform: scale(0.8);
  }
  @media only screen and (max-width: 700px) {
    width: 95%;
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
      <label>{text}</label>
      <div className="buscar">
        <Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          height="auto"
          value={value || ''}
          autoHeight
          Rounded={false}
        >
          <i>
            <VscSearch />
          </i>
        </Input>
        <div>
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
