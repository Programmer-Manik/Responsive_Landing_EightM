import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";


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
]);

export default router ;