import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 87px 19px 90px 37px;
  @media only screen and (max-width: 775px) {
    left: 0px;
    display: block;
    width: 310px;
  }
  @media only screen and (min-width: 776px) and (max-width: 915px) {
    left: 0px;
    width: 100%;
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    padding: 50px 10px 50px 10px;
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    padding: 50px 20px 50px 40px;
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    padding: 110px 40px;
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    padding: 185px 60px;
  }
  @media only screen and (min-width: 7680px) {
    padding: 300px 140px;
  }
`;
