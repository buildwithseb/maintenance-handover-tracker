import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-slate-800 p-6 text-white">
      <h2 className="mb-8 text-xl font-bold">Maintenance Tracker</h2>
      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded-md p-3 ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/equipment"
          className={({ isActive }) =>
            `rounded-md p-3 ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
          }
        >
          Equipment
        </NavLink>
        <NavLink
          to="/teleremote"
          className={({ isActive }) =>
            `rounded-md p-3 ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
          }
        >
          Teleremote
        </NavLink>
        <NavLink
          to="/handover"
          className={({ isActive }) =>
            `rounded-md p-3 ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
          }
        >
          Handover
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
