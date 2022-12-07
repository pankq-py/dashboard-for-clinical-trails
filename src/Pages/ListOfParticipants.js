import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import MaterialTable from 'material-table';
import { Box, Container, Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import advReport19 from '../Images/advReport19.png';
import advReport20 from '../Images/advReport20.jpg';

export default function ListOfParticipants() {
    // const [tableData, setTableData] = useState()

    const columns = [
        {
            title: 'Avatar', field: 'avatar', render: rowData => (
                <img
                    style={{ height: 36, borderRadius: '50%' }}
                    src={rowData.avatar}
                />
            ),
        },

        { title: "ID", field: "id" },
        { title: "Name", field: "first_name" },
        { title: "Last Name", field: "last_name" },
        { title: "Email", field: "email" },
        { render: rowData => <Link to={`/ListOfParticipants/ParticipantsDetails/${rowData.id}`}>More info!</Link> }
    ]

    return (
        <Container>
            <Box pt={5} pb={5}>
                <MaterialTable
                    columns={columns}
                    // data={tableData}
                    options={{ paging: true, pageSizeOptions: [5, 10, 15, 20] }}
                    data={query =>
                        new Promise((resolve, reject) => {
                            let url = 'https://reqres.in/api/users?'
                            url += 'per_page=' + query.pageSize
                            url += '&page=' + (query.page + 1)
                            fetch(url)
                                .then(response => response.json())
                                .then(result => {
                                    resolve({
                                        data: result.data,
                                        page: result.page - 1,
                                        totalCount: result.total,
                                    })
                                })
                        })
                    }
                    actions={[
                        {
                            icon: () => <VisibilityIcon/>,
                            tooltip: 'View User',
                            onClick: (event, rowData) => {
                                // this.redirectToReport(rowData);
                                console.log("Row Data: ", rowData);
                                <Link to={`/ListOfParticipants/ParticipantsDetails/${rowData.id}`}>More info!</Link>
                            }
                        },
                        rowData => ({
                            icon: 'delete',
                            tooltip: 'Delete User',
                            onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                            disabled: rowData.age <= 25
                        }),
                        {
                            icon: 'add',
                            tooltip: 'Add User',
                            isFreeAction: true,
                            onClick: (event) => alert("You want to add a new row")
                        }
                    ]}
                    title="List of Participants"
                />
            </Box>
            <h4>Here’s what happens in a trial:<br /></h4>
            <Grid container item xs={12} style={{ textAlign: 'justify', margin: '20px 0' }} >
                <Grid item xs={5}>
                    <img src={advReport19} style={{ height: '95%', width: '100%', padding: '0 2% 0 10%' }} />
                </Grid>
                <Grid item xs={6}>
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
            <Grid container item xs={12}>
                <div>
                    <h4>Why to participate in a clinical trial?</h4>
                    <p>There are many reasons why people choose to join a clinical trial. Some join a trial because the treatments they have tried for their health problem did not work. Others participate because there is no treatment for their health problem. By being part of a clinical trial, participants may find out about new treatments before they are widely available. Some studies are designed for, or include, people who are healthy but want to help find ways to prevent a disease, such as one that may be common in their family. </p>
                    <p>Older couple posing with their grandsonMany people say participating in a clinical trial is a way to play a more active role in their own health care. Other people say they want to help researchers learn more about certain health problems. Whatever the motivation, when you choose to participate in a clinical trial, you become a partner in scientific discovery. And, your contribution can help future generations lead healthier lives. Major medical breakthroughs could not happen without the generosity of clinical trial participants—young and old.</p>
                    <h4>Questions to ask before participating in a clinical trial</h4>
                    <p>The following are some questions to ask the research team when thinking about a clinical trial. Write down any questions you might have and bring your list with you when you first meet with the research team.</p>
                </div>
                <Grid item xs={6}>
                    <ul>
                        <li>What is this study trying to find out?</li>
                        <li>What treatment or tests will I have? Will they hurt? Will you give me the test or lab results?</li>
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
                <Grid item xs={6}>
                    <img src={advReport20} style={{ height: '95%', width: '100%', padding: '0 10% 0 10%' }} />
                </Grid>
            </Grid>
        </Container >
    );
}