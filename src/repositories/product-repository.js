import axios from "axios";

export async function getProductList() {
    return axios.get("http://localhost:3000/api/sanpham", {
        withCredentials: true,
    })
}

export async function getProductDetail(id) {
    return axios.get(`http://localhost:3000/api/sanpham/${id}`, {
        withCredentials: true,
    })
}

export async function getCategories() {
    return axios.get("http://localhost:3000/api/nhomsp", {
        withCredentials: true,
    })
}

export async function getProductListByCategory(id) {
    return axios.get(`http://localhost:3000/api/sanpham?nhom=${id}`, {
        withCredentials: true,
    })
}