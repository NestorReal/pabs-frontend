import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;
  .subtext {
    margin-left: 56px;
    margin-bottom: 26px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 38px;
    letter-spacing: 0.375px;
    color: #000000;
  }
  .containerFormulario {
    width: 498px;
    height: 498px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 19px 84px 63px 70px;
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
  .containerButton {
    margin-top: 31px;
    margin-left: 63px;
    button {
      height: 36px;
      width: 110px;
      border-radius: 5px;
      border: none;
      color: #fff;
    }
    .enviar {
      background: #317f43;
    }
    .limpiar {
      background: #ff0000;
      margin-left: 11px;
    }
  }
  .select {
    label {
      font-family: Arial;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      letter-spacing: 0.375px;
      color: #113255;
    }
    select {
      background: #ffffff;
      border: 1px solid #113255;
      box-sizing: border-box;
      border-radius: 3px;
      height: 30px;
      width: 150px;
      color: #113255;
    }
  }
`;
