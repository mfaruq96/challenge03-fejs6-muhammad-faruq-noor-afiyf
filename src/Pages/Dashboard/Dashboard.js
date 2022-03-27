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
                    <li className='mt-3'><a href='/dashboard'>
                        <img src={Home} alt="" className='mf-dashboard-home' />
                    </a></li>
                    <li className='mt-3'><a href='/cars'>
                        <img src={Administrator} alt="" className='mf-dashboard-home' />
                    </a></li>
                </ul>
            </div>

            <div className='mf-dashboard-navbar'>
                <img src={Rectangle62} alt="" className='mf-dashboard-rectangular' />
                <img src={fi_menu} alt="" className='mf-dashboard-menu' />
                {/* <form className="d-flex justify-content-end">
                    <input type="search" className='form-control mf-dashboard-search-input' placeholder="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>&emsp;
                    <img src={fi_profile} alt="" className='' />
                    <span>Unis Badri</span>
                    <img src={Vektor} alt="" className='mf-dashboard-vektor' />
                </form> */}
            </div>

            <div className='mf-dashboard-left-2'>
                <ul className='text-center'>
                    <li className='mt-3'><a href='#'>
                        DASHBOARD
                    </a></li>
                    <li className='mt-3'><a href='#'>
                        Dashboard
                    </a></li>
                </ul>
            </div>

            <div className='mf-dashboard-content container-fluid'>
                <p>
                    <strong>Dashboard > </strong>Dashboard
                </p>
                <h2>Dashboard</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Car</th>
                            <th scope="col">Start Rent</th>
                            <th scope="col">Finish Rent</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">9</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                        <tr>
                            <th scope="row">10</th>
                            <td>User Email</td>
                            <td>Car</td>
                            <td>Start Rent</td>
                            <td>Finish Rent</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
