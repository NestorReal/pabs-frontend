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
  .containerTable {
    width: 1027px;
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
