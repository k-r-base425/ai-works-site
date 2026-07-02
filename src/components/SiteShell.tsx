import { ImageIcon, Lightbulb, Menu, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../data/site";

const navIcons = [ImageIcon, Lightbulb, UserRound];
const primaryRoutes = routes.filter((route) => route.navGroup === "primary");

export function SiteShell({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <div className={isHomePage ? "min-h-screen bg-[color:var(--rpg-bg)] text-ink" : "min-h-screen bg-paper text-ink"}>
      <header className={`sticky top-0 z-30 border-b border-line/70 bg-white/95 shadow-[0_8px_24px_rgba(43,63,84,0.06)] backdrop-blur ${isHomePage ? "sm:hidden" : ""}`}>
        <div ref={menuRef} className="relative mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 rounded-full text-2xl font-bold tracking-normal text-ink"
              onClick={() => setIsMenuOpen(false)}
            >
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
            aria-controls="mobile-command-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-float sm:hidden"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>
          </div>

          {isMenuOpen ? (
            <nav
              id="mobile-command-menu"
              className="absolute inset-x-4 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-3 text-[#eef8ff] shadow-[0_24px_48px_rgba(7,18,27,0.34)] sm:hidden"
              aria-label="mobile command navigation"
            >
              <div className="mb-3 flex items-center justify-between gap-3 border-b border-[#d7bb68]/60 pb-3">
                <span className="inline-flex rounded-sm border border-[#e8d88c] bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.18em] text-[#fff2a7]">
                  COMMAND
                </span>
                <span className="text-[11px] font-black tracking-[0.18em] text-[#9de3ff]">9 ROUTES</span>
              </div>
              <div className="grid max-h-[min(70vh,32rem)] gap-2 overflow-y-auto pr-1">
                {routes.map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    end
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        "grid grid-cols-[5.5rem_1fr] items-center gap-3 rounded-sm border px-3 py-3 text-sm font-black transition",
                        isActive
                          ? "border-[#fff2a7] bg-[#d31572] text-white shadow-[0_4px_0_rgba(0,0,0,0.34)]"
                          : "border-[#8fdfff]/45 bg-[#10283b] text-[#d9eff6] hover:border-[#8fdfff] hover:bg-[#0e2a3b]",
                      ].join(" ")
                    }
                  >
                    <span className="text-[10px] tracking-[0.14em] text-[#fff2a7]">{route.stage}</span>
                    <span>{route.navLabel ?? route.label}</span>
                  </NavLink>
                ))}
              </div>
            </nav>
          ) : null}
        </div>
      </header>

      <main className={isHomePage ? "w-full overflow-hidden" : "mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12"}>{children}</main>
    </div>
  );
}
