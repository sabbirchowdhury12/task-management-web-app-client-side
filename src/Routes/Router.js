import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddTask from "../components/AddTask/AddTask";
import MyTask from "../components/MyTask/MyTask";
import Main from "../Layout/Main";

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
        ]
    }
]);