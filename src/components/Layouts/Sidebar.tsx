import { NavLink } from "react-router-dom";

const Sidebar = () => {
   return (
      <aside className="bg-light-gray p-5 sticky overflow-auto h-screen top-0 left-0 bg-green-400 col-span-2">
         <nav className="flex flex-col">
            <NavLink to="/admin" className='hover:bg-dark-gray truncate transition-all hover:text-white rounded-md p-3 bg-gray'>Dashboard</NavLink>
            <NavLink to="/admin/service-list">Service list</NavLink>
            <NavLink to="/admin/add-service">Add service</NavLink>
         </nav>
      </aside>
   );
};

export default Sidebar;