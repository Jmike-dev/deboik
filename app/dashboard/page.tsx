"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { fetchUsers } from "../services/apiService";

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role?: string;
}

function Dashboard() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        fetchUsers().then((data) => {
            console.log("Fetched Data:", data); // Debugging API response
            setUsers(
                Array.isArray(data?.deboikStaffs) ? data.deboikStaffs : [],
            );
        });
    }, []);

    useEffect(() => {
        console.log("Updated Users:", users); // Log updated users
    }, [users]);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-1/6 bg-white p-5 shadow-md">
                <h2 className="text-xl font-bold">GetChange</h2>
                <nav className="mt-5">
                    <ul>
                        <li className="rounded bg-green-500 px-4 py-2 text-white">
                            Employees
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-5">
                <div>
                    <h1 className="text-2xl font-bold">Josh Bakery Ventures</h1>
                    <p className="text-gray-600">
                        62, Bode Thomas, Surulere, Lagos
                    </p>
                </div>
                <div className="rounded bg-white p-5 shadow-md">
                    {/* Controls */}
                    <div className="mt-4 flex gap-2">
                        <select className="rounded border p-2">
                            <option>Change role</option>
                        </select>
                        <button className="rounded bg-green-500 px-4 py-2 text-white">
                            Change
                        </button>
                        <input
                            type="text"
                            placeholder="Enter staff name here..."
                            className="flex-1 rounded border p-2"
                        />
                    </div>

                    {/* Employee Table */}
                    <table className="mt-4 w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2">Select</th>
                                <th className="border p-2">First Name</th>
                                <th className="border p-2">Last Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Phone</th>
                                <th className="border p-2">Role</th>
                                <th className="border p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((employee) => (
                                    <tr
                                        key={employee._id}
                                        className="text-center"
                                    >
                                        <td className="border p-2">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="border p-2">
                                            {employee.firstName}
                                        </td>
                                        <td className="border p-2">
                                            {employee.lastName}
                                        </td>
                                        <td className="border p-2">
                                            {employee.email}
                                        </td>
                                        <td className="border p-2">
                                            {employee.phone || "N/A"}
                                        </td>
                                        <td className="border p-2">
                                            {employee.role || "N/A"}
                                        </td>
                                        <td className="cursor-pointer border p-2 text-red-500">
                                            <Trash2 />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        // colSpan="7"
                                        className="p-4 text-center text-gray-500"
                                    >
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
