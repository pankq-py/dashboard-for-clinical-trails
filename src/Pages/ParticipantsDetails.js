import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';

// Load Highcharts modules
require("highcharts/modules/exporting")(highcharts);

import { Container } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { loremIpsum } from 'react-lorem-ipsum';
import { styled } from '@mui/material/styles';

// FontAwesome Icon added
// import fontawesome from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faClipboardCheck, faDna, faFileWaveform, faSquareCheck } from '@fortawesome/free-solid-svg-icons';


const ParticipantsDetails = (props) => {

    const iconStyles = {
        fontSize: '150%',
        textAlign: 'center',
    };
    const spans = {
        fontSize: '80%',
        display: 'block',
        fontWeight: 'bold'
    };

    const { classes } = props;

    let params = useParams();
    // console.log(params)

    let url = `https://reqres.in/api/users/${params.userId}`;
    // console.log(url);

    const [data, setData] = useState([]);

    useEffect(() => {
        setAllData()
    })

    const setAllData = () => {
        fetch(url)
            .then(data => {
                // console.log(data.json());
                return data.json();
            })
            .then(user => {
                // console.log(user.data);
                setData(user.data);
                // console.log(user.data.email);
            })
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));



    // useEffect(() => {
    //     percentage();
    // },[]);

    // const percentage = () => {
    //     useEffect(() => {
    //         return Math.floor(Math.random() * (100 - 50) + 50)
    //     },[]);
    // }

    // highcharts information
    const options = {
        title: {
            // text: 'Growth in Participants Health'
            text: ' ',
        },
        subtitle: {
            text: 'Reported in 2021'
        },
        chart: {
            // backgroundColor: "transparent",
            type: 'spline',
            color: 'black',
        },
        series: [{
            name: 'Growth',
            growth: "Participants Information",
            data: [12, 30, 23, 50, 13, 23, 45, 31, 24, 42, 80, 95],
        }],
        yAxis: {
            title: {
                text: "Percentage of Increase"
            },
            labels: {
                format: "{value}%"
            }
        },

        xAxis: {
            title: {
                text: 'Months'
            },
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        credits: false,
        exporting: {
            enabled: true
        },
       
    }

    return (
        <>
            <Container>
                <Typography variant="h4" component="div" gutterBottom sx={{ margin: '10px' }}> Here are few more details of {data.first_name} {data.last_name}</Typography>
                {/* <input type="button" onLoad={setAllData} value="Click to change" /> */}
                {/* <h1>Id: {data.id}</h1>
                    <h1>Email: {data.email}</h1>
                    <h1>First name: {data.first_name}</h1>
                    <h1>Last name: {data.last_name}</h1> */}
                {/* <img src={data.avatar} alt="img not loaded"></img> */}
                <Card sx={{ justify: 'center', margin: '2% 1%' }}>
                    <Grid container spacing={10} >
                        <Grid item xs={3} style={{ padding: '65px 10px 40px 60px' }}>
                            <Stack direction="row">
                                <Avatar alt="img not loaded" src={data.avatar} sx={{ marginLeft: '20%', width: '60%', height: '140px', borderRadius: '2px 20px' }} />
                                {/* {data.id} */}
                            </Stack>
                            <Stack sx={{ margin: '10px' }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center', wordWrap: 'break-word' }}>
                                    {data.first_name} {data.last_name}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center', wordWrap: 'break-word' }}>
                                    {data.email}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={9} style={{ padding: '60px 80px 40px 30px' }}>
                            {/* <Paper >xs=8</Paper> */}
                            <div className="text-wrapper" style={{ padding: '10px', textAlign: 'justify' }}>
                                <Typography>GlobalData’s clinical trials dashboard is powered by the Medical Intelligence Center, which boasts a highly comprehensive source of Clinical Trials collated from numerous government, non-government and company registries worldwide alongside clinical research publications and scientific conferences. Look no further for free clinical trials data <br />
                                    <p>{loremIpsum({ p: 1 })}</p>
                                </Typography>
                                {/* <LoremIpsum p={2} /> */}
                            </div>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ justify: 'center', margin: '2% 1%' }}>
                    <Grid container spacing={1} style={{ padding: '30px 60px 30px 30px' }}>
                        <Grid item xs={3} >
                            <Typography gutterBottom variant="h6" component="div" sx={{ padding: '10px 10px' }}>
                                Stats.
                            </Typography>
                            <Stack spacing={2} sx={{ padding: '50px 30px 50px 10px' }}>
                                <Item sx={{ backgroundColor: '#ffcc99', height: '80px' }}>
                                    <FontAwesomeIcon style={iconStyles} icon={faDna} />
                                    <span style={spans}>Congenital Health Level<br />93%</span>
                                </Item>
                                <Item sx={{ backgroundColor: '#ccff66', height: '80px' }}>
                                    <FontAwesomeIcon style={iconStyles} icon={faFileWaveform} />
                                    <span style={spans}>Physical & Mental Health Level<br />84%</span>
                                </Item>
                                <Item sx={{ backgroundColor: '#ccffff', height: '80px' }}>
                                    <FontAwesomeIcon style={iconStyles} icon={faClipboardCheck} />
                                    <span style={spans}>Written Consent</span>
                                    <span style={spans}><b>✓</b></span>
                                </Item>
                            </Stack>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography gutterBottom variant="h6" component="div" sx={{ padding: '0 10px' }}>
                                {/* Stats in Highcharts Form */}
                                Growth in Participants Health
                            </Typography>
                            <Card sx={{ padding: '2% 5%' }}>
                                <HighchartsReact highcharts={highcharts} options={options} />
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
                <CardActions>
                    <Link to="/listofparticipants">
                        <Button color="primary">
                            Back
                        </Button>
                    </Link>
                </CardActions>
            </Container >
        </>
    );
}
export default ParticipantsDetails;