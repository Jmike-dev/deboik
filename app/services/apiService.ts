import axios from "axios";
const BASE_URL = process.env.BASE_URL as string;

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
}
export async function createUser(params: User) {
    try {
        const response = await axios.post(BASE_URL, params);
        return response.data;
    } catch (error) {
        console.error("Couldn't create user", error);
        return null;
    }
}
