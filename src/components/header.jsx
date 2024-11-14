import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

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
                {dsNhom.map((nhom) => (
                    <li key={nhom.id}><Link className="dropdown-item" to={`/nhom/${nhom.idnhom}`}>{nhom.ten}</Link></li>
                ))}
                {
                    dsNhom.length === 0 && <li><a className="dropdown-item disabled" href="#">Rỗng</a></li>
                }
            </ul>
        </li>
    )
}

export function MainNavBar() {
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
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}