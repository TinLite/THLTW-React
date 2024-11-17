import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/layout";
import { PageProductListingByGroup } from "./pages/product/product-listing-by-group";
import { PageProductDetail } from "./pages/product/product-detail";
import { PageLogin } from "./pages/auth/login";
import { PageProfile } from "./pages/user/profile";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/nhom/:id",
                element: <PageProductListingByGroup />
            },
            {
                path: "/sanpham/:id",
                element: <PageProductDetail />
            },
            {
                path: '/login',
                element: <PageLogin />
            },
            {
                path: '/profile',
                element: <PageProfile />
            }
        ]
    },
    {
        path: "*",
        element: <div>Không tìm thấy trang web yêu cầu</div>,
    }
])