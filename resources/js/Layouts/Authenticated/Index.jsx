import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PieChart from "@/Components/PieChart";
import DoughnoutChart from "@/Components/DoughnoutChart";

export default function Authenticated({ children }) {
    return (
        <>
            <Navbar></Navbar>
            <div className="min-h-screen">
                {/* -- CONTENT -- */}
                <div className="my-24 mx-10">
                    <main>{children}</main>
                </div>
            </div>
            <Footer className></Footer>
        </>
    );
}
