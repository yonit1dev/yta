"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const sections = ["about", "projects", "blog", "connect"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="container max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="hidden md:flex space-x-16">
            <NavLink
              href="/#about"
              onClick={handleLinkClick}
              isActive={activeSection === "about"}
            >
              About
            </NavLink>
            <NavLink
              href="/#projects"
              onClick={handleLinkClick}
              isActive={activeSection === "projects"}
            >
              Projects
            </NavLink>
            <NavLink
              href="/blog"
              onClick={handleLinkClick}
              isActive={activeSection === "blog"}
            >
              Blog
            </NavLink>
            <NavLink
              href="/#connect"
              onClick={handleLinkClick}
              isActive={activeSection === "connect"}
            >
              Connect
            </NavLink>
          </div>

          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <span
                className={cn(
                  "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-out",
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-out",
                  isOpen ? "opacity-0 translate-x-2" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute w-6 h-0.5 bg-white transition-all duration-300 ease-out",
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed left-0 right-0 bottom-0 top-16 bg-black/95 z-40 flex items-center justify-center transition-all duration-400 ease-in-out md:hidden",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={cn(
            "flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <NavLink
            href="/#about"
            onClick={handleLinkClick}
            className="text-2xl font-light tracking-wide"
            isActive={activeSection === "about"}
          >
            About
          </NavLink>
          <NavLink
            href="/#projects"
            onClick={handleLinkClick}
            className="text-2xl font-light tracking-wide"
            isActive={activeSection === "projects"}
          >
            Projects
          </NavLink>
          <NavLink
            href="/blog"
            onClick={handleLinkClick}
            className="text-2xl font-light tracking-wide"
            isActive={activeSection === "blog"}
          >
            Blog
          </NavLink>
          <NavLink
            href="/#connect"
            onClick={handleLinkClick}
            className="text-2xl font-light tracking-wide"
            isActive={activeSection === "connect"}
          >
            Connect
          </NavLink>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  className,
  onClick,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-all duration-300 relative",
        "after:absolute after:left-0 after:bottom-0 after:h-[1px] after:bg-white",
        "after:w-0 hover:after:w-full after:transition-all after:duration-300",
        isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
