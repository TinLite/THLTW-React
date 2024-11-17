import axios from "axios";

export async function login(username, password) {
    return axios.post("http://localhost:3000/api/login", {
        username,
        password
    }, {
        withCredentials: true,
    });
}

export async function logout() {
    return axios.post("http://localhost:3000/api/logout", undefined, {
        withCredentials: true,
    });
}

export async function getProfile() {
    return axios.get("http://localhost:3000/api/profile", {
        withCredentials: true,
    })
}