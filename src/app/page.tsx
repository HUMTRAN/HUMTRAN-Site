"use client"
import { Youtube, Facebook, X, Linkedin } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AboutUsSection from "../../about-section";

const Page = () => {
  // Navigation items
  const navItems = [
    { title: "HOME", active: true },
    { title: "ABOUT", active: false },
    { title: "PROJECTS", active: false },
  ];

  // Gallery images array
  const galleryImages = [
    { src: "/gallery.png", alt: "Humtran gallery 1" },
    { src: "/gallery-2.png", alt: "Humtran gallery 2" },
    { src: "/gallery-3.png", alt: "Humtran gallery 3" },
    { src: "/gallery-4.png", alt: "Humtran gallery 4" }];

  // Projects array
  const projects = [
    {
      title: "SECURITY APP",
      description: "A student-led mobile app for quick alerts and real-time safety updates, built with experts to help protect communities.",
      mainImage: "/security-app.png"
    },
    {
      title: "PLASTIC FLOOR FINISHING",
      description: "A group of students has embarked on a creative project that transforms discarded PET bottles into materials for floor finishing. By recycling and processing the bottles, they aim to produce durable, cost-effective, and eco-friendly alternatives to conventional floor finishes.",
      mainImage: "/floor.png"
    },

  ];

  // Gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at 1 (first real image)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Projects state - Updated for slider
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1); // Start at 1 (first real project)
  const [isProjectTransitioning, setIsProjectTransitioning] = useState(true);

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Create infinite projects array with clones
  const infiniteProjects = [
    { ...projects[projects.length - 1] }, // Clone of last project
    ...projects,
    { ...projects[0] } // Clone of first project
  ];

  // Create infinite gallery array with clones
  const infiniteGalleryImages = [
    galleryImages[galleryImages.length - 1], // Last image clone at beginning
    ...galleryImages, // All original images
    galleryImages[0] // First image clone at end
  ];

  // Auto-slide effect for gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev + 1);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop transitions
  useEffect(() => {
    if (currentImageIndex === 0) {
      // At first clone, jump to last real image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(galleryImages.length);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    } else if (currentImageIndex === infiniteGalleryImages.length - 1) {
      // At last clone, jump to first real image
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(1);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentImageIndex, galleryImages.length, infiniteGalleryImages.length]);

  // Handle infinite loop transitions for projects
  useEffect(() => {
    if (currentProjectIndex === 0) {
      // At first clone, jump to last real project
      setTimeout(() => {
        setIsProjectTransitioning(false);
        setCurrentProjectIndex(projects.length);
        setTimeout(() => setIsProjectTransitioning(true), 50);
      }, 500);
    } else if (currentProjectIndex === infiniteProjects.length - 1) {
      // At last clone, jump to first real project
      setTimeout(() => {
        setIsProjectTransitioning(false);
        setCurrentProjectIndex(1);
        setTimeout(() => setIsProjectTransitioning(true), 50);
      }, 500);
    }
  }, [currentProjectIndex, projects.length, infiniteProjects.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex(prev => prev - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => prev + 1);
  };

  // Project navigation functions - Updated for slider
  const goToPreviousProject = () => {
    setCurrentProjectIndex(prev => prev - 1);
  };

  const goToNextProject = () => {
    setCurrentProjectIndex(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center relative bg-[#f5fcff] overflow-hidden">
      {/* Header/Navigation */}
      <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <nav className="flex items-center justify-between pl-4 md:pl-[50px] py-2 md:py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] rounded-[100px]">
            <Image
              className="relative w-12 h-12 md:w-[87px] md:h-[86px]"
              alt="Humtran LOGO"
              src="/logo.svg"
              width={87}
              height={86}
            />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center relative self-stretch overflow-x-auto md:overflow-visible">
            {navItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <div
                  className={`inline-flex items-center justify-center px-4 md:px-[50px] py-3 md:py-5 relative self-stretch flex-[0_0_auto] ${index < navItems.length - 1 ? 'border-r border-[#27ABDC]' : ""}  ${item.active ? "bg-[#27ABDC]" : ""}`}
                >
                  <div
                    className={`relative font-work font-normal ${item.active ? "text-white" : "text-[#1c1b1a]"} text-sm md:text-lg tracking-[0] leading-[27px] whitespace-nowrap`}
                  >
                    {item.title}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="block md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-[#1c1b1a] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-[#1c1b1a] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-[#1c1b1a] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="block md:hidden w-full bg-white border-t border-[#27ABDC]">
            {navItems.map((item, index) => (
              <div
                key={item.title}
                className={`w-full px-4 py-3 ${index < navItems.length - 1 ? 'border-b border-[#27ABDC]' : ""} ${item.active ? "bg-[#27ABDC]" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div
                  className={`font-work font-normal ${item.active ? "text-white" : "text-[#1c1b1a]"} text-sm tracking-[0] leading-[27px]`}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        )}

        <Separator className="relative self-stretch w-full h-px bg-[#27ABDC]" />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 md:gap-[30px] pt-6 md:pt-[50px] pb-12 md:pb-[150px] px-4 md:px-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col md:flex-row max-w-[1340px] items-start md:items-end gap-6 md:gap-[39px] relative w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-end relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] font-clash font-bold text-[#170902] text-[70px] tracking-[0] leading-none">
              HUMTRAN
            </h1>

            <p className="relative w-fit font-work font-normal italic text-[#170902] text-[17px] tracking-[0] leading-none">
              Empowering minds &amp; driving transformation.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-full md:w-96 font-work font-normal text-[#1c1b1a] text-base md:text-lg tracking-[0] leading-relaxed md:leading-[27px]">
            We are a foundation dedicated to bridging the gap between conventional education and real-world problem-solving through Science, Technology, Engineering, Arts, and Mathematics (STEAM), empowering young minds within and beyond the academic community to foster innovation, create values, drive meaningful sociopolitical, socioeconomic impact and transformation.
          </p>

          <div className="w-full md:w-auto flex justify-center">
            <Image
              className="relative w-full max-w-md md:max-w-none md:w-[854px] h-auto md:h-[477px] object-contain"
              alt="Hero image humtran"
              src="/hero-image.png"
              width={854}
              height={477}
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUsSection />


      {/* Projects Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 pt-12 md:pt-[150px] pb-0 px-4 md:px-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full md:w-[550px] items-start gap-4 md:gap-[30px] relative">
          <h2 className="relative w-fit mt-[-1.00px] font-clash  text-5xl font-semibold   text-[#170902] text-2xl md:text-[50px] text-left md:text-right leading-[60px]">
            ONGOING PROJECTS
          </h2>

          <p className="relative w-full md:w-[474px] font-work font-normal text-[#1c1b1a] text-base md:text-lg tracking-[0] leading-relaxed md:leading-[21px]">
            {projects[Math.max(0, Math.min(currentProjectIndex - 1, projects.length - 1))].description}
          </p>
        </div>

        <div className="flex w-full md:w-[677px] items-center gap-4 md:gap-5 relative">
          <Image
            src="/CaretLeft.svg"
            alt="Previous project"
            width={50}
            height={50}
            className="w-8 h-8 md:w-[50px] md:h-[50px] cursor-pointer hover:scale-110 transition-transform z-50 relative flex-shrink-0"
            onClick={goToPreviousProject}
          />

          <div className="relative flex-1 grow h-80 md:h-[572px] overflow-hidden">
            <div
              className={`flex ${isProjectTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}
            >
              {infiniteProjects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 flex items-center justify-center">
                  <div className="flex flex-col w-72 md:w-[446px] items-center gap-2 md:gap-5 border-none rounded-none">
                    <div className="p-0 w-full">
                      <div className="relative self-stretch w-full h-72 md:h-[540px]"
                        style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
                      <p className="relative self-stretch font-work font-semibold text-[#351f14] text-base md:text-lg text-center tracking-[0] leading-[normal] py-2 md:py-2">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Image
            src="/CaretRight.svg"
            alt="Next project"
            width={50}
            height={50}
            className="w-8 h-8 md:w-[50px] md:h-[50px] cursor-pointer hover:scale-110 transition-transform z-50 relative flex-shrink-0"
            onClick={goToNextProject}
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex flex-col items-center gap-6 md:gap-[50px] px-4 md:px-0 py-12 md:py-[150px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-clash  text-[#170902] text-5xl font-semibold    text-center tracking-[0] leading-[normal]">
          GALLERY
        </h2>

        <div className="relative w-full max-w-[1340px] h-48 md:h-[795px] overflow-hidden mx-auto">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {infiniteGalleryImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  className="w-full h-48 md:h-[795px] object-cover"
                  alt={image.alt}
                  src={image.src}
                  width={1340}
                  height={795}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 md:gap-10 justify-center">
          <Image
            src="/CaretLeftBig.svg"
            alt="Previous image"
            width={50}
            height={50}
            className="w-10 h-10 md:w-[50px] md:h-[50px] cursor-pointer hover:scale-110 transition-transform"
            onClick={goToPrevious}
          />
          <Image
            src="/CaretRightBig.svg"
            alt="Next image"
            width={50}
            height={50}
            className="w-10 h-10 md:w-[50px] md:h-[50px] cursor-pointer hover:scale-110 transition-transform"
            onClick={goToNext}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col w-full items-center px-4 md:px-[50px] relative flex-[0_0_auto] h-64 md:h-[432px]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(53,31,20,0.6) 0%, rgba(53,31,20,0.6) 100%), url(/footer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col max-w-[1000px] w-full md:w-[1000px] items-center justify-center gap-4 md:gap-[30px] relative flex-[0_0_auto] h-full px-4">
          <h2 className="relative self-stretch mt-[-1.00px] font-clash font-semibold text-white text-2xl md:text-[50px] text-center tracking-[0] leading-[normal]">
            JOIN US NOW
          </h2>

          <p className="relative self-stretch font-work font-medium text-white text-sm md:text-lg text-center tracking-[0] leading-relaxed md:leading-[normal]">
            Every idea has the power to change a life. Join us in shaping the
            next generation of innovators, creators, and problem-solvers. Be
            part of the transformation because the future is built by those who
            dare to act.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-start gap-6 md:gap-[50px] px-0 py-6 md:py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-[#170902]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 px-4 md:px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-10 relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit mt-[-1.00px] font-work font-medium text-white text-sm md:text-lg tracking-[0] leading-[normal] whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex gap-4 order-first md:order-none">
            <Youtube className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <Facebook className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 p-4 md:p-[30px] relative flex-[0_0_auto] bg-[#26aadb] rounded-none hover:bg-[#1d8eb8] w-full md:w-auto">
            <span className="relative w-fit mt-[-1.00px] font-work font-semibold text-white text-sm md:text-lg tracking-[0] leading-[normal] whitespace-nowrap">
              JOIN US
            </span>
          </Button>
        </div>

        <Separator className="relative self-stretch w-full h-px text-white" />

        <div className="flex items-center justify-center gap-2.5 px-4 md:px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 mt-[-1.00px] font-work font-normal text-white text-sm md:text-lg tracking-[0] leading-[21px] text-center md:text-left">
            Copyright © 2021 — Humtran. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page