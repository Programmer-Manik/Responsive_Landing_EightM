import App from "@/App";
import AdminLayout from "@/components/Layouts/AdminLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import { Navigate, createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
 {
   path: '/',
   element:<App/>,
   children:[
      {
         index:true,
         element:<Home/>
      },
      {
         path:'/About',
         element:<About/>
      }
   ],
 },
 {
   path: '/admin',
   element:<AdminLayout />,
   children:[
      {
         index:true,
         element:<Navigate to="/admin/dashboard"/>
      },
      {
         path:'dashboard',
         element:<Dashboard />,
      },
      {
         path:'add-service',
         element:<AddService />,
      },
      {
         path:'service-list',
         element:<ServiceList />,
      },
   ],
 },
]);

export default router ;