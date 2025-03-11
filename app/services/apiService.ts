import axios from "axios";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
}
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export function createUser(params:User) {
    console.log("Base URL:", BASE_URL); // Debugging
    return axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deboikStaff`, params)
        .then((response) => response.data)
        .catch((error) => {
            console.error("Couldn't create user", error);
            return null;
        });
}

