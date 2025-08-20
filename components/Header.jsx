import React, { useState } from 'react'
const moon = new URL("../assets/images/moon-outline.svg", import.meta.url).href;
const moonSolid = new URL("../assets/images/moon.svg", import.meta.url).href;

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  document.documentElement.setAttribute("data-theme",theme)
  return (
    <>
    <header>
  <div className="content">
    <h1>Where in the world?</h1>
    <div className="mode" onClick={()=>{
      localStorage.setItem("theme",theme === "light"?"dark":"light");
      setTheme(theme === "light"?"dark":"light");
    }}>
      <img src={theme === "light"?moon:moonSolid} alt="light" />
      <span className="upcoming-mode">{theme} Mode</span>
    </div>
  </div>
</header>
    </>
  )
}
