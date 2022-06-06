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

import '../../Assets/Css/template.css';

export const Dashboard = () => {
    return (
        <div>

            {/* LEFT */}
            <div className='template-left'>
                <img src={Rectangle62} alt="" className='template-img-box' />
                <ul>
                    <li className='template-left-active'><a href='/dashboard'>
                        <img src={Home} alt="" className='template-img-home' />
                    </a></li>
                    <li className=''><a href='/cars'>
                        <img src={Administrator} alt="" className='template-img-home' />
                    </a></li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className='template-right'>
                {/* RIGHT - NAVBAR */}
                <div className='template-right-navbar shadow-sm'>
                    <div className='template-right-navbar-isi'>
                        <img src={Rectangle62} alt="" className='template-img-box-nav' />
                        <img src={fi_menu} alt="" className='template-img-menu' />
                        <div className='template-right-navbar-right'>
                            <form className="d-flex justify-content-end">
                                <input type="search" className='form-control template-right-navbar-search' placeholder="Search" />
                                <button className="btn btn-outline-primary btn-sm" type="submit">Search</button>&emsp;
                                <img src={fi_profile} alt="" className='' />&ensp;
                                <span className='mt-2'>Unis Badri</span>&emsp;
                                <img src={Vektor} alt="" className='template-img-vektor' />
                            </form>
                        </div>
                    </div>
                </div>
                {/* RIGHT - SIDEBAR */}
                <div className='template-right-sidebar shadow'>
                    <div className='template-right-sidebar-text-one'>
                        <h5>DASHBOARD</h5>
                    </div>
                    <div className='template-right-sidebar-text-two mt-3'>
                        <h5>Dashboard</h5>
                    </div>
                </div>
                {/* RIGHT - CONTENT */}
                <div className='template-right-content container'>
                    <h5>Dashboard &ensp; > &ensp; <span className='mf-style-text-dashboard-content'>Dashboard</span></h5>
                    <h3 className='mt-4'>Dashboard</h3>
                    {/* list order */}
                    <h5 className='mt-4 mb-3'>
                        <img src={garis} alt="" className='' />&ensp; List Order
                    </h5>
                    <table class="table bg-white">
                        <thead className='bg-info'>
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
                    {/* list car */}
                    <h5 className='mt-5 mb-3'>
                        <img src={garis} alt="" className='' />&ensp; List Car
                    </h5>
                    <table class="table bg-white">
                        <thead className='bg-info'>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Start Rent</th>
                                <th scope="col">Finish Rent</th>
                                <th scope="col">Created at</th>
                                <th scope="col">Updated at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>-</td>
                                <td>-</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Price</td>
                                <td>Start Rent</td>
                                <td>Finish Rent</td>
                                <td>Created at</td>
                                <td>Updated at</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
