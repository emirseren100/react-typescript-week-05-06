import { Outlet } from "react-router";

import SiteNavbar from "../components/SiteNavbar";

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
                Form, Router ve erişilebilirlik çalışmaları
              </p>
            </div>
          </div>

          <SiteNavbar />
        </div>
      </header>

      <main className="router-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>
          Week 06 — React Router Practice
        </p>
      </footer>
    </div>
  );
}

export default AppLayout;