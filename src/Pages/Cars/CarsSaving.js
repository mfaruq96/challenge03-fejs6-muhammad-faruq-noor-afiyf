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

export const CarsSaving = () => {
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
                <div className='template-right-content container'>
                    <h5>Cars &ensp; > &ensp; <span className='mf-style-text-dashboard-content'>List Car</span></h5>
                    <center>
                        <div class="alert alert-success template-alert" role="alert">
                            Data Berhasil Disimpan
                        </div>
                    </center>
                    <div className='d-flex justify-content-between mt-4'>
                        <div>
                            <h3 className=''>List Car</h3>
                        </div>
                        <div>
                            <a href='/cars/add-new-car' className='btn btn-sm btn-primary'>+&ensp;Add New Car</a>
                        </div>
                    </div>
                    {/* list order */}
                    <h5 className='mt-4'>
                        <button className='btn btn-outline-primary active'>All</button>&emsp;
                        <button className='btn btn-outline-primary'>Small</button>&emsp;
                        <button className='btn btn-outline-primary'>Medium</button>&emsp;
                        <button className='btn btn-outline-primary'>Large</button>
                    </h5>
                    <div className='row'>
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                        {/* card mobil */}
                        <div className='col-lg-4 mt-4'>
                            <div className='card shadow-sm p-2'>
                                <div className='card-body'>
                                    <img src={car} alt="" className='card-img mb-4 mt-4' />
                                    <p>
                                        Nama/Tipe Mobil
                                    </p>
                                    <p>
                                        <strong>Rp 430.000 / hari</strong>
                                    </p>
                                    <p>
                                        <img src={key} alt="" className='' />&ensp;Start rent - Finish rent
                                    </p>
                                    <p>
                                        <img src={fi_clock} alt="" className='' />&ensp;Updated at 4 Apr 2022, 09.00
                                    </p>
                                    <div className='row mt-4'>
                                        <div className='col-lg-6'>
                                            <a href='/cars/success-delete' className='btn btn-sm btn-outline-danger col-12'>
                                                <img src={fi_trash} alt="" className='' />&ensp;Delete
                                            </a>
                                        </div>
                                        <div className='col-lg-6'>
                                            <a href='/cars/edit-car' className='btn btn-sm btn-success col-12'>
                                                <img src={fi_edit} alt="" className='' />&ensp;Edit
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end card mobil */}
                    </div>
                </div>
            </div>

        </div>
    )
}
