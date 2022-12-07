import React, { useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Select from 'react-select';
import highcharts, { chart } from 'highcharts';
import { Container, Grid, Card } from '@mui/material';
import advReport1 from '../Images/advReport1.png';
import advReport2 from '../Images/advReport2.jpg';

const ByClinicalTrials = () => {
    const [visibility, setVisibility] = useState([true, true, true, true, true, true, true, true, true, true])

    // highcharts information
    const options = {
        title: {
            text: 'Top Categories by Clinical Trials'
        },
        subtitle: {
            text: 'Reported in 2021'
        },
        chart: {
            backgroundColor: "transparent",
            type: 'column',
        },

        yAxis: {
            title: {
                text: "Number of Medical Device"
            },
            labels: {
                format: "{value}K"
            }
        },

        xAxis: {
            // title: {
            //     text: 'In Vitro Diagnostics'
            // },
            categories: ['Infectious Disease', 'Genetic Testing', 'Oncology', 'Immuno Chemistry', 'IVD Analyzers and Reagents', 'Instruments', 'Clinical Chemistry', "Women's Health", 'Hematological Disorders', 'Hematology']
        },
        series: [{
            name: 'In Vitro Diagnostics',
            // color: 'orange',
            color: {
                linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                stops: [
                    [0, '#FDFC47'],
                    [1, '#e7e9bb'],
                ]
            },
            data: selectedOption,
                // [
                //     {
                //         label: 'Infectious Disease',
                //         y: 1214,
                //     }, {
                //         label: 'Genetic Testing',
                //         y: 1015,
                //     }, {
                //         label: 'Oncology',
                //         y: 984,
                //     }, {
                //         label: 'Immuno Chemistry',
                //         y: 509,
                //     }, {
                //         label: 'IVD Analyzers and Reagents',
                //         y: 431,
                //     }, {
                //         label: 'Instruments',
                //         y: 361,
                //     }, {
                //         label: 'Clinical Chemistry',
                //         y: 140,
                //     }, {
                //         label: "Women's Health",
                //         y: 95,
                //     }, {
                //         label: 'Hematological Disorders',
                //         y: 90,
                //     }, {
                //         label: 'Hematology',
                //         y: 85,
                //     },
                // ],

        }]
    }


    // console.log(props.value);
    const filterData = () => {
        // let visibilityValue = options['series'][0].data;
        // console.log(visibilityValue[1].visible);
        // // visibilityValue[1].visible = true;
        // // console.log('updated to true');
        // console.log(visibilityValue[1].visible = visibility);
        // setVisibility(visibilityValue[1].visible = true)


        console.log("test");
        // var checkbox = document.querySelector("input[name=checkbox]");
        // checkbox.addEventListener('change', function () {
        //     if (this.checked) {
        //         // console.log("Checkbox is checked..");
        //         setVisibility(true);
        //     } else {
        //         // console.log("Checkbox is not checked..");
        //         setVisibility(false);
        //     }
        // });

        // var e = document.getElementById("ddlViewBy");
        // var index = e.value - 1;
        // console.log("index = " + index);

        // const visibilityArray = [true, true, true, true, true, true, true, true, true, true]
        // if (visibilityArray[index] == true) {
        //     visibilityArray[index] = false;
        //     console.log("if");
        //     setVisibility(visibilityArray);
        // } else {
        //     // setVisibility(visibilityArray);
        //     visibility[index] = true;
        //     console.log("else");
        // }
        console.log(selectedOption);

    }
    // const changed = () => {
    //     // console.log("selected value changed.")
    //     var e = document.getElementById("ddlViewBy");
    //     var index = e.value;
    //     console.log("index = " + index);
    // }

    // const selected = () => {
    //     //Create an Array.
    //     var selected = new Array();

    //     //Reference the Table.
    //     var tblFruits = document.getElementById("tblFruits");

    //     //Reference all the CheckBoxes in Table.
    //     var chks = tblFruits.getElementsByTagName("INPUT");

    //     // Loop and push the checked CheckBox value in Array.
    //     for (var i = 0; i < chks.length; i++) {
    //         if (chks[i].checked) {
    //             selected.push(chks[i].value);
    //         }
    //     }
    //     //Display the selected CheckBox values.
    //     if (selected.length > 0) {
    //         alert("Selected values: " + selected.join(","));
    //     }
    // }

    // const catsData = [
    //     { value: 'Infectious Disease', label: 'Infectious Disease' },
    //     { value: 'Genetic Testing', label: 'Genetic Testing' },
    //     { value: 'Oncology', label: 'Oncology' },
    //     { value: 'Immuno Chemistry', label: 'Immuno Chemistry' },
    //     { value: 'IVD Analyzers and Reagents', label: 'IVD Analyzers and Reagents' },
    //     { value: 'Instruments', label: 'Instruments' },
    //     { value: 'Clinical Chemistry', label: 'Clinical Chemistry' },
    //     { value: "Women's Health", label: "Women's Health" },
    //     { value: 'Hematological Disorders', label: 'Hematological Disorders' },
    //     { value: 'Hematology', label: 'Hematology' }
    // ];

    const catsData = [
        {
            value: 'Infectious Disease',
            label: 'Infectious Disease',
            y: 1214,
        }, {
            value: 'Genetic Testing',
            label: 'Genetic Testing',
            y: 1015,
        }, {
            value: 'Oncology',
            label: 'Oncology',
            y: 984,
        }, {
            value: 'Immuno Chemistry',
            label: 'Immuno Chemistry',
            y: 509,
        }, {
            value: 'IVD Analyzers and Reagents',
            label: 'IVD Analyzers and Reagents',
            y: 431,
        }, {
            value: 'Instruments',
            label: 'Instruments',
            y: 361,
        }, {
            value: 'Clinical Chemistry',
            label: 'Clinical Chemistry',
            y: 140,
        }, {
            value: "Women's Health",
            label: "Women's Health",
            y: 95,
        }, {
            value: 'Hematological Disorders',
            label: 'Hematological Disorders',
            y: 90,
        }, {
            value: 'Hematology',
            label: 'Hematology',
            y: 85,
        },
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <Container>
                <h1>Advanced Reports Of Top Categories By Clinical Trials</h1>
                <h5>Data shows the number of medical device clinical trial by In Vitro Diagnostics.</h5>
                <button onClick={filterData}>Click me</button>

                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={catsData}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    allowSelectAll={true}
                // >
                //     <input
                //         type="checkbox"
                //         // checked={props.isSelected}
                //         onChange={() => null}
                />
                {/* </Select> */}

                {/* <select id="ddlViewBy" onChange={changed}>
                    <option value="1"><input id="chkMango" type="checkbox" value="1" /><label>Mango</label></option>
                    <option value="2">test2</option>
                    <option value="3">test3</option>
                </select> */}

                {/* <table id="tblFruits">
                    <tr>
                        <td><input id="chkMango" type="checkbox" value="1" /><label>Mango</label></td>
                    </tr>
                    <tr>
                        <td><input id="chkApple" type="checkbox" value="2" /><label>Apple</label></td>
                    </tr>
                    <tr>
                        <td><input id="chkBanana" type="checkbox" value="3" /><label>Banana</label></td>
                    </tr>
                    <tr>
                        <td><input id="chkGuava" type="checkbox" value="4" /><label>Guava</label></td>
                    </tr>
                    <tr>
                        <td><input id="chkOrange" type="checkbox" value="5" /><label>Orange</label></td>
                    </tr>
                </table> 
                <br />
                <input type="button" value="Get" onClick={selected} />
                */}
                <Card sx={{ margin: '2% 0', padding: '2% 5%' }}>
                    <HighchartsReact highcharts={highcharts} options={options} />
                </Card>
                <div style={{ textAlign: 'justify' }}>
                    <h1 style={{ textAlign: 'center' }}>What Are Clinical Trials and Studies?<br /><br /> </h1>
                    <Grid container spacing={5}>
                        <Grid item xs={7}>
                            <h4>What are the four phases of clinical trials?</h4>
                            <p>Clinical trials advance through four phases to test a treatment, find the appropriate dosage, and look for side effects. If, after the first three phases, researchers find a drug or other intervention to be safe and effective, the FDA approves it for clinical use and continues to monitor its effects.</p>
                            <p>Clinical trials of drugs are usually described based on their phase. The FDA typically requires Phase I, II, and III trials to be conducted to determine if the drug can be approved for use.</p>
                            <ol>
                                <li>A Phase I trial tests an experimental treatment on a small group of often healthy people (20 to 80) to judge its safety and side effects and to find the correct drug dosage.</li>
                                <li>A Phase II trial uses more people (100 to 300). While the emphasis in Phase I is on safety, the emphasis in Phase II is on effectiveness. This phase aims to obtain preliminary data on whether the drug works in people who have a certain disease or condition. These trials also continue to study safety, including short-term side effects. This phase can last several years.</li>
                                <li>A Phase III trial gathers more information about safety and effectiveness, studying different populations and different dosages, using the drug in combination with other drugs. The number of subjects usually ranges from several hundred to about 3,000 people. If the FDA agrees that the trial results are positive, it will approve the experimental drug or device.</li>
                                <li>A Phase IV trial for drugs or devices takes place after the FDA approves their use. A device or drug's effectiveness and safety are monitored in large, diverse populations. Sometimes, the side effects of a drug may not become clear until more people have taken it over a longer period of time.</li>
                            </ol>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={5}><img src={advReport1} style={{ height: '90%', width: '80%' }} /></Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid container item xs={6}>
                            <h4>Why participate in a clinical trial?</h4>
                            <Grid item xs={7}>
                                <img src={advReport2} style={{ height: '93%', width: '100%' }} />
                            </Grid>
                            <Grid item xs={5}>
                                <p>There are many reasons why people choose to join a clinical trial. Some join a trial because the treatments they have tried for their health problem did not work. Others participate because there is no treatment for their health problem. By being part of a clinical trial, participants may find out about new treatments before they are</p>
                            </Grid>
                            <Grid item xs={12}>
                                <p> widely available. Some studies are designed for, or include, people who are healthy but want to help find ways to prevent a disease, such as one that may be common in their family. Older couple posing with their grandsonMany people say participating in a clinical trial is a way to play a more active role in their own health care. Other people say they want to help researchers learn more about certain health problems. Whatever the motivation, when you choose to participate in a clinical trial, you become a partner in scientific discovery. And, your contribution can help future generations lead healthier lives. Major medical breakthroughs could not happen without the generosity of clinical trial participants—young and old.</p>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <h4>Clinical research is medical research involving people. There are two types, observational studies and clinical trials.</h4>
                            <p>Clinical trials are research studies performed in people that are aimed at evaluating a medical, surgical, or behavioral intervention. They are the primary way that researchers find out if a new treatment, like a new drug or diet or medical device (for example, a pacemaker) is safe and effective in people. Often a clinical trial is used to learn if a new treatment is more effective and/or has less harmful side effects than the standard treatment.</p>
                            <p>Other clinical trials test ways to find a disease early, sometimes before there are symptoms. Still others test ways to prevent a health problem. A clinical trial may also look at how to make life better for people living with a life-threatening disease or a chronic health problem. Clinical trials sometimes study the role of caregivers or support groups.</p>
                            <p>Before the U.S. Food and Drug Administration (FDA) approves a clinical trial to begin, scientists perform laboratory tests and studies in animals to test a potential therapy’s safety and efficacy. If these studies show favorable results, the FDA gives approval for the intervention to be tested in humans.</p>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}
export default ByClinicalTrials;