import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 32px 0 15px 24px;
  .subtext {
    display: block;
    margin-left: 56px;
    margin-bottom: 26px;
    color: #000000;
  }
  .containerFormulario {
    width: 95%;
    background: #ffffff;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 2%;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 8%;
    width: 30%;
  }
  .containerInput {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;

    .left,
    .rigth {
      width: 30%;
    }
  }
  @media only screen and (max-width: 959px) {
    padding: 0;
    .containerFormulario {
      position: relative;
      width: 80.234%;
      margin: 0 auto;
    }

    .subtext {
      margin-left: 0;
      text-align: center;
    }

    .containerInput {
      display: block;
      .left,
      .rigth {
        width: 95%;
        margin: 0 auto;
      }
    }

    .buttons {
      margin-top: 15px;
      width: 80%;
    }
  }
`;
