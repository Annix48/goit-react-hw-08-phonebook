import { ViewContainer } from 'GlobalStyles.styled';
import { useSelector, useDispatch } from 'react-redux';
import { Greatings, TextBox } from './HomeView.styled';
import HomeBG from '../../../images/home-bg.jpg';
import { StyledButton } from '../../../GlobalStyles.styled';
import { useNavigate } from 'react-router-dom';
import { setPath } from 'redux/auth/authSlice';

const HomeView = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(store => store.auth.user.name);
  const onSignUp = () => {
    navigate('/register');
  };
  const onLogIn = () => {
    navigate('/login');
  };
  const onGettingStarted = () => {
    isLoggedIn && dispatch(setPath('/contacts'));
    navigate('/contacts');
  };
  return (
    <ViewContainer style={{ backgroundImage: `url(${HomeBG})` }}>
      <TextBox>
        {isLoggedIn ? (
          <>
            <Greatings>{`Welcome ${userName.toUpperCase()}!`}</Greatings>
            <StyledButton variant="contained" onClick={onGettingStarted}>
              Getting Started
            </StyledButton>
          </>
        ) : (
          <>
            <Greatings>{`Welcome! Sign up or log in`}</Greatings>
            <StyledButton variant="contained" onClick={onLogIn}>
              Log In
            </StyledButton>
            <StyledButton variant="contained" onClick={onSignUp}>
              Sign Up
            </StyledButton>
          </>
        )}
      </TextBox>
    </ViewContainer>
  );
};
export default HomeView;
