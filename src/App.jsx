import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import ResumePage from "./pages/ResumePage";
import "./styles/portfolio.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  if (window.location.pathname.replace(/\/$/, "") === "/resume") {
    return <ResumePage theme={theme} onToggleTheme={() => setTheme(current => current === "dark" ? "light" : "dark")} />;
  }
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={() => setTheme(current => current === "dark" ? "light" : "dark")} />
      <main className="page-container">
        <Hero />
        <Experience />
        <Work />
        <Resume />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Akshat Vijayvergiya</span>
        <div>
          <a href="#resume">Curriculum Vitae</a>
          <a href="#contact">Get in touch</a>
        </div>
      </footer>
    </>
  );
}
