import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;

  .formulario {
    width: 604px;
    height: 133px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 39px 22px;
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
  }
  .result {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 325px;
    width: 1028px;
    left: 193px;
    top: 299px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    margin-top: 26px;
    .title {
      font-family: Arial;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 38px;
      letter-spacing: 0.375px;
      color: #113255;
    }
    .containerData {
      margin-top: 18px;
      .label {
        display: flex;
        justify-content: start;
        align-items: center;
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 38px;
        letter-spacing: 0.375px;
        color: #113255;
        min-width: 300px;
      }
    }
    .left {
      width: 514px;
      height: 100%;
      padding: 44px 69px;
    }
    .right {
      width: 514px;
      height: 100%;
      padding-top: 44px;
      button {
        height: 36px;
        width: 110px;
        border-radius: 5px;
        border: none;
        font-family: Arial;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 0.375px;
        text-align: center;
        background: #00539c;
        color: #fff;
        margin-top: 15px;
      }
    }
  }
`;
