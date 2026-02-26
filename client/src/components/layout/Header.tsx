import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, ShieldAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const NAVIGATION = [
  {
    title: "Apply",
    items: [
      { label: "Apply Now", href: "/apply" }
    ]
  },
  {
    title: "Academics",
    items: [
      { label: "Undergraduate", href: "/academics/undergraduate" },
      { label: "Graduate", href: "/academics/graduate" },
      { label: "Certifications", href: "/academics/certifications" }
    ]
  },
  {
    title: "Student Life",
    items: [
      { label: "Our Students", href: "/students" }
    ]
  }
];

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#111] text-gray-300 text-xs py-2 px-4 sm:px-8 flex justify-end space-x-6 border-b border-gray-800">
        <a href="#" className="hover:text-white transition-colors">Directory</a>
        <a href="#" className="hover:text-white transition-colors">Campus Map</a>
        <a href="#" className="hover:text-white transition-colors">Login</a>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled 
            ? "bg-[#1a1a1a] shadow-lg shadow-black/20 py-3" 
            : "bg-[#1a1a1a] py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center group-hover:scale-105 transition-transform">
              <ShieldAlert className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-white text-xl leading-tight tracking-wide">
                Arena Web Security
              </span>
              <span className="text-primary text-[0.65rem] font-bold uppercase tracking-widest">
                Institute of Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAVIGATION.map((navItem) => (
              <div 
                key={navItem.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(navItem.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-semibold flex items-center space-x-1 transition-all",
                    activeDropdown === navItem.title ? "text-primary bg-white/5" : "text-gray-200 hover:text-white hover:bg-white/5"
                  )}
                >
                  <span>{navItem.title}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    activeDropdown === navItem.title ? "rotate-180 text-primary" : "text-gray-400"
                  )} />
                </button>

                {/* Dropdown Menu - Semi transparent dark */}
                <AnimatePresence>
                  {activeDropdown === navItem.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-56 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden py-2"
                    >
                      {navItem.items.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href}
                          className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-primary/20 hover:pl-6 transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Quick Apply Button */}
            <Link 
              href="/apply" 
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#1a1a1a] border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col space-y-2">
                {NAVIGATION.map((navItem) => (
                  <div key={navItem.title} className="flex flex-col space-y-1">
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider px-2 pt-2">
                      {navItem.title}
                    </div>
                    {navItem.items.map((item) => (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className="text-white bg-white/5 rounded px-4 py-3 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
