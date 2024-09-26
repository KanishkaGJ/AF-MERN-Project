// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import green from '@mui/material/colors/green';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/login">
        LAAIF
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a8b1f", // Set your desired primary color here
    },
  },
});

export default function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8070/grass/loginGrass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate("/adminselect");
        sessionStorage.setItem('hasLoggedIn', 'true');
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  // Function to trigger Google OAuth login
  const googleLogin = () => {
    window.location.href = "http://localhost:8070/auth/google";
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: green[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            {/* Add Google Login Button */}
<Button
  fullWidth
  variant="outlined"
  startIcon={<img src="client/public/Assets/avesbl6oq.webp" alt="Google logo" width="20px" />}
  sx={{
    mt: 1,
    mb: 2,
    color: '#4285F4',
    borderColor: '#4285F4',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#f5f5f5',
      borderColor: '#357ae8',
    },
  }}
  onClick={googleLogin}
>
  Sign In with Google
</Button>

          </Box>
        </Box>
        <Copyright sx={{ mt: 5, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
