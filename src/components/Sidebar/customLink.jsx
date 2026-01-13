import { NavLink } from "react-router";

// eslint-disable-next-line react/prop-types
const SidebarItem = ({ icon, label, path }) => {
  return (
    <div className="flex items-center gap-3">
      <NavLink
        to={path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-md text-sm
         transition
         ${
           isActive
             ? "text-primary-200"
             : "text-black-100 hover:text-primary-200"
         }`
        }
      >
        <span>{icon}</span>
        <span>{label}</span>
      </NavLink>
    </div>
  );
};
export default SidebarItem;
