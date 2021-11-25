import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;

  .formulario {
    width: 604px;
    height: 565px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 15px 26px;
    .buscar {
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 484px;
    }
    .buttonBuscar {
      height: 36px;
      width: 110px;
      border-radius: 5px;
      background: #034681;
      border: none;
      color: #fff;
      margin-top: 9px;
    }
    input {
      background: #ffffff;
      border: 1px solid #113255;
      box-sizing: border-box;
      border-radius: 10px;
      height: 55px;
      width: 360px;
      padding: 15px 56px 14px 10px;
    }
    .form {
      padding: 24px 0px 0px 10px;
      .input {
        width: 414px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        input {
          height: 30px;
          width: 315px;
          border-radius: 3px;
          border: 1px solid #113255;
          box-sizing: border-box;
        }
        label {
          font-family: Arial;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          letter-spacing: 0.375px;
          color: #113255;
        }
      }
      .select {
        margin-left: 100px;
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
      .containerButton {
        margin-top: 23px;
        margin-left: 135px;
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
    }
  }
  .notificacion {
    position: absolute;
    top: 160px;
    right: 0px;
    width: 577px;
    height: 110px;
    font-family: Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 55px;
    color: #005c9e;
    text-align: center;
  }
`;
