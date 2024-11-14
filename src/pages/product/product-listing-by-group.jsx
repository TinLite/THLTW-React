import { useParams } from "react-router-dom";
import { getProductListByCategory } from "../../repositories/product-repository";
import { useEffect, useState } from "react";

export function ProductListingByGroup() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        getProductListByCategory(id).then((response) => {
            setProducts(response.data);
        })
    }, [id])

    return (
        <div className="container mx-auto">
            <h1>{id}</h1>
        </div>
    )
}