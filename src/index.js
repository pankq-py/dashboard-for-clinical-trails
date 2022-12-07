import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import Scrollup from './Components/Scrollup';
import { IdleTimer } from './Components/IdleTimer';

ReactDOM.render(
    <>
        <BrowserRouter>
            <IdleTimer>
                <Slider />
                <Scrollup />
            </IdleTimer>
        </BrowserRouter>
    </>,

    document.getElementById('root'));