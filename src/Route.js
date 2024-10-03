import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Login";
import App from "./App";
import { Hello } from "./Hello";
import { Car } from "./Car";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/hello",
        element: <Hello />,
    },
    {
        path: "/car",
        element: <Car />,
    },
    {
        path: "*",
        element: <div>Không tìm thấy trang web yêu cầu</div>,
    }
])