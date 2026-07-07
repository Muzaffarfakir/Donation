import React from "react";
import "./Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Donate from "./Donate";
export default function Navbar() {
    return (
        <>
            <BrowserRouter>
                <div className="d-flex text-center flex-wrap justify-content-space-around w-100 ">

                    <nav style={{ justifyContent: "space-around", alignItems: 'center', textAlign: "center" }} className="d-flex text-center flex-wrap justify-content-space-around w-100 bg-dark p-2 border-radius-25   text-light h-25">
                        <h4 id="title" style={{ fontFamily: "cursive" }}>_Help_</h4>

                        <Link id="a" to={"/"} className="d-flex text-light text-decoration-none mx-3 flaot-left
                     ">
                            Home
                        </Link>
                        <Link id="a" to={"/donate"} className="d-flex text-light text-decoration-none mx-3 flaot-right ">
                            Donate
                        </Link>
                        {/*
                        <Link id="a" to={"/home"} className="d-flex text-light text-decoration-none mx-3 flaot-right ">
                            Pay
                        </Link> */}

                    </nav>
                </div>
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/donate"} element={<Donate />}></Route>

                </Routes>

            </BrowserRouter>

        </>
    )
}