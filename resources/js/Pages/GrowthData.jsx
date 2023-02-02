import React, { useState } from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Icon } from "@iconify/react";
import Navbar from "@/Layouts/Authenticated Admin/Navbar";
import Footer from "@/Layouts/Authenticated Admin/Footer";
import PrimaryButton from "@/Components/PrimaryButton";
import Delete from "@/Components/Delete";

export default function GrowthData({ children, growthData }) {
    console.log(children);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [head_circum, setHead_circum] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [children_id, setChildren_id] = useState(children.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            height,
            weight,
            head_circum,
            status,
            date,
            children_id,
        };
        console.log(data);

        Inertia.post("/tambah-data-pertumbuhan", data);
        setHeight,
            setWeight,
            setHead_circum,
            setStatus,
            setDate,
            setChildren_id
    };
    // console.log(children);

    // console.log(growthData);
    return (
        <>
            <Navbar />
            <Head title="Data Pertumbuhan" />
            <div className="my-24 mx-10">
                <div className="mt-28 w-full block p-3 bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className="flex flex-col px-3 py-3">
                        <h5 className=" flex">
                            <div className="pt-1 mx-1">
                                <Icon icon="mdi:user" />
                            </div>
                            Identitas Anak
                        </h5>
                        <hr />
                        <h5 className="mb-1 mt-2 text-md font-medium text-gray-900 dark:text-white">
                            Nama : {children.name}
                        </h5>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Gender : {children.gender}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Tanggal Lahir : {children.birthdate}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Nama Ibu : {children.mom_name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Alamat : {children.address}
                        </span>
                    </div>
                </div>

                <div className="block  mt-6 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                    <div className="flex">
                        <div className="mb-3 mx-1">
                            <h1 className="flex text-xl font-extrabold text-black">
                                <div className="pt-1 mx-1">
                                    <Icon icon="material-symbols:filter-list-rounded" />
                                </div>
                                List
                                <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                                    Riwayat Pertumbuhan Anak
                                </small>
                            </h1>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto  sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Tinggi Badan
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Berat Badan{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Lingkar Kepala{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Status Gizi{" "}
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6 text-center"
                                    >
                                        Tanggal
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-6  text-center"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {growthData
                                    ? growthData.map((index) => {
                                          return (
                                              <tr className="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                                  <td className="px-6 py-4 text-center">
                                                      {index.height} cm
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      {index.weight} kg
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      {index.head_circum} cm
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      <span className="bg-blue-100 text-blue-800 text-md font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
                                                          {index.status}
                                                      </span>
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      {index.date}
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                  
                                                <Delete
                                                    URL={"/hapus-data-pertumbuhan"}
                                                    id={index.id}
                                                />
                                                  </td>
                                              </tr>
                                          );
                                      })
                                    : "Belum ada Data Saat ini"}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="block mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">
                                    Riwayat Pertumbuhan Anak
                                </h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    Diupdate setiap kali datang ke posyandu
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={handleSubmit}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-2">
                                                <label
                                                    for="height"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Tinggi Badan{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="height"
                                                    id="height"
                                                    autocomplete="given-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(height) =>
                                                        setHeight(
                                                            height.target.value
                                                        )
                                                    }
                                                    value={height}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label
                                                    for="weight"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Berat Badan{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="weight"
                                                    id="weight"
                                                    autocomplete="family-name"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(weight) =>
                                                        setWeight(
                                                            weight.target.value
                                                        )
                                                    }
                                                    value={weight}
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-2">
                                                <label
                                                    for="head_circum"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Lingkar Kepala{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="head_circum"
                                                    onChange={(head_circum) =>
                                                        setHead_circum(
                                                            head_circum.target
                                                                .value
                                                        )
                                                    }
                                                    value={head_circum}
                                                    id="head_circum"
                                                    autocomplete="street-address"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    for="status"
                                                    className="block  text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    Status Gizi
                                                </label>

                                                <select
                                                    id="status"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    onChange={(status) =>
                                                        setStatus(
                                                            status.target.value
                                                        )
                                                    }
                                                    value={status}
                                                >
                                                    <option selected>
                                                        Pilih Status Gizi
                                                    </option>
                                                    <option value=" Gizi Buruk">
                                                        Gizi Buruk
                                                    </option>
                                                    <option value="Gizi Kurang">
                                                        Gizi Kurang
                                                    </option>
                                                    <option value="Gizi Baik">
                                                        Gizi Baik
                                                    </option>
                                                    <option value=" Risiko Gizi Lebih">
                                                        Risiko Gizi Lebih
                                                    </option>
                                                    <option value="Gizi Lebih">
                                                        Gizi Lebih
                                                    </option>
                                                    <option value="Obesitas">
                                                        Obesitas
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label
                                                    for="date"
                                                    className="block text-sm font-medium text-gray-700"
                                                >
                                                    Tanggal{" "}
                                                </label>
                                                <input
                                                    type="date"
                                                    name="birthdate"
                                                    id="date"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    onChange={(date) =>
                                                        setDate(
                                                            date.target.value
                                                        )
                                                    }
                                                    value={date}
                                                />
                                            </div>
                                        </div>
                                        <PrimaryButton
                                            className="w-full my-6"
                                        >
                                            Tambah
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
