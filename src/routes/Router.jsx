import { Navigate, createBrowserRouter } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLogin/>
    },
    {
        path: "/register",
        element: <PageRegister/>
    },
    {
        path: "/*",
        element: <Navigate to={'/'}/>
    }
])