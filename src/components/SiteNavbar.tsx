import { NavLink } from "react-router";

import { useUserStore } from "../store/useUserStore";

function SiteNavbar() {
  const sessionLabel = useUserStore(
    (state) =>
      state.user
        ? `Aktif: ${state.user.name}`
        : "Misafir",
  );

  return (
    <div className="site-navigation-area">
      <nav
        className="site-nav"
        aria-label="Ana navigasyon"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "site-nav-link site-nav-link-active"
              : "site-nav-link"
          }
        >
          Ana Sayfa
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "site-nav-link site-nav-link-active"
              : "site-nav-link"
          }
        >
          Projeler
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "site-nav-link site-nav-link-active"
              : "site-nav-link"
          }
        >
          Hakkımda
        </NavLink>
      </nav>

      <p className="user-session-status">
        {sessionLabel}
      </p>
    </div>
  );
}

export default SiteNavbar;