import axios from "axios";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
}
const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "hhttps://deboik.vercel.app";

export function createUser(params:User) {
    return axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deboikStaff`, params)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Couldn't create user", error);
            return null;
        });
}

export function fetchUsers() {
    return axios
        .get(`${BASE_URL}/api/deboikStaff`)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Couldn't fetch users", error);
            return null;
        });
}

