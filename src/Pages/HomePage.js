import React, { Component, useState } from 'react';
import { Container, CssBaseline, Card } from '@mui/material';
import './bootstrap.min.css';

import LatestProjects from './LatestProjects';

import feed1 from '../Images/feed1.png';
import feed2 from '../Images/feed2.png';
import feed3 from '../Images/feed3.png';

import HighchartsReact from 'highcharts-react-official';
import highcharts from 'highcharts';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

// icons
import InsertInvitationTwoToneIcon from '@mui/icons-material/InsertInvitationTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import DoDisturbOffTwoToneIcon from '@mui/icons-material/DoDisturbOffTwoTone';

export default function HomePage() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  // highcharts information
  const options1 = {
    title: {
      text: 'Growth Comparison in Participants Health'
    },
    subtitle: {
      text: 'Reported in 2021'
    },
    chart: {
      // backgroundColor: "transparent",
      type: 'bar',
    },
    series: [{
      name: 'Health Level',
      colorByPoint: true,
      data: [
        {
          name: 'December',
          y: 12,
          color: '#ff4d4d',
        }, {
          name: 'November',
          y: 30,
          color: 'orange',
        }, {
          name: 'October',
          y: 23,
          color: 'yellow',
        }, {
          name: 'September',
          y: 50,
          color: 'green',
        }, {
          name: 'August',
          y: 13,
          color: '#c44dff',
        }, {
          name: 'July',
          y: 25,
          color: 'cyan',
        }, {
          name: 'June',
          y: 43,
          color: 'voilet',
        }, {
          name: 'May',
          y: 91,
          color: 'pink',
        }, {
          name: 'April',
          y: 24,
          color: 'maroon',
        }, {
          name: 'March',
          y: 42,
          color: 'gray',
        }, {
          name: 'February',
          y: 80,
          color: 'gold',
        }, {
          name: 'January',
          y: 65,
          color: 'lime',
        }
      ]
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
    },
      
      credits: false,
      exporting: {
        enabled: true
    },
  }
  // highcharts information
  const options2 = {
    chart: {
      // backgroundColor: "transparent",
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Comparison based on Continents'
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
        selected: true
      }, {
        name: 'Africa',
        y: 17.20,
        color: 'orange',
      }, {
        name: 'Europe',
        y: 9.59,
        color: 'yellow',
        sliced: true,
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
  return (
    <>
      <CssBaseline></CssBaseline>
      <Container>
        <div className="row row-mx-10">
          <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div><AssignmentIndTwoToneIcon style={{ fontSize: '40px', color: "red" }} /></div>
                <div style={{ textAlign: 'center', padding: '0 10%' }}>
                  <h6 className='align-items-center'>Invited</h6>
                  <h5 className="font-weight-bold">218</h5>
                  <small className="text-muted">Participants</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div><InsertInvitationTwoToneIcon style={{ fontSize: '40px', color: "#148545" }} /></div>
                <div style={{ textAlign: 'center', padding: '0 10%' }}>
                  <h6 className='align-items-center'>eIC Signed</h6>
                  <h5 className="font-weight-bold">115</h5>
                  <small className="text-muted">Participants</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-px-10 mb-5 col-sm-6 col-md-4 col-lg">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div><HourglassBottomTwoToneIcon style={{ fontSize: '40px', color: "#f0d074" }} /></div>
                <div style={{ textAlign: 'center', padding: '0 10%' }}>
                  <h6 className='align-items-center'>Awaiting</h6>
                  <h5 className="font-weight-bold">29</h5>
                  <small className="text-muted">Participants</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-px-10 mb-5 col-sm-6 col-md-6 col-lg">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div><AssignmentTwoToneIcon style={{ fontSize: '40px', color: "lime" }} /></div>
                <div style={{ textAlign: 'center', padding: '0 10%' }}>
                  <h6 className='align-items-center'>Enrolled</h6>
                  <h5 className="font-weight-bold">164</h5>
                  <small className="text-muted">Participants</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-px-10 mb-5 col-sm-6 col-md-6 col-lg">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center align-items-center">
                <div><DoDisturbOffTwoToneIcon style={{ fontSize: '40px', color: "blue" }} /></div>
                <div style={{ textAlign: 'center', padding: '0 10%' }}>
                  <h6 className='align-items-center'>Withdrawn</h6>
                  <h5 className="font-weight-bold">7</h5>
                  <small className="text-muted">Participants</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-mx-10">
          <div className="col-lg-4 mb-5">
            <div className="card h-100" >
              <div className="card-header">
                <h4 className="label">Calendar</h4>
                <div className="settings-button">Check what is there is to do list.</div>
              </div>
              <div className="card-body p-2" >
                <br />
                <Calendar
                  value={dateState}
                  onChange={changeDate}
                  style={{ background: 'transparent' }}
                />
                <br />
                <p style={{ textAlign: 'center', color: '#006edc' }}>Current Selected Date is <b>{moment(dateState).format('MMMM DD YYYY')}</b></p>
                <p style={{ textAlign: 'center', color: 'red' }}><b><br />No enteries found on</b> <br />{moment(dateState).format('MMMM DD YYYY')}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mb-5">
            <div className="card h-100" >
              <div className="card-header">
                <h4 className="label">Health Comparison</h4>
                <div className="settings-button">This comparison is based on last year's reports</div>
              </div>
              <div className="card-body p-2" >
                <br />
                {/* highchart bar here */}
                <HighchartsReact highcharts={highcharts} options={options1} />
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-5 maxh-200">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="label">Daily feeds</h4>
                <div className="smart-badge smart-badge-primary smart-badge-pill">Today</div>
              </div>
              <div className="card-body py-4">
                <div className="feeds">
                  <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                    <div className="col-auto col-px-5">
                      <div className="img-as-background rounded-circle w-50px square border">
                        <img style={{ borderRadius: '50px' }} src={feed1} />
                      </div>
                    </div>
                    <div className="col col-px-5">
                      <div className=""><strong>Frederick Murphy</strong> reacted to the blog post</div>
                      <small className="text-muted">Today 8:19 PM</small>
                    </div>
                    <div className="col-auto col-px-5">
                      <small className="w-auto text-muted">7 min ago</small>
                    </div>
                  </div>
                  <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                    <div className="col-auto col-px-5">
                      <div className="img-as-background rounded-circle w-50px square border">
                        <img style={{ borderRadius: '50px' }} src={feed2} />
                      </div>
                    </div>
                    <div className="col col-px-5">
                    <div className=""><strong>Elisha Scott</strong> has stopped working on CALERIE</div>
                      <small className="text-muted">Today 10:45 AM</small>
                    </div>
                    <div className="col-auto col-px-5">
                      <small className="w-auto text-muted">10 hours ago</small>
                    </div>
                  </div>
                  <div className="row row-mx-5 hover-text-primary border-bottom py-3">
                    <div className="col-auto col-px-5">
                      <div className="img-as-background rounded-circle w-50px square border">
                        <img style={{ borderRadius: '50px' }} src={feed3} />
                      </div>
                    </div>
                    <div className="col col-px-5">
                      <div className=""><strong>John Doe</strong> has completed JUPITER trial</div>
                      <small className="text-muted">Today 12:03 PM</small>
                    </div>
                    <div className="col-auto col-px-5">
                      <small className="w-auto text-muted">8 hours ago</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 mb-5">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="label">Latest Projects</h4>
                <div className="settings-button">List of project and there status.</div>
              </div>
              <div className="card-body">
                {/* mui datatable */}
                <LatestProjects />
              </div >
            </div >
          </div >
          {/* <div className="col-lg-1 mb-1"></div> */}
          <div className="col-lg-5 mb-5">
            <div className="card h-100">
              <div className="card-header">
                <h4 className="label">Clinical Trials Comparison</h4>
                <div className="settings-button">This comparison is based on compnent wise reports</div>
              </div>
              <div className="card-body">
                {/* highchart pie here */}
                <br />
                  <HighchartsReact highcharts={highcharts} options={options2} />
                <br />
              </div>
            </div>
          </div>
        </div >
      </Container >
    </>
  );
}




