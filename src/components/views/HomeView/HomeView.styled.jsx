import styled from '@emotion/styled';
import { buttonColor } from 'components/AppMainStyled.styled';

export const Greatings = styled.h1`
  color: ${buttonColor};
`;
export const TextBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  padding: 30px;
`;
