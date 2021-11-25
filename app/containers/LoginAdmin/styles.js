import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-family: Arial;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    color: #00539c;
    text-align: center;
    margin-bottom: 45px;
  }
  .formulario {
    width: 360px;
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
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 50px;
      width: 220px;
      border-radius: 15px;
      border: 1px solid #00539c;
      font-family: Arial;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: center;
    }
    .primary {
      background: #00539c;
      color: #ffffff;
    }
    .secondary {
      background: #ffffff;
      color: #00539c;
    }
  }
  .logo {
    height: 66.7021255493164px;
    width: 110px;
    left: 30px;
    top: 20px;
    border-radius: 0px;
    position: absolute;
  }
`;
