import React from "react";
import { FooterDefault } from "../Assets/Components/Footer/FooterDefault";
import { NavbarDefault } from "../Assets/Components/Navbar/NavbarDefault";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "../Routes/Routers";

export const Layout = () => {
    let kondisi = true;
    return (
        <div>
            {kondisi ? (
                <>
                    <BrowserRouter>
                        <Routers />
                    </BrowserRouter>
                    <FooterDefault />
                </>
            ) : (
                <>
                    <BrowserRouter>
                        <Routers />
                    </BrowserRouter>
                </>
            )}
        </div>
    );
};
