import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';

// for showing world map
import MapChart from './MapChart';
import ReactTooltip from 'react-tooltip';

import { Container, Grid, Card } from '@mui/material';
import advReport3 from '../Images/advReport3.jpg';
import advReport4 from '../Images/advReport4.jpg';

const ByLocationType = () => {
    // highcharts information
    const options = {
        chart: {
            // backgroundColor: "transparent",
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Clinical Trials by Location Type'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'hand',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Clinical Trials',
            colorByPoint: true,

            data: [{
                name: 'Asia',
                y: 58.44,
                color: '#ff4d4d',
                // selected: true
            }, {
                name: 'Africa',
                y: 17.20,
                color: 'orange',
                // visible: ''
            }, {
                name: 'Europe',
                y: 9.59,
                color: 'yellow',
            }, {
                name: 'North America',
                y: 7.60,
                color: 'green',
            }, {
                name: 'South America',
                y: 5.53,
                color: '#c44dff',
            }, {
                name: 'Australia',
                y: 1.55,
                color: 'cyan',
            }, {
                name: 'Antarctica',
                y: 0.10,
                color: 'voilet',
            }
            ]
        }],
        credits: false,
        exporting: {
            enabled: true
        },
    }
    const [content, setContent] = useState("");
    return (
        <>
            <Container>
                <h1>Advanced Reports Of Clinical Trials By Location Type</h1>
                <h5>Data shows the number of medical device clinical trials by location. See the percentage of continent wise clinical trials.</h5>

                {/* <Card sx={{ margin: '2% 0', padding: '2% 2%' }}>
                    <MapChart setTooltipContent={setContent} />
                    <ReactTooltip>{content}</ReactTooltip>
                </Card> */}

                <Card sx={{ margin: '2% 0', padding: '2% 5%' }}>
                    <HighchartsReact highcharts={highcharts} options={options} />
                </Card>

                <div style={{ textAlign: 'justify' }}>
                    <Grid container spacing={5}>
                        <Grid container item>
                            <Grid item xs={4}>
                                <h4 >Here’s what happens in a trial:</h4>
                                <img src={advReport3} style={{ width: '100%', height: '80%' }} />
                            </Grid>
                            <Grid item xs={8}>
                                <p><br /></p>
                                <ol>
                                    <li>Study staff explain the trial in detail and gather more information about you.</li>
                                    <li>Once you have had all your questions answered and agree to participate, you sign an informed consent form.</li>
                                    <li>You are screened to make sure you qualify for the trial.</li>
                                    <li>If accepted into the trial, you schedule a first visit (called the “baseline” visit). The researchers conduct cognitive and/or physical tests during this visit.</li>
                                    <li>You are randomly assigned to a treatment or control group.</li>
                                    <li>You and your family members follow the trial procedures and report any issues or concerns to researchers.</li>
                                    <li>You may visit the research site at regularly scheduled times for new cognitive, physical, or other evaluations and discussions with staff. At these visits, the research team collects information about effects of the intervention and your safety and well-being.</li>
                                    <li>You continue to see your regular physician for usual health care throughout the study.</li>
                                </ol>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <h4>What is the next step after I find a clinical trial?</h4>
                            <p>Once you find a study that you might want to join, contact the clinical trial or study coordinator. You can usually find this contact information in the description of the study. The first step is a screening appointment to see if you qualify to participate. This appointment also gives you a chance to ask your questions about the study.</p>
                            <p>Let your doctor know that you are thinking about joining a clinical trial. He or she may want to talk to the research team about your health to make sure the study is safe for you and to coordinate your care while you are in the study.</p>
                            <h4>Where can I find a clinical trial?</h4>
                            <p>There are many ways you can get help to find a clinical trial. You can talk to your doctor or other health care provider. Or, you can search ClinicalTrials.gov. You can sign up for a registry or matching service to connect you with trials in your area. Support groups and websites that focus on a particular condition sometimes have lists of clinical studies. Also, you may see ads for trials in your area in the newspaper or on TV.</p>
                        </Grid>
                        <Grid item xs={6}>
                            <h4>How do researchers decide who will participate?</h4>
                            <Grid container item >
                                <Grid item xs={5}>
                                    <p>After you consent, you will be screened by clinical staff to see if you meet the criteria to participate in the trial or if anything would exclude you. The screening may involve cognitive and physical tests. Inclusion criteria for a trial might include age, stage of disease, sex, genetic profile, family history, </p>
                                </Grid>
                                <Grid item xs={7}>
                                    <img src={advReport4} style={{ height: '90%', width: '100%' }} />
                                </Grid>
                                <p>and whether or not you have a study partner who can accompany you to future visits. Exclusion criteria might include factors such as specific health conditions or medications that could interfere with the treatment being tested.</p>
                                <p>Many volunteers must be screened to find enough people for a study. Generally, you can participate in only one trial or study at a time. Different trials have different criteria, so being excluded from one trial does not necessarily mean exclusion from another.</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}
export default ByLocationType;