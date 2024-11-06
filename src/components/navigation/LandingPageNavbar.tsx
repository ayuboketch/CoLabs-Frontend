import { Link, useRouterState } from "@tanstack/react-router";
import Nprogress from "./nprogress/Nprogress";
import { landingPageRoutes } from "./routes";
import { ThemeToggle } from "./ThemeToggle";

interface LandingPageNavbarProps {}

export function LandingPageNavbar({}: LandingPageNavbarProps) {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  return (
    <header className="sticky top-0 z-30 flex  w-full flex-col items-center justify-between bg-base-200">
      <nav className="flex h-full w-full items-center justify-between gap-5 px-5 p-2">
        <Link to="/" className="btn btn-link btn-sm">
          <img src="/syt.png" alt="logo" className="h-8 w-8" />
        </Link>
        <div className="w-full flex justify-end px-5">
          <ul className="flex gap-5">
            {landingPageRoutes.map((route) => {
              if (route.name === "colabs") {
                return (
                  <li key={route.href}>
                    <Link
                      to={route.href}
                      key={route.href}
                      className="btn btn-link btn-sm"
                    >
                      {route.name}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={route.href}>
                  <a href={route.href} className="btn btn-link btn-sm">
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-[15%]">
        <ThemeToggle />

        </div>
      </nav>
      <Nprogress isAnimating={isLoading} />
    </header>
  );
}
