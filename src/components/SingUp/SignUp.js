import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
// import * as authOperations from '../redux/auth/authOperations';
import * as authOperations from '../../redux/auth/authOperations';
import { useState } from 'react';
import { emailRegexp, nameRegexp, passwordRegexp } from 'utils/utils';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [nameField, setName] = useState('');
  const [emailField, setEmail] = useState('');
  const [passwordField, setPassword] = useState('');
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'email' && setEmail(value);
    name === 'password' && setPassword(value);
  };

  const handleBlur = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      let regName = new RegExp(nameRegexp).test(value);
      !regName && setNameError('name must contain 3-22 symbols (A-Z,a-z,0-9)');
      regName && setNameError(null);
    }
    if (name === 'email') {
      let regEmail = new RegExp(emailRegexp).test(value);
      !regEmail && setEmailError('Invalid email format');
      regEmail && setEmailError(null);
    }

    if (name === 'password') {
      let regPassword = new RegExp(passwordRegexp).test(value);
      !regPassword &&
        setPasswordError('password must contain 3-22 symbols (A-Z,a-z,0-9)');
      regPassword && setPasswordError(null);
    }
  };
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = event.currentTarget.elements;

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    dispatch(authOperations.register(data));
    event.currentTarget.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(nameError)}
                  helperText={nameError}
                  autoComplete="given-name"
                  name="name"
                  type="text"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={nameField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  error={Boolean(emailError)}
                  helperText={emailError}
                  required
                  fullWidth
                  label="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={emailField}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={Boolean(passwordError)}
                  helperText={passwordError}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={passwordField}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={Boolean(emailError ?? nameError ?? passwordError)}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/goit-react-hw-08-phonebook/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
