import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 7% 6%;
  width: 100%;
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
