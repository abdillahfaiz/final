import React, { Children, useState } from "react";
// import SecondaryButton from "@/Components/SecondaryButton";
// import DangerButton from "@/Components/Delete";
import { Head, Link } from "@inertiajs/inertia-react";
import PrimaryButton from "@/Components/PrimaryButton";
import Footer from "@/Layouts/Authenticated/Footer";
import { Icon } from "@iconify/react";
import { Inertia } from '@inertiajs/inertia';
import Navbar from "@/Layouts/Authenticated/Navbar";
import Delete from "@/Components/Delete";

export default function AddChild({ user, children, errors }) {

    console.log(children);
    const [name, setName] = useState("");
    const [mom_name, setMom_name] = useState("");
    const [address, setAddress] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [user_id,setUserID] = useState(user.id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            mom_name,
            birthdate,
            address,
            gender,
            user_id
        };
        console.log(data);
        Inertia.post("/tambah-anak", data);
        setName("");
        setMom_name;
        setBirthdate;
        setAddress;
        setGender;
    };

    // const deleteChild = async (id) => {
    //     Inertia.delete(`${URL}/${id}`)    }
    // const deletePost = async (id) => {
    //     Inertia.delete(`/add-child/${id}`);
    // }

    return (
        <>
            <Navbar />
            <Head title="Tambah Data Anak" />
            <div class="mt-28 mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-col items-center py-8 px-8 ">
                    <img
                        class="w-24 h-24 mb-3 rounded-full shadow-lg"
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="Bonnie image"
                    />
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {user.name}
                    </h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        {user.email}
                    </span>
                </div>
            </div>

            <div className="block m-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                <div className="flex">
                    <Icon icon="material-symbols:filter-list-rounded" />
                    <div className="mb-3 mx-1">
                        <h1 class="text-xl font-extrabold   text-black">
                            List
                            <small class="ml-2 font-semibold text-gray-500 dark:text-gray-400">
                                Data Anak
                            </small>
                        </h1>
                    </div>
                </div>

                <div class="relative overflow-x-auto  sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-6">
                                    Nama Lengkap Anak
                                </th>
                                <th scope="col" class="px-6 py-6">
                                    Nama Ibu
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Tanggal Lahir
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Gender
                                </th>
                                <th scope="col" class="px-6 py-6 text-center">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {children
                                ? children.map((index, key) => {
                                      return (
                                          <tr class="bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
                                              <th
                                                  scope="row"
                                                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                              >
                                                  {index.name}
                                              </th>
                                              <td class="px-6 py-4">
                                                  {index.mom_name}
                                              </td>
                                              <td class="px-6 py-4 text-center">
                                                  {index.birthdate}
                                              </td>
                                              <td class="px-6 py-4 text-center">
                                                  {index.gender}
                                              </td>
                                              {/* <td class="px-6 py-4 text-center">        
                                                  <Delete  onClick={() => deletePost(children.id)}>Button</Delete>
                                              </td> */}
                                              <td className="px-6 py-4 border-b">
                                                <Delete URL={'/hapus-anak'} id={index.id}/>
                                            </td>
                                          </tr>
                                      );    
                                  })
                                : ""}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="block m-12 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 ">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">
                                Identitas Anak
                            </h3>
                            <p class="mt-1 text-sm text-gray-600">
                                Sesuaikan identitas anak seperti yang tertera
                                pada akta kelahiran
                            </p>
                        </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleSubmit}>
                            <div class="overflow-hidden shadow sm:rounded-md">
                                <div class="bg-white px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="first-name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Lengkap Anak
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                autocomplete="given-name"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(name) =>
                                                    setName(name.target.value)
                                                }
                                                value={name}
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="last-name"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Nama Ibu
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="mom_name"
                                                autocomplete="family-name"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(mom_name) =>
                                                    setMom_name(
                                                        mom_name.target.value
                                                    )
                                                }
                                                value={mom_name}
                                            />
                                        </div>

                                        <div class="col-span-6">
                                            <label
                                                for="address"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Alamat Rumah
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                autocomplete="street-address"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(address) =>
                                                    setAddress(
                                                        address.target.value
                                                    )
                                                }
                                                value={address}
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="birthdate"
                                                class="block text-sm font-medium text-gray-700"
                                            >
                                                Tanggal Lahir
                                            </label>
                                            <input
                                                type="date"
                                                name="birthdate"
                                                id="birthdate"
                                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                onChange={(birthdate) =>
                                                    setBirthdate(
                                                        birthdate.target.value
                                                    )
                                                }
                                                value={birthdate}
                                            />
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label
                                                for="gender"
                                                class="block  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Gender
                                            </label>
                                            
                                            <select
                                                id="gender"
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={(gender) =>
                                                    setGender(
                                                        gender.target.value
                                                    )
                                                }
                                                value={gender}
                                            >
                                                <option selected>
                                                    Pilih Gender
                                                </option>
                                                <option value="LAKI LAKI">
                                                    LAKI LAKI
                                                </option>
                                                <option value="PEREMPUAN">
                                                    PEREMPUAN
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <PrimaryButton className="w-full my-6">
                                        Tambah
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
