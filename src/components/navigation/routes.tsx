import {  FolderKanban, Home, Settings, Store, User} from "lucide-react";

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




export const landingPageRoutes= [
  { name: "about us", href: "https://www.spaceyatech.com/about-us" },
  { name: "resources", href: "https://www.spaceyatech.com/resources" },
  { name: "colabs", href: "/dashboard" },
  { name: "products", href: "https://www.spaceyatech.com/products" },
  { name: "blog", href: "https://www.spaceyatech.com/blogs" },
]
