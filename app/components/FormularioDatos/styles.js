import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 7% 6%;
  width: 100%;
  .tituloDos {
    color: #00539c;
    margin-bottom: 1.111%;
  }
  .input-group-wrapper {
    column-gap: 5%;
    display: flex;
    justify-content: flex-start;
    padding-bottom: 2%;
  }
  .containerTerminos {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) {
    .input-group-wrapper {
      flex-wrap: wrap;
      row-gap: 20px;
    }

    .input-group {
      width: 100%;
    }
  }
`;
