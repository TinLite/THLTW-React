import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/layout";
import { ProductListingByGroup } from "./pages/product/product-listing-by-group";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/nhom/:id",
                element: <ProductListingByGroup />
            }
        ]
    },
    {
        path: "*",
        element: <div>Không tìm thấy trang web yêu cầu</div>,
    }
])