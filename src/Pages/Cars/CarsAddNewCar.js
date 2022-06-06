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
import car from "../../Assets/Img/car.png";
import key from "../../Assets/Img/key.png";
import fi_clock from "../../Assets/Img/fi_clock.png";
import fi_trash from "../../Assets/Img/fi_trash.png";
import fi_edit from "../../Assets/Img/fi_edit.png";

import '../../Assets/Css/template.css';

export const CarsAddNewCar = () => {
    return (
        <div>

            {/* LEFT */}
            <div className='template-left'>
                <img src={Rectangle62} alt="" className='template-img-box' />
                <ul>
                    <li className=''><a href='/dashboard'>
                        <img src={Home} alt="" className='template-img-home' />
                    </a></li>
                    <li className='template-left-active'><a href='/cars'>
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
                        <h5>CARS</h5>
                    </div>
                    <div className='template-right-sidebar-text-two mt-3'>
                        <h5>List Car</h5>
                    </div>
                </div>
                {/* RIGHT - CONTENT */}
                <div className='template-right-content container mb-3'>
                    <h5>Cars &ensp; > &ensp; List Car &ensp; > &ensp; <span className='mf-style-text-dashboard-content'>Add New Car</span></h5>
                    <div className='d-flex justify-content-between mt-4 mb-3'>
                        <div>
                            <h3 className=''>Add New Car</h3>
                        </div>
                    </div>
                    <Form>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Nama<sup className='text-danger'>*</sup></label>
                                    <div className='col-lg-10'>
                                        <input type='text' className='form-control' id='nama' placeholder='Placeholder' required></input>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Harga<sup className='text-danger'>*</sup></label>
                                    <div className='col-lg-10'>
                                        <input type='text' className='form-control' id='harga' placeholder='Placeholder' required></input>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Foto<sup className='text-danger'>*</sup></label>
                                    <div className='col-lg-10'>
                                        <input type='file' className='form-control' id='foto' placeholder='Placeholder' required></input>
                                    </div>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Start Rent</label>
                                    <label className='col-lg-10 col-form-label'>-</label>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Finish Rent</label>
                                    <label className='col-lg-10 col-form-label'>-</label>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Created at</label>
                                    <label className='col-lg-10 col-form-label'>-</label>
                                </div>
                                <div className='mb-3 row'>
                                    <label className='col-lg-2 col-form-label'>Updated at</label>
                                    <label className='col-lg-10 col-form-label'>-</label>
                                </div>
                            </div>
                        </div>
                        <a href='/cars' className='btn btn-sm btn-outline-primary mt-5'>Cancel</a>&emsp;
                        <a href='/cars/success-saving' className='btn btn-sm btn-primary mt-5'>Save</a>
                    </Form>
                </div>
            </div>

        </div>
    )
}
