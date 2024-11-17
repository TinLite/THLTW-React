import { useParams } from "react-router-dom";
import { getProductDetail, getProductListByCategory } from "../../repositories/product-repository";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/string-utils";

export function PageProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProductDetail(id).then((response) => {
            setProduct(response.data);
        })
    }, [id])

    return (
        !product?.masp ?
            <div className="text-center">Đang tải...</div> :
            <div className="container mx-auto">
                <div className="my-5">
                    <div style={{
                        marginBottom: "-5px",
                    }}>Đang xem sản phẩm</div>
                </div>
                <div className="d-flex gap-5">
                    <div>
                        <img src={product.hinhanh} style={{
                            maxWidth: "30vw",
                        }} />
                    </div>
                    <div className="flex-grow-1">
                        <div className="my-2">
                            <p style={{
                                marginBottom: "-5px",
                            }}>{product.Nhom?.ten}</p>
                            <h2>{product.ten}</h2>
                            <h5>{formatPrice(product.gia)} VNĐ</h5>
                        </div>
                        <div>
                            <p>{product.mota}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}