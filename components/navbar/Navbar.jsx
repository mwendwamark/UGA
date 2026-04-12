"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Student Life", href: "/student-life" },
  // { label: "News", href: "/news" },
  // { label: "Contact", href: "/contact" },
];

export function Navbar({ variant = "primary" }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setIsScrolled(true);

        if (currentScrollY > lastScrollY.current) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsScrolled(false);
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  const getNavbarClasses = () => {
    const classes = [styles.navbar];

    if (isScrolled) {
      classes.push(styles.scrolled);
    }

    if (isHidden && isScrolled) {
      classes.push(styles.hidden);
    }

    return classes.join(" ");
  };

  const getLinkClasses = (href) => {
    const classes = [styles.navLink];
    if (pathname === href) {
      classes.push(styles.active);
    }
    return classes.join(" ");
  };

  const getIconColor = () => {
    if (isScrolled) return "#1e1e1e";
    return variant === "primary" ? "#ffffff" : "#1e1e1e";
  };

  return (
    <>
      <nav className={getNavbarClasses()}>
        <div className={styles.nav_container}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/assets/logo.webp"
                alt="Utumishi Girls Academy"
                width={100}
                height={40}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>

          <div className={styles.pill}>
            <ul className={styles.navLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={getLinkClasses(link.href)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cta}>
            <Button href="/contact" variant={isScrolled ? "black" : "yellow"}>
              Contact Us
            </Button>
          </div>

          <button
            className={styles.menuButton}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} color={getIconColor()} />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.drawerOverlay} ${isDrawerOpen ? styles.open : ""}`}
        onClick={closeDrawer}
      />

      <div
        className={`${styles.drawer} ${isDrawerOpen ? styles.drawerOpen : ""}`}
      >
        <button
          className={styles.closeButton}
          onClick={closeDrawer}
          aria-label="Close menu"
        >
          <X size={24} color="#ffffff" />
        </button>

        <ul className={styles.drawerLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.drawerLink} ${
                  pathname === link.href ? styles.drawerLinkActive : ""
                }`}
                onClick={closeDrawer}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.drawerCta}>
          <Button href="/contact" variant="white">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
