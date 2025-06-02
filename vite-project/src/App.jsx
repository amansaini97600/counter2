import {useEffect, useState} from 'react';
import Counter from "./components/counter";
import './styles/style.css';
import './styles/theme.css';
import ThemeToggle from "./components/themeToggle";

function App(){
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.className = theme;
  },[theme]);

  const toggleTheme = () =>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return(
    <div className='container'>
      <Counter theme={theme}/>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
    </div>
  )

}

export default App;