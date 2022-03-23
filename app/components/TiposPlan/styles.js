import styled from 'styled-components';

export const Container = styled.div`
  gap: 4% !important;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc(215px + 3%));
  justify-content: center;
  padding: 90px 30px;
  @media only screen and (max-width: 775px) {
    display: flex;
    flex-direction: column;
    padding: 90px 10px;
    width: 310px;
  }
  @media only screen and (min-width: 776px) and (max-width: 959px) {
    column-gap: 20px;
    left: 0px;
    padding: 90px 40px;
    width: 100%;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    column-gap: 20px;
    grid-template-columns: repeat(3, calc(175px + 3%));
    padding: 50px 20px 50px 20px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    column-gap: 40px;
    grid-template-columns: repeat(3, calc(300px + 3%));
    padding: 110px 40px 50px 40px;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    column-gap: 60px;
    grid-template-columns: repeat(3, calc(410px + 3%));
    padding: 170px 80px 110px 80px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    column-gap: 100px;
    grid-template-columns: repeat(3, calc(644px + 3%));
    padding: 245px 120px 185px 120px;
  }
  @media only screen and (min-width: 7680px) {
    column-gap: 150px;
    grid-template-columns: repeat(3, calc(1400px));
    padding: 400px 180px 300px 180px;
  }
`;
