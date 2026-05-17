"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    setDarkMode(!darkMode)
  }

  return (
    <header className="fixed top-0 left-0 w-full border-b border-border bg-background/70 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ">
        
      
        <Link
          href="/"
          className=" font-bold tracking-wider text-2xl"
        >
          Abhijit <span className="dark:text-teal-300">Kumar</span>
        </Link>

 
        <div className="flex items-center gap-6  font-medium text-lg">
          
          <a
            href="#home"
            className="transition hover:text-primary dark:hover:text-teal-400"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition hover:text-primary dark:hover:text-teal-400"
          >
            Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="transition hover:text-primary dark:hover:text-teal-400"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="transition hover:text-primary dark:hover:text-teal-400"
          >
            Contact
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-border hover:bg-accent transition dark:hover:text-teal-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  )
}