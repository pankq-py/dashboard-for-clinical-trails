import React from 'react';
import { Container } from '@mui/material';
import './bootstrap.min.css';
import img1 from '../Images/news1.jpg';
import img2 from '../Images/news2.jpg';
import img3 from '../Images/news3.jpg';
import img4 from '../Images/news4.jpg';
import img5 from '../Images/news5.jpg';
import img6 from '../Images/news6.jpg';
import img7 from '../Images/news7.jpg';
import img8 from '../Images/news8.jpg';

export default function NewsAndEvents() {
    return (
        <>
            <Container>
                <div style={{ padding: '30px', textAlign: 'justify' }} className="container">
                    <center>
                        <h1 style={{ background: `linear-gradient(to right, #c779d0, white, #feac5e, white, #c779d0)`, color: 'black' }}>
                            News Releases !
                        </h1>
                    </center>
                    <div style={{padding: '1%'}}>
                        <div className="row container" >
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img1} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Abilitech Medical secures Health Canada licence to sell orthotic device</b></h6>
                                <p>Last year, Abilitech and the Praxis Spinal Cord Institute partnered to further scale the device for mass
                                    commercialisation.</p>
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img2} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Seegene obtains CE-IVD mark for SARS-CoV-2 fast MDx AssayMoeen Ali has yet to bat at the top of the order in
                                    T20 internationals</b></h6>
                                <p>The Allplex SARS-CoV-2 fast MDx Assay can offer results in 30 minutes with an accuracy equal to RT-PCR tests.
                                </p>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img3} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Rani Therapeutics develops oral biologics delivery device</b></h6>
                                <p>RaniPill HC demonstrated successful delivery of adalimumab and achieved high bioavailability in preclinical
                                    testing.</p>
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img4} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Cardiovascular Systems and Innova Vascular partner on thrombectomy devices</b></h6>
                                <p>CSI plans to purchase and commercialise the new thrombectomy devices from Innova Vascular.</p>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img5} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>FDA expands EUA for ChromaCode SARS-CoV-2 PCR assay</b></h6>
                                <p>FDA expands EUA for ChromaCode SARS-CoV-2 PCR assay</p>
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img6} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Washington University School of Medicine develops Alzheimer’s blood test</b></h6>
                                <p>The test showed 93% accuracy in identifying people at risk of Alzheimer's dementia.</p>
                            </div>
                        </div>
                        <div className="row container">
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <img style={{ borderRadius: '2px 20px', width: '100%' }} src={img7} />
                            </div>
                            <div className="col-md-3" style={{padding: '1% 2%'}}>
                                <h6 style={{color:'purple'}}><b>Orthofix Medical launches bioactive bone graft for spine procedures</b></h6>
                                <p>The Opus BA solution can be used to fill bone voids or gaps in the skeletal system.</p>
                            </div>
                        </div>
                    </div>
                    <center>
                        <h1 style={{ background: `linear-gradient(to right, #c779d0, white, #feac5e, white, #c779d0)`, color: 'black' }}>
                            All Events
                        </h1>
                    </center>
                    <div style={{ padding: '0 2%' }}>
                        <div className="col-xs">
                            <div className="card-deck">
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img1} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}}>Medical secures</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img2} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >ChromaCode</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img3} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >Washington University</h5>
                                        <p className="card-text"> 6th world Dermoto,ogy congress</p>
                                    </div>
                                </div>
                            </div >
                        </div >
                        <div className="col-xs">
                            <div className="card-deck">
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img4} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >biologics delivery</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img5} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >Therapeutics</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img6} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >RT-PCR tests</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div >
                            </div >
                        </div >
                        <div className="col-xs">
                            <div className="card-deck" >
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img7} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >Conferance</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img8} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >Conferance</h5>
                                        <p className="card-text">Mayo Clinic Wound Symposium: The Edges of Wound Care 2022</p>
                                    </div>
                                </div>
                                <div className="card" style={{ width: '18rem', margin: '2% 2%' }}>
                                    <img src={img2} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{textAlign:'center'}} >Conferance</h5>
                                        <p className="card-text">2022 World Pediatrics Conference</p>
                                    </div>
                                </div >
                            </div >
                        </div >
                    </div>
                </div>
            </Container >
        </>
    )
}