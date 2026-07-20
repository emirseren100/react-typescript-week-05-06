import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  const isDarkTheme = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDarkTheme}
    >
      {isDarkTheme
        ? "Açık temaya geç"
        : "Koyu temaya geç"}
    </button>
  );
}

export default ThemeToggle;