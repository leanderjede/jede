'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";



const services = [
  {
    title: "Kostenlose Erstberatung und Besichtigung vor Ort",
    link: "/service/Kostenlose",
    description: "Wir bieten Ihnen eine kostenlose Erstberatung und Besichtigung vor Ort, um Ihre Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln.",
    imageUrl: "/navimg/download.jpg"
  },
  {
    title: "Trockenbau- und Putzarbeiten",
    link: "/service/trockenbau-putzarbeiten",
    description: "Professionelle Trockenbau- und Putzarbeiten zur Gestaltung und Renovierung Ihrer Räume mit hochwertigen Materialien.",
    imageUrl: "/navimg/2.jpg"
  },
  {
    title: "Malerarbeiten",
    link: "/service/malerarbeiten",
    description: "Fachgerechte Malerarbeiten für Innen- und Außenbereiche, die Ihrem Raum neues Leben verleihen.",
    imageUrl: "/navimg/3.jpg"
  },
  {
    title: "Verlegen von medizinischen PVC-Böden",
    link: "/service/medizinische-pvc-boeden",
    description: "Spezialisierte Verlegung von medizinischen PVC-Böden für sterile und hygienische Umgebungen.",
    imageUrl: "/navimg/4.jpg"
  },
  {
    title: "Verlegen von Bodenfliesen",
    link: "/service/bodenfliesen",
    description: "Präzises Verlegen von Bodenfliesen für eine langlebige und ästhetische Bodenlösung.",
    imageUrl: "/navimg/5.jpg"
  },
  {
    title: "Gießen von Estrichböden sowie Ausgleichsmasse",
    link: "/service/estrichboeden-ausgleichsmasse",
    description: "Fachgerechtes Gießen von Estrichböden und Ausgleichsmasse für ebene und belastbare Untergründe.",
    imageUrl: "/navimg/6.jpg"
  },
  {
    title: "Verlegen von Holzböden (Dielen, Parkett)",
    link: "/service/holzboden-verlegen",
    description: "Verlegung hochwertiger Holzböden wie Dielen und Parkett für ein edles Ambiente.",
    imageUrl: "/navimg/7.jpg"
  },
  {
    title: "Verlegen von Laminat- und Vinylböden",
    link: "/service/laminat-vinylboden",
    description: "Robuste Laminat- und Vinylböden für eine strapazierfähige und pflegeleichte Lösung.",
    imageUrl: "/navimg/8.jpg"
  },
  {
    title: "Verlegen von PVC-Böden",
    link: "/service/pvc-boeden",
    description: "Kostengünstige und praktische PVC-Böden für verschiedene Anwendungsbereiche.",
    imageUrl: "/navimg/9.jpg"
  },
  {
    title: "Mauerwerkstrockenlegung",
    link: "/service/mauerwerkstrockenlegung",
    description: "Effiziente Trockenlegung von feuchtem Mauerwerk zur Vermeidung von Feuchtigkeitsschäden.",
    imageUrl: "/navimg/10.jpg"
  }
];






const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!isServicesDropdownOpen);
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true); // Navbar is scrolled
      } else {
        setIsScrolled(false); // Navbar is at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md" // White background with shadow when scrolled
          : "bg-white/10 backdrop-blur-md" // Blurred background at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-black">
               <Image
      
                src="/logo.png"
                alt="Logo"
              width={224}
                height={56}
                className="w-68 max-sm:w-58 max-sm:-ml-2  mt-4"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-white/20 focus:outline-none"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link
              href="/about"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            {/* Services Dropdown */}
            <div className="relative group ">
              <button
                className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                onClick={toggleServicesDropdown}
              >
                Services
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute -mt-2 hidden h-64 overflow-y-auto -left-[400px] group-hover:block bg-white rounded-md shadow-lg mt-1 w-[950px] scrollbar-hide">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl bg-white rounded-lg shadow-lg">
    {services.map((item,index) => (
    
      <Link key={index} className="flex items-center gap-2" href={item.link}>
       <Image
      width={200}
         height={200}
        src={item.imageUrl}
        alt="Neubau"
        className="w-20 h-20 rounded-lg bg-cover"
      />
      <div>
        <h3 className="text-xs font-bold">{item.title}</h3>
        <p className="text-gray-600 text-xs">{item.description.slice(0,40)}..</p>
      </div>
    </Link>    
    
    ))}
  

 
  
  </div>
</div>

            </div>
            <Link
              href="/gallery"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              Galerie
            </Link>
            <Link
              href="/Faq"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQ
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/contact"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
            onClick={closeMobileMenu} // Close menu on click

          >
            About
          </Link>
          {/* Services Dropdown for Mobile */}
          <div>
            <button
              className="w-full text-left text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium focus:outline-none"
              onClick={toggleServicesDropdown}
            >
              Services
              <svg
                className="w-4 h-4 inline ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`pl-4 space-y-1 h-60 overflow-x-scroll ${isServicesDropdownOpen ? "block" : "hidden"}`}
              id="mobile-services-dropdown"
            >
                  {services.map((item,index) => (
                     <Link
                     key={index}
                     href={item.link}
                     onClick={closeMobileMenu} // Close menu on click

                     className="block text-black  px-2 py-2 border-black border-2 hover:bg-white/20"
                   >
                     {item.title}
                   </Link>
                  
                  
                  ))}
          
            </div>
          </div>
          <Link
            href="/gallery"
            onClick={closeMobileMenu} // Close menu on click

            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            Galerie
          </Link>
          <Link
            href="/Faq"
            onClick={closeMobileMenu} // Close menu on click

            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu} // Close menu on click

            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;