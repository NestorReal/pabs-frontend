import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .containerButton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 46px;
    .button {
      height: 50px;
      width: 220px;
      border-radius: 15px;
      background: #00539c;
      color: #fff;
    }
  }
  .tituloDos {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 41px;
    color: #00539c;
    text-align: left;
    margin-bottom: 8px;
  }
  .responsable,
  .titular {
    display: flex;
    justify-content: space-between;
  }
  .label {
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 38px;
    color: #113255;
    margin-left: 6px;
  }
  .input {
    height: 55px;
    width: 360px;
    border-radius: 10px;
    border: solid 1px #113255;
    input {
      border: none;
      height: 32px;
      width: 302px;
      margin: 10px;
    }
    input:focus {
      outline: none;
    }
    .icon {
      width: 25px;
      height: 25px;
      float: right;
      margin-top: 15px;
      margin-right: 9px;
      button {
        background: transparent;
        border: none;
        padding: 0px;
      }
    }
  }
  .containerTerminos {
    height: 113px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .check {
    display: block;
    position: relative;
    padding-left: 18px;
    margin-bottom: 12px;
    line-height: 38px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 38px;
    color: #005c9e;
  }

  .check input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 12px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #005c9e;
  }

  /* On mouse-over, add a grey background color */
  .check:hover input ~ .checkmark {
    background: #e5e5e5;
  }

  /* When the checkbox is checked, add a blue background */
  .check input:checked ~ .checkmark {
    background-color: #005c9e;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .check input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .check .checkmark:after {
    left: 4px;
    top: 1px;
    width: 6px;
    height: 9px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(37deg);
    -ms-transform: rotate(37deg);
    transform: rotate(37deg);
  }
`;
