import React from "react";
import { Trash2 } from "lucide-react";

const employees = [
    {
        firstName: "Joshua",
        lastName: "Bakare",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Admin",
    },
    {
        firstName: "Jane",
        lastName: "Clement",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Staff",
    },
    {
        firstName: "Hannah",
        lastName: "Johnson",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Staff",
    },
    {
        firstName: "John",
        lastName: "Ngoka",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Staff",
    },
    {
        firstName: "Omotayo",
        lastName: "Adeleke",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Staff",
    },
    {
        firstName: "Gloria",
        lastName: "Amadi",
        email: "josh.bakery@gmail.com",
        phone: "+2348012345678",
        role: "Staff",
    },
];

function Dashboard() {
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
                <div className="rounded bg-white p-5 shadow-md">
                    <h1 className="text-2xl font-bold">Josh Bakery Ventures</h1>
                    <p className="text-gray-600">
                        62, Bode Thomas, Surulere, Lagos
                    </p>

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
                            {employees.map((employee, index) => (
                                <tr key={index} className="text-center">
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
                                        {employee.phone}
                                    </td>
                                    <td className="border p-2">
                                        {employee.role}
                                    </td>
                                    <td className="cursor-pointer border p-2 text-red-500">
                                        <Trash2 />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
