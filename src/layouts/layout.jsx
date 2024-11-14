import { Outlet } from "react-router-dom";
import { MainNavBar } from "../components/header";

export default function MainLayout() {
    return (
        <div>
            <MainNavBar />
            <Outlet />
        </div>
    );
}