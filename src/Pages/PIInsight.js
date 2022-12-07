import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';
import { Container, Card } from '@mui/material';
import Grid from '@material-ui/core/Grid';

import pi1 from '../Images/piinsight.jpg';

export default function PIInsight() {
    const options1 = {
        chart: {
            type: 'bar',
            // backgroundColor: 'transparent'
        },
        title: {
            text: 'PI Availiabilty As Per Predictions'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Availability',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' K'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: 'transparent',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 2018',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 2019',
            data: [133, 156, 947, 408, 6]
        }, {
            name: 'Year 2020',
            data: [814, 841, 3714, 727, 31]
        }, {
            name: 'Year 2021',
            data: [1216, 1001, 4436, 738, 40]
        }],
        exporting: {
            enabled: true
        },
    }
    const options2 = {
        chart: {
            type: 'column',
            // backgroundColor: 'transparent'
        },
        title: {
            text: 'PI Availiabilty In Different Projects'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['PROVE-IT TIMI 22', 'ALMANAC', 'PARAMOUNT trial', 'JUPITER trial', 'ASTEROID trial'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Availability',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' PI'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: 'transparent',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Done',
            data: [107, 31, 635, 903, 92]
        }, {
            name: 'In Progress',
            data: [133, 156, 947, 808, 116]
        }, {
            name: 'Pending',
            data: [814, 841, 1714, 727, 531]
        }, {
            name: 'Failed',
            data: [1016, 1001, 1436, 738, 440]
        }],
        exporting: {
            enabled: true
        },
    }
    return (
        <>
            <Container>
                {/* <h1>This is Sample PI Availability Page.</h1> */}
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <div >
                            <h1 style={{ padding: '10px' }}>
                                Principal Investigators
                            </h1>
                            <p style={{ padding: '10px' }}>
                                The principal investigator (PI) is usually the author
                                of the protocol document and is the person who is primarily
                                responsible for ensuring that the trial is conducted according
                                to good clinical practices.
                                <br />
                                The person(s) in charge of a clinical trial or a scientific research grant. The principal investigator prepares and carries out the clinical trial protocol (plan for the study) or research paid for by the grant. The principal investigator also analyzes the data and reports the results of the trial or grant research.
                                <br />
                                A Principal Investigator or PI is the individual responsible for the preparation, conduct, and administration of a research grant, cooperative agreement, training or public service project, contract, or other sponsored project.
                            </p>

                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <img src={pi1} style={{ height: '99%', width: '100%', padding: '10%' }} />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card sx={{ padding: '5%', margin: '5% 0' }}>
                            <HighchartsReact highcharts={highcharts} options={options1} />
                        </Card>
                        <br />
                        <h2  >South America’s AD Clinical Trials
                            Experience
                        </h2>
                        <p style={{ textAlign: 'justify' }}>
                            13.7 Investigator Profile
                            <br />
                            Most principal investigators and sub-investigators in South America have completed their medical
                            training in the USA or Europe, often including exposure to clinical trial participation. As a
                            result, to qualify to conduct clinical trials these investigators generally only need training in
                            GCPs and consultation to ensure that facilities are appropriate [4].

                            Within the medical community, awareness and adoption of GCPs and ICH guidance are widespread.
                            Principal investigators must comply with certain requirements (e.g., licenses and training) before
                            receiving authorization to act as a principal investigator.

                            In Argentina, several private (e.g., Universidad Austral) and public (e.g., Universidad de Buenos
                            Aires) universities, as well as non-profit organizations such as SAMEFA (Argentinean Medical
                            Association of the Pharmaceutical Industry, www.samefa.org.ar) and FECICLA (Foundation for Clinical
                            Research’s Ethics and Quality, www.fecicla.org.ar), offer clinical trial training programs for site
                            staff, clinical research associates, and ethics committees.

                            In Brazil, the SBMF (Brazilian Medical Society of Pharmaceutical Medicine, www.sbmf.org.br) as well
                            as some other non-profit organizations like the SBPPC (Brazilian Society of Clinical Research
                            Professionals, www.sbppc.org.br) and the newly created SOBEPEC (Brazilian Society of Clinical
                            Research Nurses, www.sobepec.com.br) play significant roles in training activities. Sites must
                            establish that they have the facilities required to conduct a specific trial, as specified in
                            ANVISA’s norm number 4 (local regulation). Local ethics committees must be registered and approved
                            in CONEP (Comissão Nacional de Ética em Pesquisa); all universities have their own local ethics
                            committee and the time necessary to analyze protocols is around 60 to 90 days. Our centers have
                            being participating in clinical trials in II, III and IV phases.
                        </p>
                        <br />
                        <h1  >Data Management in Clinical Trials</h1>
                        <p style={{ textAlign: 'justify' }}>
                            Diane C. St. Germain, in
                            <span
                                data-aa-region="aa-tp-snippet-bk-title"
                                data-aa-name="Principles and Practice of Clinical Research (Third Edition)">
                                <span> Principles and Practice of Clinical Research (Third
                                    Edition)
                                </span>
                            </span>, 2012
                            <br />
                            <br />
                            Principal Investigator
                            <br />
                            The PI is responsible for all aspects of the clinical trial including the ethical conduct of
                            research, eligibility of enrolled patients, protocol adherence, adverse events reporting and the
                            reporting of timely and accurate data. The PI determines the efficacy of the study agent or
                            intervention and determines whether an adverse event is study related. The PI can delegate some of
                            these tasks to qualified personnel but she/he is the person ultimately responsible and accountable
                            to the sponsor and funding agency. The PI signs the Statement of the Investigator, Food and Drug
                            Administration (FDA) Form 1572, the agreement showing compliance with FDA regulations in the use of
                            an investigational agent. Stone1 aptly refers to the 1572 as a marriage contract between the
                            investigator and the sponsor whereby the PI vows to comply with the Code of Federal Regulations (21
                            CFR part 312). She states, “Violating these vows can be worse than divorce. Serious violations can
                            result in an investigator’s being prohibited from participating in further clinical trials.” The
                            seriousness of this marriage contract is conveyed in the document itself whereby it states, “A
                            willfully false statement is a criminal offense.”2 The FDA website maintains a list of physicians
                            prohibited from participating in clinical trials as well as a list of noncompliance with the CFR.
                        </p>
                        <br />


                        <h3 style={{ fontSize: '30px' }}>Insights gained from conducting a
                            randomised controlled trial on Ivermectin-Albendazole against Trichuris trichiura in Côte d'Ivoire,
                            Lao PDR and Pemba Island</h3>
                        <p style={{ textAlign: 'justify' }}>
                            Ladina Keller, ... Jennifer Keiser, in
                            <br />

                            2.2 Trial management team
                            <br />
                            The Swiss-based Principal Investigator (PI) and Co-PI were responsible for the international
                            oversight of all three trials, while additional local Co-PIs were responsible for the individual
                            country requirements. Swiss-based PhD students worked as trial site coordinators during trial
                            screening, enrolment, treatment and follow-up with the help of the respective local Co-PI, who was
                            responsible for recruiting and coordinating local staff (e.g. laboratory technicians). We
                            collaborated with the following three institutions: the Centre Suisse de Recherches Scientifiques
                            (CSRS) en Côte d'Ivoire based in Abidjan, the Lao Tropical and Public Health Institute (Lao TPHI),
                            located in the capital Vientiane and the Public Health Laboratory-Ivo de Carneri (PHL-IdC) in Chake
                            Chake, Pemba.
                        </p>
                    </Grid >
                    <Grid item xs={1}></Grid>
                    <Grid item xs={5}>
                        <h1>Data Management in Clinical Trials</h1>
                        <p style={{ textAlign: 'justify' }}>
                            ANNE TOMPKINS, in

                            <br />
                            Principal Investigator
                            <br />
                            Principles and Practice of Clinical Research(Second Edition), 2007

                            1.2 Principal Investigator
                            The principal investigator(PI) is usually the author of the protocol document and is the person who
                            is primarily responsible for ensuring that the trial is conducted according to good clinical
                            practices.The investigator signs the Statement of the Investigator, FDA Form 1572, which is an
                            agreement to comply with FDA regulations in the use of the investigational agent.In addition, the
                            PI also agrees to conduct the trial according to the written protocol, obtain approval of the
                            institutional review board(IRB) prior to initiating the trial and at any time the protocol is
                            amended, maintain adequate records of the trial, protect subjects through the informed consent
                            process, and notify the sponsor and the IRB of adverse events.Although the investigator can
                            delegate authority to other members of the team to perform various functions, the ultimate
                            responsibility for the study cannot be delegated.The PI has the final responsibility for the
                            conduct of the trial and must instruct all members of the research team of their responsibilities in
                            the conduct of the trial.

                            South America’s AD Clinical Trials Experience
                            Ricardo F.Allegri, ... Ricardo Nitrini, in Global Clinical Trials for Alzheimer's Disease, 2014

                            13.7 Investigator Profile
                            Most principal investigators and sub - investigators in South America have completed their medical
                            training in the USA or Europe, often including exposure to clinical trial participation.As a
                            result, to qualify to conduct clinical trials these investigators generally only need training in
                            GCPs and consultation to ensure that facilities are appropriate[4].

                            Within the medical community, awareness and adoption of GCPs and ICH guidance are widespread.
                            Principal investigators must comply with certain requirements(e.g., licenses and training) before
                            receiving authorization to act as a principal investigator.

                            In Argentina, several private(e.g., Universidad Austral) and public(e.g., Universidad de Buenos
                            Aires) universities, as well as non - profit organizations such as SAMEFA (Argentinean Medical
                            Association of the Pharmaceutical Industry, www.samefa.org.ar) and FECICLA(Foundation for Clinical
                            Research’s Ethics and Quality, www.fecicla.org.ar), offer clinical trial training programs for site
                            staff, clinical research associates, and ethics committees.

                            In Brazil, the SBMF(Brazilian Medical Society of Pharmaceutical Medicine, www.sbmf.org.br) as well
                            as some other non - profit organizations like the SBPPC(Brazilian Society of Clinical Research
                            Professionals, www.sbppc.org.br) and the newly created SOBEPEC(Brazilian Society of Clinical
                            Research Nurses, www.sobepec.com.br) play significant roles in training activities.Sites must
                            establish that they have the facilities required to conduct a specific trial, as specified in
                            ANVISA’s norm number 4(local regulation).Local ethics committees must be registered and approved
                            in CONEP(Comissão Nacional de Ética em Pesquisa); all universities have their own local ethics
                            committee and the time necessary to analyze protocols is around 60 to 90 days.Our centers have
                            being participating in clinical trials in II, III and IV phases.
                        </p >
                        <Card sx={{ padding: '5%', margin: '5% 0' }}>
                            <HighchartsReact highcharts={highcharts} options={options2} />
                        </Card>
                        <h2>Experiments With Participants
                        </h2>
                        <p style={{ textAlign: 'justify' }}>
                            Who Is Involved in the Experiment?
                            Two kinds of people are involved in an experiment: the investigator and the participants.

                            The Investigator
                            The principal investigator of an experiment must be a permanent researcher in the lab, which means
                            that this person is accountable for the experiment even if it is actually conducted by a Ph.D.
                            student, for example. The investigator’s (or experimenter’s) behavior, vocabulary, and nonverbal
                            language during the experiment may not be neutral as far as the participants’ behaviors and
                            performance in the experiment are concerned.

                            The Participants
                            As participants are needed to conduct the experiment, who can be recruited and how they will be
                            recruited have to be specified. Neither of these is ethically neutral.

                            <li>
                                Who can be recruited: inclusion and exclusion criteria must be clearly stated, e.g., only
                                right-handed participants with no hearing problems are invited to take part. This raised two
                                issues:
                                the criteria may be intrusive, so an aggregation of criteria may be relevant to avoid any
                                emphasis
                                on a particular ability or inability; and how the criteria are assessed—is it a mere statement
                                of
                                the participant, or an affidavit, or are the criteria checked by some means, e.g., a hearing
                                test?
                                In the latter case, who performs the test and the way the results of the test are processed may
                                raise ethical or even legal issues (for instance, illegal practice of medicine).
                            </li>
                            <li>
                                The way participants are recruited (online or newspaper advert, notice, flyer, email, etc.) and
                                the
                                targeted population for the advertisement (people in the street, office colleagues, students at
                                the
                                university, etc.) may not be neutral as far as experimental results are concerned because, for
                                example, all the participants may share common features (age, education, knowledge of the
                                research
                                being conducted, etc.), which may introduce a bias in the results.
                            </li>
                        </p>
                        <br />

                    </Grid >
                </Grid >
            </Container >
        </>
    )
}
