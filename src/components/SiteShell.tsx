import { BriefcaseBusiness, Headphones, Mail, Menu, ScrollText, ShieldCheck, Sparkles, Swords, X } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../data/site";
import { RpgPageFrame } from "./RpgPageFrame";

const desktopNavItems = [
  { href: "/", icon: Swords, label: "ホーム" },
  { href: "/can-do", icon: ScrollText, label: "できること" },
  { href: "/works", icon: BriefcaseBusiness, label: "活用シーン" },
  { href: "/process", icon: ShieldCheck, label: "サポート" },
  { href: "/profile", icon: Headphones, label: "会社情報" },
];

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
    <div className="min-h-screen bg-[color:var(--rpg-bg)] text-ink">
      <header className="sticky top-0 z-30 border-b-2 border-[color:var(--rpg-gold)]/70 bg-[color:var(--rpg-bg-deep)]/96 text-[#eef8ff] shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur">
        <div ref={menuRef} className="relative mx-auto max-w-[1440px] px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 text-2xl font-black tracking-normal text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="grid h-10 w-10 place-items-center rounded-sm border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-panel)] text-[color:var(--rpg-cyan)] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.4)]" aria-hidden="true">
                <Sparkles className="h-6 w-6" fill="currentColor" />
              </span>
              <span>AI WORKS</span>
            </NavLink>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="main navigation">
            {desktopNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  className={({ isActive }) =>
                    [
                      "relative flex items-center gap-2 border border-transparent px-2 py-2 text-sm font-black transition hover:text-[color:var(--rpg-gold-light)] xl:px-3",
                      isActive
                        ? "text-white after:absolute after:-bottom-3 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:bg-[color:var(--rpg-gold-light)] after:shadow-[0_0_14px_var(--rpg-gold-light)]"
                        : "text-[#f8edd0]",
                    ].join(" ")
                  }
                >
                  <Icon className="h-5 w-5 text-[color:var(--rpg-gold-light)]" strokeWidth={1.7} aria-hidden="true" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          <NavLink
            to="/qr-guide"
            className={({ isActive }) =>
              [
                "hidden min-h-12 items-center gap-3 rounded-sm border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-magenta)] px-5 text-sm font-black text-white shadow-[0_5px_0_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 lg:inline-flex",
                isActive ? "ring-2 ring-[color:var(--rpg-gold-light)] ring-offset-2 ring-offset-[color:var(--rpg-bg-deep)]" : "",
              ].join(" ")
            }
          >
            <Mail className="h-5 w-5 text-[color:var(--rpg-gold-light)]" strokeWidth={1.8} aria-hidden="true" />
            お問い合わせ
          </NavLink>

          <button
            type="button"
            aria-controls="mobile-command-menu"
            aria-expanded={isMenuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border-2 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-panel)] text-[color:var(--rpg-gold-light)] shadow-float lg:hidden"
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

      <main className={isHomePage ? "w-full overflow-hidden" : "w-full overflow-hidden"}>
        {isHomePage ? children : <RpgPageFrame>{children}</RpgPageFrame>}
      </main>
    </div>
  );
}
