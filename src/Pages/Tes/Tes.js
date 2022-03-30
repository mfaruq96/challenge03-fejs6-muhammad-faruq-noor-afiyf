import React from 'react';
import { Container, Form, Table } from 'react-bootstrap';

import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
import Home from "../../Assets/Img/Home.png";
import Administrator from "../../Assets/Img/Administrator.png";
import fi_menu from "../../Assets/Img/fi_menu.png";
import fi_profile from "../../Assets/Img/fi_profile.png";
import Vektor from "../../Assets/Img/Vector.png";
import garis from "../../Assets/Img/garis.png";

import './style.css';

export const Tes = () => {
    return (
        <div>

            {/* LEFT */}
            <div className='mf-tes-left'>
                <ul>
                    <li className='mt-3'><a href='#'>
                        <img src={Rectangle62} alt="" className='mf-tes-img-box' />
                    </a></li>
                    <li className='mt-3 mf-tes-active'><a href='/dashboard'>
                        <img src={Home} alt="" className='mf-dashboard-home' />
                    </a></li>
                    <li className='mt-3'><a href='/cars'>
                        <img src={Administrator} alt="" className='mf-dashboard-home' />
                    </a></li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className='mf-tes-right'>
                {/* NAVBAR */}
                <div className='mf-tes-right-navbar'>
                    <img src={Rectangle62} alt="" className='mf-tes-img-box-dua' />
                    <img src={fi_menu} alt="" className='mf-tes-img-menu' />
                    {/* NAVBAR TOP */}
                    <div className='mf-tes-right-navbar-fr'>
                        <form className="d-flex justify-content-end">
                            <input type="search" className='form-control mf-dashboard-search-input' placeholder="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>&emsp;
                            <img src={fi_profile} alt="" className='' />&emsp;
                            <span className='mf-tes-right-navbar-span'>Unis Badri</span>&emsp;
                            <img src={Vektor} alt="" className='mf-tes-right-navbar-vektor' />
                        </form>
                    </div>
                </div>
                {/* SIDEBAR */}
                <div className='mf-tes-right-sidebar'>
                    <h5 className='mf-style-text-dashboard'>DASHBOARD</h5>
                    <h5 className='mf-style-text-medium'>Dashboard</h5>
                </div>
                {/* CONTENT */}
                <div className='mf-tes-right-content'>
                    <h5>Dashboard &ensp; > &ensp; <span className='mf-style-text-dashboard-content'>Dashboard</span></h5>
                    <h3 className='mt-4'>Dashboard</h3>
                    <h5 className='mt-3'>
                        <img src={garis} alt="" className='' />&ensp;
                        List Order
                    </h5>
                    {/* tabel */}
                    <Table className="table">
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
                            <tr>
                                <th scope="row">10</th>
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
                    </Table>
                </div>
            </div>

        </div>
    )
}
