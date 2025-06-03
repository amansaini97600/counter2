import { useEffect, useState } from 'react';
import Counter from "./components/counter";
import './styles/style.css';
import './styles/theme.css';
import ThemeToggle from "./components/themeToggle";
import SoundSetting from './components/soundSetting';



function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return (
    <div className='container'>
      <div className='setting-bar'>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <SoundSetting />
      </div>
      <Counter theme={theme} />

    </div>
  )

}

export default App;