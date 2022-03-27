import React from 'react';
import { Container, Form } from 'react-bootstrap';

import BackgroundLogin from "../../Assets/Img/bg-login.png";
import Rectangle62 from "../../Assets/Img/Rectangle62.png";
import Home from "../../Assets/Img/Home.png";
import Administrator from "../../Assets/Img/Administrator.png";
import fi_menu from "../../Assets/Img/fi_menu.png";
import fi_profile from "../../Assets/Img/fi_profile.png";
import Vektor from "../../Assets/Img/Vector.png";
import car from "../../Assets/Img/car.png";
import key from "../../Assets/Img/key.png";
import fi_clock from "../../Assets/Img/fi_clock.png";
import fi_edit from "../../Assets/Img/fi_edit.png";
import fi_trash from "../../Assets/Img/fi_trash.png";

import '../../Assets/Css/Dashboard.css';

export const Cars = () => {
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
                        CARS
                    </a></li>
                    <li className='mt-3'><a href='#'>
                        List Car
                    </a></li>
                </ul>
            </div>

            <div className='mf-dashboard-content container-fluid'>
                <p>
                    <strong>Cars > </strong>List Car
                </p>
                <h2>List Car</h2>
                <div className='row'>
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                    {/* card mobil */}
                    <div className='col-lg-4 mt-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={car} alt="" className='' />
                                <p>Nama/Tipe Mobil</p>
                                <p><strong>Rp. 430.000 / hari</strong></p>
                                <p>
                                    <img src={key} alt="" classnName='' />&ensp;
                                    Start rent - Finish rent
                                </p>
                                <p>
                                    <img src={fi_clock} alt="" classnName='' />&ensp;
                                    Updated at 4 Apr 2022, 09.00
                                </p>
                                <div className='row text-center'>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-outline-danger btn-sm'>
                                            <img src={fi_trash} alt="" className='' />&ensp;
                                            Delete
                                        </button>
                                    </div>
                                    <div className='col-lg-6'>
                                        <button type='button' className='btn btn-success btn-sm'>
                                            <img src={fi_edit} alt="" className='' />&ensp;
                                            Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end card mobil */}
                </div>
            </div>

        </div>
    )
}
