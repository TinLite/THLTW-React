import axios from "axios";

export async function getProductList() {
    return axios.get("http://localhost:3000/api/sanpham")
}

export async function getProductDetail(id) {
    return axios.get(`http://localhost:3000/api/sanpham/${id}`)
}

export async function getCategories() {
    return axios.get("http://localhost:3000/api/nhomsp")
}

export async function getProductListByCategory(id) {
    return axios.get(`http://localhost:3000/api/sanpham?nhom=${id}`)
}