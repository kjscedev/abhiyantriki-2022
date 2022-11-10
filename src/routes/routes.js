import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Navbar from '../components/Navbar';

const router=createBrowserRouter([
    {
        path:"/",
        element:<><Navbar /><Home /></>
    },
    {
        path:'/game',
        element:<><Navbar /><Game /></>
    }
])

export default router;