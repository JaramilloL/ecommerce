import { Navigate, createBrowserRouter } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
import PageDashboard from "../pages/PageDashboard";
import PageAdmin from "../pages/PageAdmin";

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
        path: "/admin",
        element: <PageAdmin/>
    },
    {
        path: "/*",
        element: <Navigate to={'/'}/>
    }
])