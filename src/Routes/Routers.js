import React from 'react'
import { Routes, Route } from "react-router-dom";
// note jika pakai Link ditambahkan Link contoh
// import { Routes, Route, Link } from "react-router-dom";


import { Auth } from '../Pages/Auth/Auth';
import { AuthError } from '../Pages/Auth/AuthError';
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Cars } from '../Pages/Cars/Cars';
// import { Product } from '../Pages/Product/Product';
// import { Galery } from '../Pages/Galery/Galery';
// import { ContactUs } from '../Pages/ContactUs/Contactus';
// import { AboutUs } from '../Pages/AboutUs/Aboutus';


export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/AuthError" element={<AuthError />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Cars" element={<Cars />} />
        </Routes>
    )
};
