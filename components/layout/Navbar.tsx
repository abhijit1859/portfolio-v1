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
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <Link
          href="/"
          className="font-serif font-semibold tracking-tight text-xl text-foreground"
        >
          abhijit<span className="font-sans font-light text-muted-foreground">kumar</span>
        </Link>
 
        <div className="flex items-center gap-6 font-medium text-sm sm:text-base">
          
          <Link
            href="/#home"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Projects
          </Link>

          <Link
            href="/experience"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Experience
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Resume
          </a>
          
          <Link 
            href="/blogs"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  )
}