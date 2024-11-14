import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import News from "../Layout/News";
import CategoryNews from "../Pages/CategoryNews";
// import Login from "../Components/Login";
import AuthLayout from "../Layout/AuthLayout";
import LoginLayout from "../Layout/LoginLayout";
import Register from "../Layout/Register";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <News></News>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <LoginLayout></LoginLayout>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;