import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { theme } from 'components/utils/mui';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import { useState } from 'react';

export function RegisterForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password || !name) {
      setError('All fields are required!');
      return;
    }
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const passwordRegex = /.{7,}/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address!');
      return;
    }
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 7 characters long');
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    dispatch(register(data));
    form.reset();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AppRegistrationOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error && (
              <Typography variant="subtitle1" color="error" align="center">
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="btn"
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
//  <form onSubmit={handleSubmit}>
//    <label>
//      Username
//      <input type="text" name="name" required />
//    </label>
//    <label>
//      Email
//      <input type="email" name="email" required />
//    </label>
//    <label>
//      Password
//      <input
//        type="password"
//        name="password"
//        title="Password must be at least 7 characters long"
//        pattern=".{7,}"
//        required
//      />
//    </label>
//    <button type="submit">Register</button>
//  </form>;
