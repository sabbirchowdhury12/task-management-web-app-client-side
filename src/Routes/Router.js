import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddTask from "../Pages/AddTask/AddTask";
import MyTask from "../Pages/MyTask/MyTask";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CompleteTask from "../Pages/CompleteTask/CompleteTask";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/mytask',
                element: <MyTask />
            },
            {
                path: '/addtask',
                element: <AddTask />
            },
            {
                path: '/completeTask',
                element: <CompleteTask />
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);