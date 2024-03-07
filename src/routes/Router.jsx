import { Navigate, createBrowserRouter } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
import PageDashboard from "../pages/PageDashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLogin/>
    },
    {
        path: "/register",
        element: <PageRegister/>
    },{
        path: "/dashboard",
        element: <PageDashboard/>
    },
    {
        path: "/*",
        element: <Navigate to={'/'}/>
    }
])