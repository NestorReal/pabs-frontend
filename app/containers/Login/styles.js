import styled from 'styled-components';
// import asaterisco from '../../images/asterisk-svgrepo-com.svg';
export const Container = styled.div`
  width: 100%;
  height: 100%;
  h1 {
    margin-top: 14.583%;
    color: #00539c;
  }
  .formulario {
    /* position: absolute;
    top: 28%; */
  }
  .containerButton {
    position: absolute;
    top: 65.972%;
    height: 8.1%;
  }
  /* Movil */
  @media only screen and (min-width: 601px) and (max-width: 700px) {
    overflow: hidden;
    h1 {
      margin-top: 10%;
    }
    .formulario {
      top: 20%;
    }
    .containerButton {
      /* width: 65%; */
    }
  }
  @media only screen and (min-width: 701px) and (max-width: 800px) {
    overflow: hidden;
    h1 {
      margin-top: 10%;
    }
    .formulario {
      top: 20%;
    }
  }
`;
