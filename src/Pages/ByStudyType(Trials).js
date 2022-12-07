import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Select from 'react-select';
import highcharts from 'highcharts';
import drilldown from "highcharts/modules/drilldown.js";
drilldown(highcharts);
import { Container, Grid, Card } from '@mui/material';
import advReport10 from '../Images/advReport10.jpg';
import advReport11 from '../Images/advReport11.jpg';
import advReport12 from '../Images/advReport12.jpg';
import advReport13 from '../Images/advReport13.png';
import advReport14 from '../Images/advReport14.png';
import advReport15 from '../Images/advReport15.png';
import advReport16 from '../Images/advReport16.png';
import advReport17 from '../Images/advReport17.png';
import advReport18 from '../Images/advReport18.png';

const ByStudyType = () => {
    const catsData = [{
        value: 'Observational',
        label: 'Observational',
        name: 'Observational',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 30434, 24377, 32147, 33123],
        drilldownName: 'Animals',
        drilldown: true,
    }, {
        value: 'Interventional',
        label: 'Interventional',
        name: 'Interventional',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 30147, 39387, 41248, 38989, 30213],
        drilldown: 'Interventional',
    }, {
        value: 'Qualitative',
        label: 'Qualitative',
        name: 'Qualitative',
        data: [12908, 5948, 11744, 17722, 8105, 11248, 16989, 15816, 18274, 18111, 31667],
        drilldown: 'Qualitative',
    }]

    const [selectedOption, setSelectedOption] = useState(catsData);


    // highcharts information
    const options = {
        chart: {
            backgroundColor: "transparent",
        },

        events: {
            drilldown: function (e) {
                if (!e.seriesOptions) {
                    var chart = this,
                        drilldowns = {
                            'Animals': {
                                name: 'Animals',
                                data: [
                                    ['Cows', 2],
                                    ['Sheep', 3]
                                ]
                            },
                            'Animals2': {
                                name: 'Animals',
                                color: Highcharts.getOptions().colors[1],
                                data: [
                                    ['Cows', 22],
                                    ['Sheep', 13]
                                ]
                            },
                            'Fruits': {
                                name: 'Fruits',
                                data: [
                                    ['Apples', 5],
                                    ['Oranges', 7],
                                    ['Bananas', 2]
                                ]
                            },
                            'Fruits2': {
                                name: 'Fruits',
                                color: 'red',
                                data: [
                                    ['Apples', 15],
                                    ['Oranges', 17],
                                    ['Bananas', 22]
                                ]
                            },
                            'Cars': {
                                name: 'Cars',
                                data: [
                                    ['Toyota', 1],
                                    ['Volkswagen', 2],
                                    ['Opel', 5]
                                ]
                            },
                            'Cars2': {
                                name: 'Cars',
                                color: '#bada55',
                                data: [
                                    ['Toyota', 11],
                                    ['Volkswagen', 21],
                                    ['Opel', 15]
                                ]
                            }
                        },
                        series = [drilldowns[e.point.drilldownName], drilldowns[e.point.drilldownName + '2']];
                    chart.addSingleSeriesAsDrilldown(e.point, series[0]);
                    chart.addSingleSeriesAsDrilldown(e.point, series[1]);
                    chart.applyDrilldown();
                }

            }
        },

        title: {
            text: 'Advanced Reports by Study Type'
        },

        subtitle: {
            text: 'from 2011 to 2021'
        },

        yAxis: {
            title: {
                text: 'Clinical Trial Study Types'
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2011 to 2021'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2011
            }
        },

        // series: selectedOption,
        series: [{
            name: 'Things1',
            data: [{
                name: 'Animals 1',
                y: 0,
                x: 1,
                drilldownName: 'Animals',
                drilldown: true
            }, {
                name: 'Animal 2',
                y: 2,
                x: 2,
                drilldownName: 'Animals',
                drilldown: true
            }, {
                name: 'Animal 3',
                y: 1,
                x: 3,
                drilldownName: 'Animals',
                drilldown: true
            }]
        }, {
            name: 'Things2',
            data: [{
                name: 'Fruit 1',
                y: 3,
                x: 1,
                drilldownName: 'Fruits',
                drilldown: true
            }, {
                name: 'Fruit 2',
                y: 4,
                x: 2,
                drilldownName: 'Fruits',
                drilldown: true
            }, {
                name: 'Fruit 3',
                y: 5,
                x: 3,
                drilldownName: 'Fruits',
                drilldown: true
            }]
        }, {
            name: 'Things3',
            data: [{
                name: 'Car 3',
                y: 6,
                x: 1,
                drilldownName: 'Cars',
                drilldown: true
            }, {
                name: 'Car 2',
                y: 7,
                x: 2,
                drilldownName: 'Cars',
                drilldown: true
            }, {
                name: 'Car 1',
                y: 8,
                x: 3,
                drilldownName: 'Cars',
                drilldown: true
            }]
        }],

        drilldown: {
            series: []
        },
        // drilldown: {
        //     breadcrumbs: {
        //         position: {
        //             align: 'right'
        //         }
        //     },
        //     series: [
        //         {
        //             name: "Observational",
        //             id: "Observational",
        //             data: [{
        //                 'Animals': {
        //                     name: 'Animals',
        //                     data: [
        //                         ['Cows', 2],
        //                         ['Sheep', 3]
        //                     ]
        //                 },
        //             },
        //             [
        //                 "v64.0",
        //                 1.3
        //             ],
        //             [
        //                 "v63.0",
        //                 3.02
        //             ],
        //             [
        //                 "v62.0",
        //                 1.4
        //             ],
        //             [
        //                 "v61.0",
        //                 0.88
        //             ],
        //             [
        //                 "v60.0",
        //                 0.56
        //             ],
        //             [
        //                 "v59.0",
        //                 0.45
        //             ],
        //             [
        //                 "v58.0",
        //                 0.49
        //             ],
        //             [
        //                 "v57.0",
        //                 0.32
        //             ],
        //             [
        //                 "v56.0",
        //                 0.29
        //             ],
        //             ]
        //         },
        //         {
        //             name: "Interventional",
        //             id: "Interventional",
        //             data: [
        //                 [
        //                     "v58.0",
        //                     1.02
        //                 ],
        //                 [
        //                     "v57.0",
        //                     7.36
        //                 ],
        //                 [
        //                     "v56.0",
        //                     0.35
        //                 ],
        //                 [
        //                     "v55.0",
        //                     0.11
        //                 ],
        //                 [
        //                     "v54.0",
        //                     0.1
        //                 ],
        //                 [
        //                     "v52.0",
        //                     0.95
        //                 ],
        //                 [
        //                     "v51.0",
        //                     0.15
        //                 ],
        //                 [
        //                     "v50.0",
        //                     0.1
        //                 ],
        //                 [
        //                     "v48.0",
        //                     0.31
        //                 ],
        //                 [
        //                     "v47.0",
        //                     0.12
        //                 ]
        //             ]
        //         },
        //         {
        //             name: "Qualitative",
        //             id: "Qualitative",
        //             data: [
        //                 [
        //                     "v11.0",
        //                     6.2
        //                 ],
        //                 [
        //                     "v10.0",
        //                     0.29
        //                 ],
        //                 [
        //                     "v9.0",
        //                     0.27
        //                 ],
        //                 [
        //                     "v8.0",
        //                     0.47
        //                 ]
        //             ]
        //         },
        //     ]
        // },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }
    return (
        <>
            <Container >
                {/* <h1>This is Sample By Study Type Component</h1> */}
                <h1>Advanced Reports By Study Types</h1>
                <h5>Data shows the observations of 3 types of clinical trial.</h5>
                {/* <Card sx={{ margin: '2% 0', padding: '2%' }}>
                    <HighchartsReact highcharts={highcharts} options={options} />
                </Card> */}
                <Card sx={{ margin: '2% 0', padding: '2%' }}>
                    <Grid container>
                        <Grid item xs={3} py={15} px={4}>
                            <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={catsData}
                                isMulti
                                closeMenuOnSelect={false}
                                // hideSelectedOptions={false}
                                allowSelectAll={true}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <HighchartsReact highcharts={highcharts} options={options} />
                        </Grid>
                    </Grid>
                </Card>
                <div style={{ textAlign: 'justify' }}>
                    <Grid container spacing={5}>
                        <Grid container item xs={12}>
                            <Grid item xs={7}>
                                <h3>There are 3 types of clinical trial <br /></h3>
                                <div>
                                    <h4>Observational</h4>
                                    <p> An observational study involves no new treatments and solely the observation of your current state. It might include: </p>
                                    <ol>
                                        <li>Samples being taken, such as blood</li>
                                        <li>Measurements being taken</li>
                                        <li>An interview or questionnaire</li>
                                    </ol>
                                </div>
                                <div>
                                    <h4>Interventional</h4>
                                    <p>Interventional studies involve receiving a new treatment, for example physiotherapy or new drug, to assess the impacts. These studies are generally:</p>
                                    <ol>
                                        <li>'Placebo controlled' – some receive the treatment and others do not.</li>
                                        <li>'Double blind' – neither the researchers nor patient know nether the patient has received the real treatment or the placebo until the end of the study.</li>
                                        <li>'Randomised' – neither the patient nor researchers choose whether the patient gets the real treatment or the placebo.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h4>Qualitative</h4>
                                    <p>Qualitative research aims to understand more about people's experience of living with a condition. This type of research involves being asked questions or having an open discussion. You might be asked questions about anxiety, pain, or of doing day-to-day activities, for example. The research team will try to identify patterns to understand the issues faced by people living with scleroderma, and ways to tackle them.</p>
                                </div>
                                <div>
                                    <img src={advReport10} style={{ height: '95%', width: '100%' }} />
                                </div>
                            </Grid>
                            <Grid item xs={5}><img src={advReport11} style={{ height: '96%', width: '95%', paddingLeft: '15%' }} /></Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid container item xs={12}>
                            <div>
                                <h2 style={{ textAlign: 'center' }}>Phases of clinical trials</h2>
                            </div>
                            <Grid container item xs={12}>
                                <Grid item xs={5}>
                                    <img src={advReport12} style={{ height: '95%', width: '95%' }} />
                                </Grid>
                                <Grid item xs={7}>
                                    <div>
                                        <h5>What are trial phases?</h5>
                                        <p>Clinical trials testing new treatments are divided into different stages, called phases. The earliest phase trials may look at whether a drug is safe or the side effects it causes. Later phase trials aim to test whether a new treatment is better than existing treatments.</p>
                                        <p>There are 3 main phases of clinical trials – phases 1 to 3. Phase 1 trials are the earliest phase trials and phase 3 are later phase trials. </p>
                                        <p>Some trials have an earlier stage called phase 0, and there are some phase 4 trials done after a drug has been licensed.</p>
                                        <p>Some trials are randomised. This means the people taking part are put into one of the treatment groups at random. Doing this means the results are more reliable.</p>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container item xs={12}>
                                <Grid item xs={7}>
                                    <div>
                                        <h4>Phases 0 trials</h4>
                                        <p>Phase 1 trials are usually the earliest trials of drugs in people. But your doctor might ask if you would like to join a phase 0 study. These studies aim to find out if a drug behaves in the way researchers expect it to from their laboratory studies</p>
                                        <p>Phase 0 studies usually only involve a small number of people and they only have a very small dose of a drug. The dose of the drug is too small to treat your cancer, but you are also less likely to have side effects.</p>
                                        <p>Phase 0 trials aim to find out things such as
                                            <ul>
                                                <li>whether the drug reaches the cancer cells</li>
                                                <li>what happens to the drug in the body</li>
                                                <li>how cancer cells in the body respond to the drug</li>
                                            </ul>
                                        </p>
                                    </div>
                                </Grid>
                                <Grid item xs={5}>
                                    <img src={advReport14} style={{ height: '100%', padding: '0 10% 10% 20%', width: '90%' }} />
                                </Grid>
                            </Grid>
                            <div>
                                <h4>Phases 1 trials</h4>
                            </div>
                            <Grid container item xs={12}>
                                <Grid item xs={4}>
                                    <img src={advReport15} style={{ height: '98%', padding: '5% 5% 5% 20%', width: '90%' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <div>
                                        <p>Phase 1 is sometimes written as phase I. They are usually small trials, recruiting only a few patients. The trial may be open to people with any type of advanced cancer, usually those who have already had all other available treatments.</p>
                                        <p>
                                            Phase 1 trials aim to find out:
                                            <ul>
                                                <li>how much of the drug is safe to give</li>
                                                <li>what the side effects are</li>
                                                <li>what happens to the drug in the body</li>
                                                <li>if the treatment helps shrink the cancer</li>
                                            </ul>
                                        </p>
                                        <p>Patients are recruited very slowly onto phase 1 trials. So even though they don't recruit many people, they can take a long time to complete. </p>
                                        <p>They are often dose escalation studies. This means that the first few patients that take part have a very small dose of the drug. If all goes well, the next few people have a slightly higher dose. And so on until they find the best dose to give. The researchers monitor the side effects people have and how they feel. </p>
                                    </div>
                                </Grid>
                                <div>
                                    <p>In a phase 1 trial you may have lots of blood tests because the researchers look at how your body copes with and gets rid of the drug. They carefully record any side effects you may have and when you have them.</p>
                                    <p>The main aim of phase 1 trials is to find out about doses and side effects. They need to do this first, before testing the potential new treatment to see if it works. Some people taking part may benefit from the new treatment, but many won't.</p>
                                </div>
                            </Grid>
                            <div>
                                <h4>Phases 2 trials</h4>
                            </div>
                            <Grid container item xs={12}>
                                <Grid item xs={4}>
                                    <img src={advReport16} style={{ height: '98%', padding: '0 5% 5% 20%', width: '90%' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <div>
                                        <p>Phase 2 is sometimes written as phase II. Not all treatments tested in a phase 1 trial make it to a phase 2 trial.</p>
                                        <p>These trials can be for people who all have the same type of cancer, or for people who have different types of cancer.</p>
                                        <p>Phase 2 trials aim to find out:
                                            <ul>
                                                <li>if the new treatment works well enough to be tested in a larger phase 3 trial</li>
                                                <li>which types of cancer the treatment works for</li>
                                                <li>more about side effects and how to manage them</li>
                                                <li>more about the best dose to give</li>
                                            </ul>
                                        </p>
                                        <p>These treatments have been tested in phase 1 trials, but you may still have side effects that the doctors don't know about. Treatments can affect people in different ways.</p>
                                    </div>
                                </Grid>
                                <p>Phase 2 trials are usually larger than phase 1. There may be up to 100 or so people taking part. Sometimes in a phase 2 trial, a new treatment is compared with another treatment already in use, or with a dummy drug </p>
                                <p>Some phase 2 trials are randomised. This means the researchers put the people taking part into treatment groups at random.</p>
                            </Grid>
                            <div>
                                <h4>Phases 3 trials</h4>
                            </div>
                            <Grid container item xs={12}>
                                <div>
                                    <p>Phase 3 is sometimes written as phase III. These trials compare new treatments with the best currently available treatment (the standard treatment).</p>
                                </div>
                                <Grid item xs={8}>

                                    <div>
                                        <p>Phase 3 trials aim to find out:
                                            <ul>
                                                <li>which treatment works better for a particular type of cancer</li>
                                                <li>more about the side effects</li>
                                                <li>how the treatment affects people’s quality of life</li>
                                            </ul>
                                        </p>

                                        <p>They may compare standard treatment with:
                                            <ul>
                                                <li>a completely new treatment </li>
                                                <li>different doses of the same treatment</li>
                                                <li>having the same treatment more, or less, often</li>
                                                <li>a new way of giving a standard treatment (radiotherapy for example)</li>
                                            </ul>
                                        </p>
                                        <p>Phase 3 trials usually involve many more patients than phase 1 or 2. This is because differences in success rates may be small.</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={advReport17} style={{ height: '100%', padding: '0 5% 5% 20%', width: '90%' }} />
                                </Grid>
                                <div>
                                    <p>So, the trial needs many patients to be able to show the difference.</p>
                                    <p>Sometimes phase 3 trials involve thousands of people in many different hospitals and even different countries. Most phase 3 trials are randomised. This means the people taking part are put into treatment groups at random. See our information about randomised trials.</p>
                                </div>
                            </Grid>
                            <div>

                                <h4>Phases 4 trials</h4>
                            </div>
                            <Grid container item xs={12}>

                                <Grid item xs={8}>
                                    <div>
                                        <p>Phase 4 is sometimes written as phase IV. These trials are done after a drug has been shown to work and has been licenced.</p>
                                        <p>
                                            Phase 4 trials aim to find out:
                                            <ul>
                                                <li>more about the side effects and safety of the drug</li>
                                                <li>what the long term risks and benefits are</li>
                                                <li>how well the drug works when it’s used more widely</li>
                                            </ul>
                                        </p>
                                    </div>
                                    <div>
                                        <h4>Trials covering more than one phase</h4>
                                        <p>Most trials are just one phase. But some trials cover more than one phase. For example, the same trial can include both phase 1 and phase 2. So you may see trials written as phase 1/2 or phase 2/3.</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={advReport18} style={{ height: '100%', padding: '0 5% 5% 20%', width: '90%' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}
export default ByStudyType;