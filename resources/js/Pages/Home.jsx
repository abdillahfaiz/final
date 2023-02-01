import React from "react";
import { Head } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Navbar from "@/Layouts/Authenticated/Navbar";
import Footer from "@/Layouts/Authenticated/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from "chart.js";
import { Doughnut, } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardUser({auth}){
    return (
        <>
        <Head title="Dashboard User"/>
        <Navbar/>
        
        <Footer/>
        </>
    )

}