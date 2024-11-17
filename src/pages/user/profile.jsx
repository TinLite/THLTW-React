import { useEffect } from "react";
import { UserContext } from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export function PageProfile() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user)
            navigate('/login?redirect=/profile');
    }, [user])

    return (
        <div className="container mx-auto">
            <h4>Thông tin người dùng</h4>
            <div>
                <p>Tên: {user?.fullname}</p>
                <p>Email: {user?.email}</p>
                <p>Địa chỉ: {user?.address}</p>
            </div>
        </div>
    )
}