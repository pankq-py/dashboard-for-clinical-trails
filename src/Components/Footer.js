import React from 'react';
import { Link } from "react-router-dom";
import '../Pages/bootstrap.min.css';

export default function Footer(props) {
    const displayInline = {
        display: 'inline',
        padding: '0 10px',

    }
    const colorDecoNone = {
        color: 'white',
        textDecoration: 'none',
    }
    return (
        <>
            <footer className="card" style={{ color: 'white', background: '#2193b0' }}>
                <div className="container-fluid row text-center d-flex align-items-center">
                    <div className="col-md-4">
                        <div style={{fontSize: '10px'}}>‎</div>
                        <ul className="list-unstyled nav-links nav-left">
                            <li style={displayInline}><a href="#" style={colorDecoNone}>Terms</a></li>
                            <li style={displayInline}><a href="#" style={colorDecoNone}>About</a></li>
                            <li style={displayInline}><a href="#" style={colorDecoNone}>Privacy</a></li>
                            <li style={displayInline}><a href="#" style={colorDecoNone}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4" onClick={props.changeHeader}>
                        <Link to="/" id="Dashboard" style={colorDecoNone}>Dashboard</Link>
                    </div>
                    <div className="col-md-4">
                        <div className="muted" style={colorDecoNone}>© 2022. All Rights Reserved.</div>
                    </div>
                </div>
            </footer>
        </>
    )
}
