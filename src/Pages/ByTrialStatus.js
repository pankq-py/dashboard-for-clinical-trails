import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';
import Select from 'react-select';
import { Container, Grid, Card } from '@mui/material';
import advReport5 from '../Images/advReport5.jpg';
import advReport6 from '../Images/advReport6.jpg';
import advReport7 from '../Images/advReport7.jpg';
import advReport8 from '../Images/advReport8.jpg';
import advReport9 from '../Images/advReport9.png';

const ByTrialStatus = () => {

    const catsData = [
        {
            value: 'Completed',
            label: 'Completed',
            y: 662
        }, {
            value: 'Ongoing, Recruiting',
            label: 'Ongoing, Recruiting',
            y: 427
        }, {
            value: 'Ongoing, not Recruiting',
            label: 'Ongoing, not Recruiting',
            y: 223
        }, {
            value: 'Terminated',
            label: 'Terminated',
            catagories: 'abcd',
            y: 213
        }, {
            value: 'Withdrawn',
            label: 'Withdrawn',
            catagories: 'abcd',
            y: 150
        }, {
            value: 'Ongoing, Recruiting by Invition',
            label: 'Ongoing, Recruiting by Invition',
            catagories: 'abcd',
            y: 94
        }, {
            value: 'Suspended',
            label: 'Suspended',
            catagories: 'abcd',
            y: 29
        }
    ]

    const getCatagories = (catsData) => {
        var catagoriesData = [];
        for (let cat in catsData) {
            catagoriesData.push(catsData[cat].value);
        }
        return catagoriesData;
    }

    const [selectedOption, setSelectedOption] = useState(catsData);
    const initialValue = getCatagories(catsData)
    const [selectedCatagories, setSelectedCatagories] = useState(initialValue);

    const filterCatagories = (e) => {
        setSelectedCatagories(getCatagories(e));
    }

    // highcharts information
    const options = {
        title: {
            text: 'Growth in Participants Health'
        },
        subtitle: {
            text: 'Reported in 2021'
        },
        chart: {
            // backgroundColor: "transparent",
            type: 'areaspline',
        },
        series: [{
            name: 'Trial Status',
            data: selectedOption,
            // data: [662, 427, 223, 213, 150, 94, 19],
            color: {
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                stops: [
                    [0, '#ff1a1a'],
                    [1, 'yellow'],
                ]
            }
        }],
        yAxis: {
            title: {
                text: "Percentage of Increase"
            },
            labels: {
                format: "{value}"
            }
        },

        xAxis: {
            title: {
                text: 'Status'
            },
            categories: selectedCatagories
            // categories: ['Completed', 'Ongoing, Recruiting', 'Ongoing, not Recruiting', 'Terminated', 'Withdrawn', 'Ongoing, Recruiting by invition', 'Suspended']
        },
        credits: false,
        exporting: {
            enabled: true
        },
    }


    return (
        <>
            <Container>
                <h1>Advanced Reports By Trial Status with Completion Status</h1>
                <h5>Data shows the observations of each status of clinical trial.</h5>
                <Card sx={{ margin: '2% 0', padding: '2%' }}>
                    <Grid container>
                        <Grid item xs={3} py={9} px={2}>
                            <Select
                                defaultValue={selectedOption}
                                onChange={
                                    e => {
                                        setSelectedOption(e);
                                        filterCatagories(e);
                                    }
                                }
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
                        <Grid container item>
                            <Grid item>
                                <h3 style={{ textAlign: 'center' }}>Questions to ask before participating in a clinical trial</h3>
                                <p>The following are some questions to ask the research team when thinking about a clinical trial. Write down any questions you might have and ing your list with you when you first meet with the research team.</p>
                            </Grid>
                            <Grid item xs={4} >
                                <Grid container item xs={12} >
                                    <Grid container item xs={12}>
                                        <h4>About the trial</h4>
                                    </Grid>
                                    <Grid item xs={7}>
                                        <img src={advReport8} style={{ height: '95%', width: '90%' }} />
                                    </Grid>
                                    <Grid item xs={5} >
                                        <ul>
                                            <li>What is this study trying to find out?</li>
                                            <li>What treatment or tests will I have? Will they hurt? Will you give me the test or lab results?</li>
                                        </ul>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <ul>
                                            <li>What are the chances I will get the experimental treatment or the placebo?</li>
                                            <li>What are the possible risks, side effects, and benefits of the study treatment compared with my current treatment?</li>
                                            <li>How will I know if the treatment is working?</li>
                                            <li>How long will the clinical trial last?</li>
                                            <li>Where will the study take place? Will I have to stay in the hospital?</li>
                                            <li>Will you provide a way for me to get to the study site if I need it, such as a rideshare service?</li>
                                            <li>Can I do any part of the trial with my regular doctor? Is there a closer clinical trial to me?</li>
                                            <li>How will the study affect my everyday life?</li>
                                            <li>What steps ensure my privacy?</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={8} style={{ paddingLeft: '5%' }}>
                                <h4>Medical care</h4>
                                <ul>
                                    <li>How will you protect my health while I am in the study?</li>
                                    <li>What happens if my health problem gets worse during the study?</li>
                                    <li>Can I take my regular medicines while in the trial?</li>
                                    <li>Who will be in charge of my care while I am in the study? Will I be able to see my own doctor?</li>
                                    <li>How will you keep my doctor informed about my participation in the trial?</li>
                                    <li>If I withdraw, will this affect my normal care?</li>
                                </ul>
                                <Grid container item xs={12}>
                                    <h4>Costs and reimbursement</h4>
                                    <ul>
                                        <li>Will being in the study cost me anything? If so, will I be reimbursed for expenses such as travel, parking, or lodging?</li>
                                        <li>Will my insurance pay for costs not covered by the research trial, or will I need to pay out of pocket? If I don't have insurance, am I still eligible to participate?</li>
                                        <li>Will I need a study partner? If so, how long will he or she need to participate? Will my study partner be compensated for his or her time?</li>
                                    </ul>
                                </Grid>
                                <Grid container item xs={12}>
                                    <Grid item xs={6} style={{ padding: '2%' }}>
                                        <img src={advReport7} style={{ height: '95%', padding: '2%', width: '70%' }} />
                                    </Grid>
                                    <Grid item xs={6} >
                                        <h4>After the trial ends</h4>
                                        <ul>
                                            <li>Will you follow up on my health after the end of the study?</li>
                                            <li>Will you tell me the results of the study?</li>
                                            <li>Whom do I call if I have more questions?</li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid container item xs={12}>
                                <h4>Why are older and diverse participants important in clinical trials?</h4>
                            </Grid>
                            <Grid item xs={5} style={{ padding: '0 2%' }}>
                                <img src={advReport5} style={{ height: '93%', width: '100%' }} />
                            </Grid>
                            <Grid item xs={7} style={{ paddingLeft: '5%' }}>
                                <p>It is important for clinical trials to have participants of different ages, sexes, races, and ethnicities. When research involves a group of people who are similar, the findings may not apply to or benefit everyone. When clinical trials include diverse participants, the study results may have a much wider applicability.</p>
                                <p>Researchers need the participation of older people in their clinical trials so that scientists can learn more about how the new drugs, therapies, medical devices, surgical procedures, or tests will work for older people. Many older people have special health needs that are different from those of younger people. For example, as people age, their bodies may react differently to drugs. Older adults may need different dosages (or amounts) of a drug to have the right result. Also, some drugs may have different side effects in older people than younger people. Having seniors enrolled in drug trials helps researchers get the information they need to develop the right treatment for older people.</p>
                            </Grid>
                            <Grid container item xs={12}>
                                <p>Researchers know that it may be hard for some older people to join a clinical trial. For example, if you have many health problems, can you participate in a trial that is looking at only one condition? If you are frail or have a disability, will you be strong enough to participate? If you no longer drive, how can you get to the study site? Talk to the clinical trial coordinator about your concerns. The research team may have already thought about some of the obstacles for older people and have a plan to make it easier for you to take part in the trial.</p>
                            </Grid>
                        </Grid>
                        <Grid container item>
                            <Grid item xs={6}>
                                <h4>What happens when a clinical trial or study ends?</h4>
                                <p>Once a clinical trial or study has ended, the researchers will collect and analyze the data to see what next steps are needed as a result of the findings. As a participant, you should be provided information before the study starts about how long it will last, whether you will continue receiving the study treatment after the trial ends, if applicable, and how you will be kept informed about the results of the study. Be sure to ask if you have specific questions.</p>
                                <Grid container item xs={12}>
                                    <img src={advReport9} style={{ height: '95%', width: '80%' }} />
                                </Grid>
                            </Grid>
                            <Grid item xs={6} style={{ padding: '2% 0 0 5%' }}>
                                <img src={advReport6} style={{ height: '95%', width: '99%' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container >
        </>
    );
}
export default ByTrialStatus;