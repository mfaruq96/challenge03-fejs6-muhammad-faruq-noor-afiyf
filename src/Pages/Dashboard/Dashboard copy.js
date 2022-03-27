import React from 'react';
import { Container, Form } from 'react-bootstrap';

import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
import Home from "../../Assets/Img/Home.png";
import Administrator from "../../Assets/Img/Administrator.png";
import fi_menu from "../../Assets/Img/fi_menu.png";
import fi_profile from "../../Assets/Img/fi_profile.png";
import Vektor from "../../Assets/Img/Vector.png";

import '../../Assets/Css/Dashboard.css';

export const Dashboard = () => {
    return (
        <div>

            <div className='mf-dashboard-left'>
                <ul>
                    <li className='mt-3'><a href='#'>
                        <img src={Rectangle62} alt="" className='mf-dashboard-box' />
                    </a></li>
                    <li className='mt-3'><a href='#'>
                        <img src={Home} alt="" className='mf-dashboard-home' />
                    </a></li>
                    <li className='mt-3'><a href='#'>
                        <img src={Administrator} alt="" className='mf-dashboard-home' />
                    </a></li>
                </ul>
            </div>

            <div className='mf-dashboard-navbar'>
                <img src={Rectangle62} alt="" className='mf-dashboard-rectangular' />
                <img src={fi_menu} alt="" className='mf-dashboard-menu' />
                <form className="d-flex justify-content-end">
                    <input type="search" className='form-control mf-dashboard-search-input' placeholder="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>&emsp;
                    <img src={fi_profile} alt="" className='' />
                    <span>Unis Badri</span>
                    <img src={Vektor} alt="" className='mf-dashboard-vektor' />
                </form>
            </div>

            <div className='mf-dashboard-left-2'>
                <p>DASHBOARD</p>
            </div>

        </div>
    )
}
