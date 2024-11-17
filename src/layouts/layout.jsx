import { Outlet } from "react-router-dom";
import { MainNavBar } from "../components/header";

export default function MainLayout() {
    return (
        <div className="d-flex flex-column"
        style={{
            minHeight: "100vh",
        }}
        >
            <MainNavBar />
            <Outlet />
        </div>
    );
}