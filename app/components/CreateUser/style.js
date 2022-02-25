import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;
  .subtext {
    margin-left: 56px;
    margin-bottom: 26px;
    color: #000000;
  }
  .containerFormulario {
    position: fixed;
    width: 80.234%;
    height: 53.444%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 19px 84px 63px 70px;
  }
  .buttons {
    width: 30%;
  }
  .containerInput {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (max-width: 959px) {
    height: 65px;
    .containerInput {
      display: block;
    }
    .containerFormulario {
      position: absolute;
      height: 530px;
      padding: 10px;
    }
    .buttons {
      margin-top: 15px;
      width: 80%;
    }
  }
`;
