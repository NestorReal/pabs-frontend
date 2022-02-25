import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #00539c;
    text-align: center;
    margin-bottom: 45px;
  }
  .formulario {
    width: auto;
  }
  .containerButton {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    height: 9.264%;
    width: 8.594%;
    left: 2.3%;
    top: 2.778%;
    position: absolute;
  }
  @media only screen and (max-width: 600px) {
    .formulario {
      margin-top: 50px;
    }
  }
`;
