import styled from '@emotion/styled';

export const Spinner = styled.div`
  /* width: 100%; */
  height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  & div {
    width: 12vw;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
  & h2 {
    position: fixed;
    top: 30%;
    color: rgba(2, 2, 10, 0.7);
  }
`;

export const Bar1 = styled.span`
  width: 3vw;
  height: 10vw;
  border-radius: 6px;
  background-color: rgba(0, 0, 255, 0.7);
  animation: animate1 500ms infinite 1000ms;
  @keyframes animate1 {
    0% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(1.5);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;
export const Bar2 = styled.span`
  width: 3vw;
  height: 15vw;
  border-radius: 6px;
  background-color: rgba(0, 0, 255, 0.7);
  animation: animate2 500ms infinite 1000ms;
  @keyframes animate2 {
    0% {
      transform: scaleY(1.5);
    }

    50% {
      transform: scaleY(1);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;
export const Bar3 = styled.span`
  width: 3vw;
  height: 10vw;
  border-radius: 6px;
  background-color: rgba(0, 0, 255, 0.7);
  animation: animate3 500ms infinite 1000ms;
  @keyframes animate3 {
    0% {
      transform: scaleY(1.25);
    }

    50% {
      transform: scaleY(0.75);
    }

    100% {
      transform: scaleY(1.25);
    }
  }
`;
