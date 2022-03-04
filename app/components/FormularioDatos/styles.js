import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 9.028% 5.859% 6.111% 5.859%;
  .tituloDos {
    color: #00539c;
    margin-bottom: 1.111%;
  }
  .responsable,
  .titular {
    column-gap: 5%;
    display: flex;
    justify-content: flex-start;
  }
  .containerTerminos {
    height: 15.605%;
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 700px) {
    .responsable,
    .titular {
      flex-wrap: wrap;
    }

    .input-group {
      width: 100%;
    }
  }
`;
