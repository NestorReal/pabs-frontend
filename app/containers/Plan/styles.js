import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  h1 {
    width: 100%;
    text-align: center;
    color: #00539c;
  }
  .containerFormulario {
    width: 100%;
  }
  @media only screen and (max-width: 775px) {
    .containerFormulario {
      display: flex;
      justify-content: center;
    }
  }
`;
