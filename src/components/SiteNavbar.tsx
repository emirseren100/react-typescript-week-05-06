import { NavLink } from "react-router";

function SiteNavbar() {
  return (
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
  );
}

export default SiteNavbar;