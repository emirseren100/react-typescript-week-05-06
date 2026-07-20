import { Outlet } from "react-router";

import SiteNavbar from "../components/SiteNavbar";
import ThemeToggle from "../components/ThemeToggle";

function AppLayout() {
  return (
    <div className="router-shell">
      <header className="site-header">
        <div className="site-header-content">
          <div className="site-brand">
            <span className="site-brand-badge">
              H6
            </span>

            <div>
              <p className="site-brand-title">
                Emir React Roadmap
              </p>

              <p className="site-brand-description">
                Form, Router ve global state çalışmaları
              </p>
            </div>
          </div>

          <div className="site-header-actions">
            <SiteNavbar />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="router-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          Week 06 — React State Practice
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;