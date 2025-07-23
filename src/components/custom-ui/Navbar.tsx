"use client";

import { cn } from "@/lib/utils";
import { Bell, Settings, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";

// Nav links
const navLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/ai-summary", label: "AI Summary" },
  { href: "/dashboard/bind-ground", label: "Bind Ground" },
  { href: "/dashboard/wallet", label: "Wallet" },
];

const navbarVariant: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const mobileMenuVariant: Variants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={navbarVariant}
      className="w-full bg-transparent/80 backdrop-blur-lg sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-8 max-md:py-5">
        <nav className="flex items-center justify-between">
          <LogoWithText variant="blue" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-14">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="relative font-medium text-sm font-manrope text-muted-foreground transition-all"
                >
                  <span className="hover:text-foreground">{link.label}</span>
                  <motion.span
                    className="absolute left-0 bottom-[-2px] h-[1.5px] bg-foreground w-0"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex gap-4 items-center">
            {[Bell, Settings].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon
                  size={22}
                  className="text-muted-foreground"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-muted-foreground"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial="hidden"
            animate="show"
            exit="exit"
            variants={mobileMenuVariant}
            className="md:hidden bg-background border-t px-4 pb-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex gap-4 pt-2">
                <Bell
                  size={22}
                  className="text-muted-foreground"
                />
                <Link href={"/dashboard/setting"}>
                <Settings
                  size={22}
                  className="text-muted-foreground"
                />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

// Logo Components
export const Logo = ({
  variant,
  className,
}: {
  variant: "white" | "blue";
  className?: string;
}) => {
  return (
    <div className={cn("relative w-[23px] h-[20px]", className)}>
      <Image
        src={
          variant === "blue" ? "/logo/blue-logo.svg" : "/logo/white-logo.svg"
        }
        alt="logo"
        fill
        priority
      />
    </div>
  );
};

export const LogoWithText = ({
  variant,
  className,
}: {
  variant: "white" | "blue";
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo
        variant={variant}
        className="w-full min-w-6 h-6"
      />
      <h2 className="text-base font-medium font-inter text-foreground">
        ClariChain
      </h2>
    </div>
  );
};
