import { useParams } from "react-router-dom";
import { getProductListByCategory } from "../../repositories/product-repository";
import { useEffect, useState } from "react";
import { ProductListing } from "../../components/product-listing";

export function PageProductListingByGroup() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [nhomInfo, setNhomInfo] = useState({});

    useEffect(() => {
        getProductListByCategory(id).then((response) => {
            setProducts(response.data.data);
            setNhomInfo(response.data.nhom);
        })
    }, [id])

    return (
        <div className="container mx-auto">
            <div className="my-5">
                <div style={{
                    marginBottom: "-5px",
                }}>Các sản phẩm</div>
                <h3>{nhomInfo.ten}</h3>
            </div>
            <ProductListing products={products} />
        </div>
    )
}