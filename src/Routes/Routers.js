import React from 'react'
import { Routes, Route } from "react-router-dom";
// note jika pakai Link ditambahkan Link contoh
// import { Routes, Route, Link } from "react-router-dom";


import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Login } from '../Pages/Login/Login';
// import { Product } from '../Pages/Product/Product';
// import { Galery } from '../Pages/Galery/Galery';
// import { ContactUs } from '../Pages/ContactUs/Contactus';
// import { AboutUs } from '../Pages/AboutUs/Aboutus';


export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
};
