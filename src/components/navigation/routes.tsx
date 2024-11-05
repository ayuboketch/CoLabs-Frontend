import { Droplet, FolderKanban, Home, Settings, Store, User, Users, Wallet, Zap } from "lucide-react";

export const dashboard_routes = [

  {
    name: "projects",
    href: "/dashboard/projects",
    icon: (
    <FolderKanban />
    ),
  },
  {
    name: "settings",
    href: "/dashboard/settings",
    icon: (
    <Settings />
    ),
  },


] as const;



export const routes = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
    children: undefined,
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <Store />,
    children: dashboard_routes,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: <User />,
    children: undefined,
  },
] as const;


