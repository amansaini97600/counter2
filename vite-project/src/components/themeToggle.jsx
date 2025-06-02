function ThemeToggle({ theme, toggleTheme }) {
    return (
        <div className="themeContainer">
            <button onClick={toggleTheme} className="themeBtn">{theme === "light" ? "🌙" : "🌞"}</button>
        </div>
)}

export default ThemeToggle;