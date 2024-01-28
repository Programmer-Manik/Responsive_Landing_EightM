import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray p-4 lg:p-5 sticky overflow-auto h-screen top-0 left-0 col-span-2">
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "hover:bg-dark-gray transition-all bg-dark-gray hover:text-white rounded-md p-3  flex  items-center gap-2",
              { "bg-dark-gray text-white": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        
        <NavLink 
        to="/admin/add-service"
        className={({ isActive }) =>
        cn(
          "hover:bg-dark-gray transition-all bg-dark-gray hover:text-white rounded-md p-3  flex  items-center gap-2",
          { "bg-dark-gray text-white": isActive }
        )
      }
        >
         <LayoutDashboard className="shrink-0" />
         <span className="truncate">Add service</span>
         </NavLink>
         <NavLink 
        to="/admin/service-list"
        className={({ isActive }) =>
        cn(
          "hover:bg-dark-gray transition-all bg-dark-gray hover:text-white rounded-md p-3  flex  items-center gap-2",
          { "bg-dark-gray text-white": isActive }
        )
      }
        >
         <LayoutDashboard className="shrink-0" />
         <span className="truncate">Service list</span></NavLink>
      </nav>
    </aside>
  );
};

//iRepair-Backend
export default Sidebar;
