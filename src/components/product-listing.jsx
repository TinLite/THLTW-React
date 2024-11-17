import { Link } from "react-router-dom";
import { formatPrice } from "../utils/string-utils";

function ProductCard({ sanpham }) {
    return (
        <div
            className="card"
            style={{
                maxWidth: "18rem",
            }}
        >
            <img
                src={sanpham.hinhanh}
                className="card-img-top"
            />
            <div className="card-body">
                <h5 className="card-title">{sanpham.ten}</h5>
                <p className="card-text">{formatPrice(sanpham.gia)} VNĐ</p>
                <Link to={`/sanpham/${sanpham.masp}`} className="btn btn-outline-primary stretched-link">Xem chi tiết</Link>
            </div>
        </div>
    )
}

export function ProductListing({ products }) {
    return (
        <div className="d-flex gap-2">
            {products.map((product) => (
                <ProductCard sanpham={product} />
            ))}
        </div>
    );
}