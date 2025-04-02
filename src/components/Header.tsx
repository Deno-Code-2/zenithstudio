import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [logoTextIndex, setLogoTextIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // All text variations with their maximum width
  const textVariations = [
    { text: (<><span className="text-custom-orange">Zen</span>ith Studio</>) }, // Default
    { text: "Definitely not SVG" },
    { text: "Web Dev" },
    { text: "superheroes" },
    { text: "running out of ideas" },
    { text: "DM for your projects now" },
    { text: "Book A Call Now" },
    { text: "check the projects pls" },
    { text: "stop now" },
    { text: "for real?" },
    { text: "one more" },
    { text: "maybe one more" }
  ];

  // Set fixed width based on longest text
  const logoWidth = "180px"; // Width for "Definitely not SVG"

  // Handle resize and scroll events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Update IST time
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: !isMobile ? '2-digit' : undefined
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [isMobile]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setLogoTextIndex((prev) => (prev + 1) % textVariations.length);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? "bg-background/95 backdrop-blur-md border-b border-border" 
          : "bg-background/80"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with fixed width - prevents layout shift */}
          <div 
            className={`text-xl font-bold font-syne cursor-pointer flex-shrink-0`}
            style={{ width: logoWidth }}
            onClick={handleLogoClick}
          >
            <div className="whitespace-nowrap">
              {textVariations[logoTextIndex].text}
            </div>
          </div>

          {/* Desktop Navigation - centered and stable */}
          {!isMobile && (
            <nav className="absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-4 md:space-x-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`font-jakarta relative py-1 px-1 text-sm sm:text-base ${
                      location.pathname === item.href
                        ? "text-custom-orange after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-foreground after:left-0 after:bottom-0"
                        : "text-foreground hover:text-custom-orange"
                    }`}
                    onClick={scrollToTop}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            
            {!isMobile && (
              <Button
                asChild
                variant="default"
                className="font-jakarta text-sm sm:text-base"
                size="sm"
              >
                <a 
                  href="https://calendly.com/syedmoinuddin106" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book A Call
                </a>
              </Button>
            )}
            {/* Time Display */}
            {(!isMobile || !mobileMenuOpen) && (
              <div className={`flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-xs ${
                isMobile ? 'hidden sm:flex' : ''
              }`}>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>IST: {currentTime}</span>
              </div>
            )}

            <ThemeToggle />

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                type="button"
                className="p-2 rounded-md text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md font-jakarta ${
                    location.pathname === item.href
                      ? "bg-gray-100 dark:bg-gray-800 text-custom-orange"
                      : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                variant="default"
                className="w-full mt-2 font-jakarta"
                size="sm"
              >
                <a 
                  href="https://calendly.com/syedmoinuddin106" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book A Call
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;