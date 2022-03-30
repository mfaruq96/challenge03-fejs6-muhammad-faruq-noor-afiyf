import React from 'react'
import { Routes, Route } from "react-router-dom";
// note jika pakai Link ditambahkan Link contoh
// import { Routes, Route, Link } from "react-router-dom";


import { Auth } from '../Pages/Auth/Auth';
import { AuthError } from '../Pages/Auth/AuthError';
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Cars } from '../Pages/Cars/Cars';
import { CarsDelete } from '../Pages/Cars/CarsDelete';
import { CarsSaving } from '../Pages/Cars/CarsSaving';
import { CarsAddNewCar } from '../Pages/Cars/CarsAddNewCar';
import { CarsEditCar } from '../Pages/Cars/CarsEditCar';

import { Tes } from '../Pages/Tes/Tes';
import { Template } from '../Pages/Template/Template';
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
            <Route path="/Cars/success-delete" element={<CarsDelete />} />
            <Route path="/Cars/success-saving" element={<CarsSaving />} />
            <Route path="/Cars/add-new-car" element={<CarsAddNewCar />} />
            <Route path="/Cars/edit-car" element={<CarsEditCar />} />

            <Route path="/Tes" element={<Tes />} />
            <Route path="/Template" element={<Template />} />
        </Routes>
    )
};
