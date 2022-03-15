import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 612px;
  height: auto;

  @media only screen and (max-width: 950px) {
    position: relative;
  }
`;
