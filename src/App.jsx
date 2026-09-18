import { useState } from "react";
import todoAppImage from "./assets/todo.png";
import "./App.css";
import "./index.css";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function StatusBadge({ isAvailable }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold cursor-default transition-transform duration-200 hover:scale-105 ${isAvailable
          ? "bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300"
          : "bg-gray-100 text-gray-700 ring-1 ring-gray-200"
        }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${isAvailable ? "bg-emerald-500 animate-pulse" : "bg-gray-400"
          }`}
      />
      {isAvailable ? "Open to work" : "Busy learning"}
    </span>
  );
}

function Skills({ skills }) {
  return (
    <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
      {skills.map((skill, index) => (
        <li
          key={index}
          className="bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 hover:-translate-y-0.5 border border-transparent px-3 py-1 rounded-lg text-xs font-medium cursor-default transition-all duration-200 shadow-2xs"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({
  title,
  status,
  statusVariant = "default",
  description,
  image,
  link = "#",
}) {
  return (
    <Card className="group overflow-hidden border border-gray-200 bg-white shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between rounded-xl">
      <div>
        {image && (
          <div className="overflow-hidden h-44 bg-gray-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-5 pb-2">
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </CardTitle>
            <Badge
              variant={statusVariant}
              className="transition-transform duration-200 group-hover:scale-105"
            >
              {status}
            </Badge>
          </div>
          {description && (
            <CardDescription className="text-gray-600 text-sm mt-2 leading-relaxed">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </div>

      <CardFooter className="p-5 pt-3">
        <Button
          onClick={() => link && window.open(link, "_blank")}
          className="w-full bg-gray-900 hover:bg-blue-600 text-white transition-all duration-200 hover:shadow-md active:scale-98 cursor-pointer"
        >
          View project
        </Button>
      </CardFooter>
    </Card>
  );
}

function SocialLinks({ github, linkedin, website }) {
  return (
    <div className="flex flex-wrap gap-2">
      {github && (
        <a
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/60 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      )}
      {linkedin && (
        <a
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/60 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      )}
      {website && (
        <a
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/60 hover:-translate-y-0.5 transition-all duration-200 shadow-2xs"
          href={website}
          target="_blank"
          rel="noreferrer"
        >
          Website ↗
        </a>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isAvailable = false;

  const name = "Poch Sreynich";
  const goal =
    "I’m learning React and developing my backend skills to become a full-stack developer. My goal is to create complete products in the future and use my skills to solve real-world problems.";

  const title = "Frontend Developer, Student";
  const photoUrl =
    "https://i.pinimg.com/736x/c1/4a/8f/c14a8f28499786edffadbbaa81722183.jpg";

  const location = "Phnom Penh, Cambodia";
  const skills = ["React", "JavaScript", "CSS", "Git", "HTML"];
  const links = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    website: "https://poch.sreynich.workers.dev/",
  };

  return (
    <div id="home" className="min-h-screen bg-gray-50/70 text-gray-900">
      {/* Sticky Responsive Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-xs sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sreynich
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href="#home"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
              >
                Contact
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl text-gray-700 hover:bg-gray-100 active:scale-95 p-2 rounded-lg transition-all duration-150 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden mt-3 flex flex-col gap-1 border-t border-gray-100 pt-3 pb-2 animate-in fade-in duration-200">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content Layout: Single column on phones, 2-column on md+ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Sidebar (Full width on mobile, 4 columns on desktop) */}
          <aside className="md:col-span-4 md:sticky md:top-20 space-y-6">
            {/* Profile Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xs border border-gray-200/80">
              <div className="flex flex-col items-center text-center">
                <div className="relative group mb-4">
                  <img
                    className="w-28 h-28 rounded-full object-cover shadow-md ring-4 ring-blue-50 transition-all duration-300 group-hover:scale-105 group-hover:ring-blue-100 group-hover:shadow-lg"
                    src={photoUrl}
                    alt={name}
                  />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                  {name}
                </h1>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  {title}
                </p>
                <p className="text-xs text-gray-400 mt-1 mb-3">
                  {location}
                </p>
                <StatusBadge isAvailable={isAvailable} />
              </div>

              <div className="border-t border-gray-100 my-5" />

              {/* Skills Section in Sidebar */}
              <div>
                <h2
                  id="skills"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
                >
                  Skills
                </h2>
                <Skills skills={skills} />
              </div>

              <div className="border-t border-gray-100 my-5" />

              {/* Connect Section in Sidebar */}
              <div>
                <h2
                  id="contact"
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3"
                >
                  Connect
                </h2>
                <SocialLinks
                  github={links.github}
                  linkedin={links.linkedin}
                  website={links.website}
                />
              </div>
            </div>
          </aside>

          {/* Main Column (Full width on mobile, 8 columns on desktop) */}
          <main className="md:col-span-8 space-y-8">
            {/* About / Goal Card */}
            <section
              id="about"
              className="bg-white rounded-2xl p-6 shadow-xs border border-gray-200/80"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                {goal}
              </p>
            </section>

            {/* Featured Projects Section */}
            <section id="projects">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Featured Projects
                </h2>
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                  2 projects
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <ProjectCard
                  title="Todo List App"
                  status="Completed"
                  statusVariant="default"
                  description="A responsive task management application built with React to organize daily tasks and track productivity."
                  image={todoAppImage}
                  link="https://todo-app-kappa-nine-82.vercel.app/"
                />
                <ProjectCard
                  title="E-Commerce Store"
                  status="In Progress"
                  statusVariant="secondary"
                  description="Modern online shopping interface featuring product catalog, filterable categories, and shopping cart."
                  image="https://cdn.dribbble.com/userupload/23744972/file/original-f09ad4491cf30c1628e68083ad7d12ad.jpg?resize=400x0"
                  link="https://github.com/"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
