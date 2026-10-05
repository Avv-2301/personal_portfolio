import Header from "./components/Header";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import ResumePage from "./pages/ResumePage";
import "./styles/portfolio.css";

export default function App() {
  if (window.location.pathname.replace(/\/$/, "") === "/resume") {
    return <ResumePage />;
  }
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Header />
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
