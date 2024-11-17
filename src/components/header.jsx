import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { logout } from "../repositories/authentication-repository";

function NhomDropdown() {
    const [dsNhom, setDsNhom] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/nhomsp")
            .then(res => res.json())
            .then(
                (result) => {
                    setDsNhom(result);
                },
                (error) => {
                    console.log(error);
                }
            ).catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Nhóm
            </a>
            <ul className="dropdown-menu">
                {dsNhom.map((nhom, index) => (
                    <li key={index}>
                        <Link className="dropdown-item" to={`/nhom/${nhom.idnhom}`}>{nhom.ten}</Link>
                    </li>
                ))}
                {/* {
                    dsNhom.length === 0 && <li><a className="dropdown-item disabled" href="#">Rỗng</a></li>
                } */}
            </ul>
        </li>
    )
}

export function MainNavBar() {
    const { user, setUser } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Bài tập LTW nâng cao</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} aria-current="page" to="/">Trang chủ</NavLink>
                        </li>
                        <NhomDropdown />
                        <li>
                            <NavLink className="nav-link" to="/profile">Thông tin tài khoản</NavLink>
                        </li>
                    </ul>
                    {user ?
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div>Xin chào, {user.username}.</div>
                            <button className="btn btn-link" onClick={() => logout().then(()=> setUser(undefined))}>Đăng xuất</button>
                        </div> :
                        <NavLink to='/login' className="btn btn-outline-primary">Đăng nhập</NavLink>
                    }
                </div>
            </div>
        </nav>
    )
}