import { NavLink } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineViewGrid,
  HiOutlineChartBar,
  HiOutlineShoppingCart,
  HiOutlineMenuAlt2,
} from "react-icons/hi";

const sidebarLinks = [
  {
    id: 1,
    title: "Panel General",
    href: "/panelgeneral",
    icon: HiOutlineViewGrid,
  },
  { id: 2, title: "Usuarios", href: "/usuarios", icon: HiOutlineUsers },
  {
    id: 3,
    title: "Estadísticas",
    href: "/estadisticas",
    icon: HiOutlineChartBar,
  },
  { id: 4, title: "Pedidos", href: "/pedidos", icon: HiOutlineShoppingCart },
  { id: 5, title: "Menú", href: "/menu", icon: HiOutlineMenuAlt2 },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-50 border-r border-slate-200 min-h-screen p-5">
      <div className="space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.id}
              to={link.href}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-600 text-white"
                    : "text-slate-700 hover:bg-slate-200"
                }`
              }
            >
              <Icon size={22} />
              <span className="font-medium">{link.title}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};
