"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Drones & UAV", href: "/services/drones" },
      { name: "Electric Vehicles", href: "/services/electric-vehicles" },
      { name: "Electric Water Sports", href: "/services/electric-water-sports" },
      { name: "Embedded Systems", href: "/services/embedded-systems" },
      { name: "IoT Solutions", href: "/services/iot" },
      { name: "AI at the Edge", href: "/services/ai-edge" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-950/90 backdrop-blur-xl border-b border-white/5">
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center group-hover:shadow-lg group-hover:shadow-brand-500/25 transition-shadow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor" opacity="0.8" />
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Truwo<span className="text-brand-400">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 flex items-center gap-1"
                >
                  {item.name}
                  <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 py-2 bg-dark-900/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white gradient-brand rounded-lg hover:shadow-lg hover:shadow-brand-500/25 transition-all hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-dark-950/98 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 text-sm font-semibold text-white gradient-brand rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
