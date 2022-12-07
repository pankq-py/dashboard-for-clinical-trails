import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// password visibility on/off
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";


// model requirements

import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import SignUpForm from '../Pages/SignUpForm';

// for toast

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

// model css
const modelStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  // bgcolor: 'transparent',
  border: '2px solid #0d4956',
  boxShadow: 24,
  p: 1,
};


export default function SignInForm({ closeHandle, openSignUpForm }) {

  const [allData, setAllData] = useState([]);
  const [signInData, setSignInData] = useState([]);

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('Form Data'));
    if (allData) {
      setAllData(allData);
    }
  }, []);
  // console.log(allData);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signInData = {
      email: data.get('email').toLowerCase(),
      password: data.get('password'),
    }
    // console.log(signInData);
    setSignInData(signInData);

    let ifEmailPresent = false;

    for (let record in allData) {
      // console.log(allData[record].email);
      if (signInData.email === allData[record].email) {
        console.log("email found at: " + record);
        ifEmailPresent = true;
        if (signInData.password === allData[record].password || !signInData.password === "") {
          // console.log("password found at: " + record);
          // alert("Yeyy! Signed In Successfully.");
          toast.success('You have successfully signed in', { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
          sessionStorage.setItem('isLoggedIn', true);
          closeHandle();
          break;
        } else {
          // console.log("password doesn't match");
          // alert("Incorrect Password! Please try again.");
          toast.error('Incorrect Password! Please try again.', { autoClose: 4000, position: toast.POSITION.TOP_CENTER })
          break;
        }
      } else {
        // console.log("email doesn't found at: " + record);
        // toast.warning("email doesn't found at: " + record, { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        ifEmailPresent = false;
      }
    }
    ifEmailPresent ? console.log("email found") : toast.warning("email doesn't found", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
    // console.log("working");
  };

  // password visiblity on/off 
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // signup/signin model
  const [openModelSignUp, setOpenModelSignUp] = React.useState(false);
  const handleOpenModel = () => setOpenModelSignUp(true);
  const handleCloseModel = () => setOpenModelSignUp(false);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#2193b0' }}>
            <LoginOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoComplete='off'
              autoFocus
            // onClick={notify}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              // type="password"
              id="password"
              // autoComplete="current-password"
              autoComplete='off'
              onChange={handlePasswordChange("password")}

              // password visiblity on/off 
              type={values.showPassword ? "text" : "password"}
              // value={values.password}
              InputProps={{
                endAdornment: (
                  < InputAdornment position="end" >
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#2193b0', '&:hover': { bgcolor: "#1d87a1" }, }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="#" variant="body2" onClick={() => alert("This functionality is yet to be added.")}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="#" id="Sign Up" onClick={() => openSignUpForm(false)} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openModelSignUp}
          onClose={handleCloseModel}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          style={{ overflow: 'auto' }}
        >
          <Fade in={openModelSignUp}>
            <Box sx={modelStyle}>
              <SignUpForm />
            </Box>
          </Fade>
        </Modal> */}
      </Container>
    </ThemeProvider >
  );
}