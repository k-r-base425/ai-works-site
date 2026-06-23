import { ImageIcon, Lightbulb, Menu, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../data/site";

const navIcons = [ImageIcon, Lightbulb, UserRound];
const primaryRoutes = routes.filter((route) => route.navGroup === "primary");

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-30 border-b border-line/70 bg-white/95 shadow-[0_8px_24px_rgba(43,63,84,0.06)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <NavLink to="/" className="flex items-center gap-2.5 rounded-full text-2xl font-bold tracking-normal text-ink">
            <span className="relative h-8 w-9" aria-hidden="true">
              <span className="absolute left-0 top-1 h-7 w-3 rotate-[-34deg] rounded-full bg-teal" />
              <span className="absolute left-3 top-1 h-7 w-3 rotate-[34deg] rounded-full bg-blue" />
              <span className="absolute left-6 top-1 h-7 w-3 rotate-[-34deg] rounded-full bg-purple" />
            </span>
            <span>AI WORKS</span>
          </NavLink>

          <nav className="hidden items-center gap-5 sm:flex" aria-label="main navigation">
            {primaryRoutes.map((route, index) => {
              const Icon = navIcons[index] ?? ImageIcon;
              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition",
                      isActive ? "bg-blue/10 text-blue-deep" : "text-ink hover:bg-fog",
                    ].join(" ")
                  }
                >
                  <Icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  {route.navLabel ?? route.label}
                </NavLink>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-float sm:hidden"
            aria-label="メニュー"
          >
            <Menu className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">{children}</main>
    </div>
  );
}
