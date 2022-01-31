import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;

  .formulario {
    width: 604px;
    height: 570px;
    margin-left: 174px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    padding-top: 4px;
    .form {
      .input {
        width: 315px;
        input {
          height: 30px;
          width: 100%;
          border-radius: 3px;
          border: 1px solid #113255;
          box-sizing: border-box;
        }
        textarea {
          width: 100%;
          height: 180px;
          padding: 10px;
          border-radius: 3px;
          border: 1px solid #113255;
        }
        textarea:focus {
          outline: none;
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
        margin-bottom: 16px;
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
        display: flex;
        justify-content: center;
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
`;
