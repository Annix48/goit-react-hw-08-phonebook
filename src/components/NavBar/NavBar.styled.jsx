import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import {
  mainColor,
  // secondColor,
  // bgColor,
  // buttonColor,
} from 'components/AppMainStyled.styled';

export const AppBarStyled = styled(AppBar)`
  background-color: ${mainColor};
`;
export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 10px;
  background-color: lightgrey;
  box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 3px 5px 1px rgba(0, 0, 0, 0.5);
`;
