import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #ffffff;
  h1 {
    position: absolute;
    top: 9.306%;
    color: #00539c;
    margin: 0px;
  }
  .formulario {
    position: absolute;
    top: 22.778%;
    width: 88.511%;
    height: 33.333%;
  }
  .between {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7.154%;
  }
  .containerButton {
    position: absolute;
    top: 67.778%;
  }
  .containerTerminos {
    position: absolute;
    top: 56.806%;
    right: 26.846%;
  }
  @media only screen and (max-width: 900px) {
    overflow: hidden;
    h1 {
      top: 5%;
    }
    .formulario {
      top: 11%;
      margin-left: -10%;
    }
    .between {
      width: 90%;
      display: block;
      margin-bottom: 0px;
    }
    .containerButton {
      top: 78%;
    }
    .containerTerminos {
      top: 70%;
      right: 10%;
    }
  }
  @media only screen and (min-width: 960px) and (max-width: 1279px) {
    .containerTerminos {
      right: 21.846%;
    }
  }
  @media only screen and (min-width: 1920px) and (max-width: 2559px) {
    .containerTerminos {
      right: 23.846%;
    }
  }
  @media only screen and (min-width: 2560px) and (max-width: 3839px) {
    .containerTerminos {
      top: 58%;
      right: 19.846%;
    }
  }
  @media only screen and (min-width: 3840px) and (max-width: 7679px) {
    .containerTerminos {
      top: 58%;
      right: 19.846%;
    }
  }
  @media only screen and (min-width: 7680px) {
    .containerTerminos {
      top: 58%;
      right: 18.846%;
    }
  }
`;
