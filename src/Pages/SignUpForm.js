import React, { useEffect, useRef, useState } from 'react';
// import { useForm } from "react-hook-form";
import Routing from '../Components/Routing';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
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

import SignInForm from '../Pages/SignInForm';

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

// for toast

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export default function SignUpForm({ closeHandle, openSignInForm }) {
    const [allFormData, setAllFormData] = useState(() => {
        const localData = localStorage.getItem('Form Data');
        return localData ? JSON.parse(localData) : [];
    });

    console.log(allFormData);

    // did not worked
    // const { reset } = useForm();

    const validateEmail = (email) => {
        // console.log("email: " + email);
        //   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (email.match(validRegex)) {
            // console.log(email + " is Valid");
            return true;
        } else {
            // console.log(email + " is Invalid.");
            return false;
        }
    }

    const isEmailExist = (email) => {
        for (let item in allFormData) {
            if (allFormData[item].email === email) {
                console.log('email is present at: ',item);
                return true;
                // break;
            }
        }
    }

    const validatePhoneNumber = (phone) => {
        // console.log("phone: " + phone);
        var phoneNo1 = /^\d{10}$/;                                              // regEx for 10 digits number.
        var phoneNo2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;    // regEx for numbers like: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX
        var phoneNo3 = /^\+?([0-9]{2})\?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;    // regEx for numbers like: +XX-XXXX-XXXX, +XX.XXXX.XXXX, +XX XXXX XXXX
        if (phone.match(phoneNo1) || phone.match(phoneNo2) || phone.match(phoneNo3)) {
            return true;
        } else {
            // console.log(phone + " is Invalid.\nValid formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, +XX-XXXX-XXXX, +XX.XXXX.XXXX, +XX XXXX XXXX");
            return false;
        }
    }

    const validatePassword = (password) => {
        var regExPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (password.match(regExPassword)) {
            return true;
        } else {
            return false;
        }
    }

    var flag = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = new FormData(event.currentTarget);

        const enteredData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            phoneNumber: data.get('phoneNumber'),
            email: data.get('email').toLowerCase(),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword'),
        }

        // allFormData.map(formData => formData.email === enteredData.email)

        // for (let item in allFormData) {
            // console.log('enteredData: ',enteredData.email,' allformData.email: ',allFormData.map(email => console.log(email.email)),'matched? - ',enteredData.email===allFormData[item].email);
        // }

        if (Object.values(enteredData).every(value => value)) {
            if (!validatePhoneNumber(enteredData.phoneNumber)) {
                toast.warning("Phone Number: '" + enteredData.phoneNumber + "' is Invalid.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
            } else if (!validateEmail(enteredData.email)) {
                toast.warning("Email: '" + enteredData.email + "' is Invalid.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
                // } else if (!allFormData.map(formData => formData.email === enteredData.email)) {
                //     toast.error("Email already exits!", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
            } else if (isEmailExist(enteredData.email)) {
                toast.error("Email already exits!", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
            } else if (!validatePassword(enteredData.password)) {
                toast.warning("Passwords must contains atleast 8 characters, including a number, uppercase & lowercase letter and symbol.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
            } else if (enteredData.password != enteredData.confirmPassword) {
                toast.error("Password confirmation doesn't match.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
            } else {
                setAllFormData([...allFormData, enteredData]);
                toast.success('You have successfully signed up', { autoClose: 5000, position: toast.POSITION.TOP_CENTER })
                flag = false;
                event.target.reset();
                // openSignInForm(true);       //sending props to open sign up modal
                // const enteredData = {
                //     firstName: data.get('firstName'),
                //     lastName: data.get('lastName'),
                //     phoneNumber: data.get('phoneNumber'),
                //     email: data.get('email').toLowerCase(),
                //     password: data.get('password'),
                //     confirmPassword: data.get('confirmPassword'),
                // }
            }
        } else {
            toast("Please fill required* fields.", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        }
    };

    useEffect(() => {
        if (flag) {
            localStorage.setItem('Form Data', JSON.stringify(allFormData));
        } else {
            console.log("inside useEffect else, details are not appropriate.");
        }
    }, [allFormData]);

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

    const handlePasswordChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginBottom: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#2193b0' }}>
                        <PersonAddAlt1OutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate id='signUpForm' onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // autoComplete="given-name"
                                    autoComplete="off"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    // autoComplete="family-name"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    //  autoComplete="family-name"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    // autoComplete="email"
                                    autoComplete="off"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    // autoComplete="new-password"
                                    autoComplete="off"
                                    title="Passwords must contains atleast 8 characters, including a number, uppercase & lowercase letter and symbol."
                                // woi pending
                                // ref={myInput}
                                // onKeyUp={validatePassword}
                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                />
                            </Grid>
                            {/* <span class="tooltip" >?</span> */}
                            {/* <div id="message">
                                <h3>Password must contain the following:</h3>
                                <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                                <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                                <p id="number" className="invalid">A <b>number</b></p>
                                <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                            </div> */}
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    // type="password"
                                    id="confirmPassword"
                                    // autoComplete="new-password"
                                    autoComplete="off"

                                    // password visiblity on/off 
                                    type={values.showPassword ? "text" : "password"}
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
                            </Grid>
                            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#2193b0', '&:hover': { bgcolor: "#1d87a1" }, }}
                        // onClick={() => !flag ? '' : openSignInForm(true)}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='#' onClick={() => openSignInForm(true)} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}