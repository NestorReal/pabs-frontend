import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;
  .buttonBuscar {
    height: 36px;
    width: 110px;
    border-radius: 5px;
    background: #034681;
    border: none;
    color: #fff;
  }
  .formulario {
    width: 604px;
    height: 133px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0px 22px;
    .text {
      font-family: Arial;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 38px;
      letter-spacing: 0.375px;
      text-align: left;
      margin-bottom: 7px;
    }
    .buscar {
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 484px;
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
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88px;
    width: 1027px;
  }
  .filtreNumber {
    input {
      width: 150px;
      height: 30px;
      margin: 0 8px;
      background: #ffffff;
      border: 1px solid #113255;
      box-sizing: border-box;
      border-radius: 3px;
    }
  }
  .containerTable {
    width: 100%;
    height: 324px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0 26px;
    .table {
      width: 100%;
      .headerTable {
        border-bottom: 0.5px solid #00539c;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 38px;
        letter-spacing: 0.375px;
        color: #113255;
      }
      tbody {
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 38px;
        letter-spacing: 0.375px;
        color: #113255;
        text-align: center;
        tr:nth-child(odd) {
          background-color: #e8f3fd;
        }
        button {
          font-family: Arial;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 38px;
          letter-spacing: 0.375px;
          border: none;
          background: transparent;
        }
        .editar {
          color: #113255;
        }
        .eliminar {
          color: #ed1c24;
        }
      }
    }
  }
`;
