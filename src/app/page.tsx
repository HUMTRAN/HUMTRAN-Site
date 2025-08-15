"use client"
import { ChevronLeftIcon, ChevronRightIcon, Youtube, Facebook, X, Linkedin } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    { src: "/gallery.png", alt: "Humtran gallery 2" },
    { src: "/gallery.png", alt: "Humtran gallery 3" },
    { src: "/gallery.png", alt: "Humtran gallery 4" },
    { src: "/gallery.png", alt: "Humtran gallery 5" },
  ];

  // Projects array
  const projects = [
    {
      title: "SECURITY APP",
      description: "A student-led mobile app for quick alerts and real-time safety updates, built with experts to help protect communities.",
      mainImage: "/security-app.png"
    },
    {
      title: "EDUCATION PLATFORM",
      description: "An innovative learning platform that connects students with industry mentors for hands-on project experience.",
      mainImage: "/security-app.png"
    },
    {
      title: "COMMUNITY HELPER",
      description: "A social impact project that brings together volunteers and communities to solve local challenges.",
      mainImage: "/security-app.png"
    },
    {
      title: "GREEN TECH SOLUTION",
      description: "Sustainable technology projects that address environmental challenges through student innovation.",
      mainImage: "/security-app.png"
    }
  ];

  // Gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at 1 (first real image)
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Projects state
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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

  // Navigation functions
  const goToPrevious = () => {
    setCurrentImageIndex(prev => prev - 1);
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => prev + 1);
  };

  // Project navigation functions
  const goToPreviousProject = () => {
    console.log('Previous clicked, current index:', currentProjectIndex);
    setCurrentProjectIndex(
      currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
    );
  };

  const goToNextProject = () => {
    console.log('Next clicked, current index:', currentProjectIndex);
    setCurrentProjectIndex(
      currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
    );
  };

  // About us cards data
  const aboutCards = [
    {
      title: "WHO WE ARE",
      content:
        "We are a foundation dedicated to bridging the gap between traditional education and real-world problem solving through Science, Technology, Engineering, Arts, and Mathematics (STEAM) by empowering young minds both within and beyond the academic community to foster innovation, create values and drive transformation.",
      bgColor: "bg-[#f4ede6]",
      textColor: "text-[#1c1b1a]",
      shadow: "",
    },
    {
      title: "WHAT WE DO",
      content:
        "We involve students in real-world projects that address genuine challenges. Working alongside experts and professionals from various fields, they gain mentorship, industry knowledge, and practical experience. These collaborations help students bring innovative ideas to life while building solutions that truly matter",
      bgColor: "bg-[#5e3b28]",
      textColor: "text-white",
      shadow: "shadow-[4px_4px_20px_#00000040]",
    },
    {
      title: "OUR GOAL",
      content:
        "We empower the next generation to use their talents, ideas, and skills to inspire change, create value, and drive transformation.",
      bgColor: "bg-[#f4ede6]",
      textColor: "text-[#1c1b1a]",
      shadow: "",
    },
  ];

  return (
    <div className="flex flex-col items-center relative bg-[#f5fcff] overflow-hidden">
      {/* Header/Navigation */}
      <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <nav className="flex items-center justify-between px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto] rounded-[100px]">
            <Image
              className="relative"
              alt="Humtran LOGO"
              src="/logo.svg"
              width={87}
              height={86}
            />
          </div>

          <div className="flex  items-center relative self-stretch">

            {navItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <div
                  className={`inline-flex items-center justify-center px-[50px] py-5 relative self-stretch flex-[0_0_auto] ${index < navItems.length - 1 ? 'border-r border-[#351F14]' : ""
                    }  ${item.active ? "bg-[#351f14]" : ""}`}
                >
                  <div
                    className={`relative  font-work font-normal ${item.active ? "text-white" : "text-[#1c1b1a]"} text-lg tracking-[0] leading-[27px] whitespace-nowrap`}
                  >
                    {item.title}
                  </div>
                </div>



              </React.Fragment>
            ))}
          </div>
        </nav>

        <Separator className="relative self-stretch w-full h-px bg-[#351f14]" />
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-start gap-[30px] pt-[50px] pb-[150px] px-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex max-w-[1340px] items-end gap-[39px] relative w-full flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start justify-end gap-5 relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] font-clash font-normal text-[#351f14] text-[70px] tracking-[0] leading-[normal] whitespace-nowrap">
              HUMTRAN
            </h1>

            <p className="relative w-fit font-work font-normal italic text-[#351f14] text-lg tracking-[0] leading-[normal] whitespace-nowrap">
              Empowering minds &amp; driving transformation
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-96 font-work font-normal text-[#1c1b1a] text-lg tracking-[0] leading-[27px]">
            We are a foundation dedicated to bridging the gap between
            conventional education and real-world problem-solving through
            Science, Technology, Engineering, Arts, and Mathematics (STEAM),
            empowering young minds within and beyond the academic community to
            foster innovation, create values and drive meaningful socio-economic
            impact and transformation.
          </p>

          <Image
            className="relative"
            alt="Hero image humtran"
            src="/hero-image.png"
            width={854}
            height={477}
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="flex flex-col items-start gap-[50px] pt-[50px] pb-[100px] px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#351f14]">
        <div className="inline-flex h-[67px] items-center justify-center px-[50px] py-0 relative">
          <h2 className="relative w-fit font-clash font-normal text-[#f4ede6] text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
            ABOUT US
          </h2>
        </div>

        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex max-w-[1340px] h-[415px] items-start justify-center gap-[50px] relative w-full">
            {aboutCards.map((card, index) => (
              <Card
                key={index}
                className={`inline-flex flex-col items-start gap-2.5 p-5 relative self-stretch flex-[0_0_auto] ${card.bgColor} ${card.shadow} rounded-none border-none`}
              >
                <CardContent className="flex flex-col w-[343px] items-start gap-10 px-0 py-5 relative flex-[0_0_auto]">
                  <h3
                    className={`relative self-stretch mt-[-1.00px] font-work font-bold ${card.textColor} text-xl tracking-[0] leading-[normal]`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`relative ${index === 2 ? "w-[343px]" : "self-stretch"} font-work font-medium ${card.textColor} text-lg tracking-[0] leading-[27px]`}
                  >
                    {card.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex items-center justify-between pt-[150px] pb-0 px-[50px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[550px] items-start gap-[30px] relative">
          <h2 className="relative w-fit mt-[-1.00px] font-clash font-normal text-[#351f14] text-[50px] text-right tracking-[0] leading-[115px] whitespace-nowrap">
            ONGOING PROJECTS
          </h2>

          <p className="relative w-[474px] font-work font-normal text-[#1c1b1a] text-lg tracking-[0] leading-[21px]">
            {projects[currentProjectIndex].description}
          </p>


        </div>

        <div className="flex w-[677px] items-center gap-5 relative">
          <Button
            variant="ghost"
            className="p-0 h-auto hover:scale-110 transition-transform z-50 relative"
            onClick={goToPreviousProject}
          >
            <ChevronLeftIcon className="w-[50px] h-[50px] text-[#351f14]" />
          </Button>

          <div className="relative flex-1 grow h-[572px] flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {projects.map((project, index) => {
                const position = index - currentProjectIndex;
                const isActive = index === currentProjectIndex;
                const isPrev = position === -1 || (currentProjectIndex === 0 && index === projects.length - 1);
                const isNext = position === 1 || (currentProjectIndex === projects.length - 1 && index === 0);

                let transform = '';
                let zIndex = 0;
                let scale = '0.7';
                let opacity = '0.5';

                if (isActive) {
                  transform = 'translateX(0px)';
                  zIndex = 30;
                  scale = '1';
                  opacity = '1';
                } else if (isPrev) {
                  transform = 'translateX(-120px)';
                  zIndex = 20;
                  scale = '0.8';
                  opacity = '0.7';
                } else if (isNext) {
                  transform = 'translateX(120px)';
                  zIndex = 20;
                  scale = '0.8';
                  opacity = '0.7';
                } else {
                  transform = 'translateX(0px)';
                  zIndex = 10;
                  scale = '0.6';
                  opacity = '0';
                }

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-in-out"
                    style={{
                      transform: `${transform} scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <Card className="flex flex-col w-[446px] items-center gap-5 shadow-[4px_4px_20px_#00000040] border-none rounded-none">
                      <CardContent className="p-0 w-full">
                        <div className="relative self-stretch w-full h-[540px] shadow-[4px_4px_50px_#0000000d]"
                          style={{ backgroundImage: `url(${project.mainImage})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }} />
                        <p className="relative self-stretch font-work font-semibold text-[#351f14] text-lg text-center tracking-[0] leading-[normal] py-2">
                          {project.title}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            variant="ghost"
            className="p-0 h-auto hover:scale-110 transition-transform z-50 relative"
            onClick={goToNextProject}
          >
            <ChevronRightIcon className="w-[50px] h-[50px] text-[#351f14]" />
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="flex flex-col items-center gap-[50px] px-0 py-[150px] relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-clash font-normal text-[#351f14] text-[50px] text-center tracking-[0] leading-[normal]">
          GALLERY
        </h2>

        <div className="relative w-[1340px] h-[795px] overflow-hidden">
          <div
            className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {infiniteGalleryImages.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  className="w-full h-[795px] object-cover"
                  alt={image.alt}
                  src={image.src}
                  width={1340}
                  height={795}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#26AADB] border-none h-8 w-8 hover:bg-[#1d8eb8]"
            onClick={goToPrevious}
          >
            <ChevronLeftIcon className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-[#26AADB] border-none h-8 w-8 hover:bg-[#1d8eb8]"
            onClick={goToNext}
          >
            <ChevronRightIcon className="h-4 w-4 text-white" />
          </Button>
        </div>


      </section>

      {/* Call to Action Section */}
      <section className="flex flex-col w-full items-center px-[50px] relative flex-[0_0_auto] h-[432px]" style={{ backgroundImage: 'linear-gradient(0deg, rgba(53,31,20,0.6) 0%, rgba(53,31,20,0.6) 100%), url(/footer.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="flex flex-col max-w-[1000px] w-[1000px] items-center justify-center gap-[30px] relative flex-[0_0_auto] h-full">
          <h2 className="relative self-stretch mt-[-1.00px] font-clash font-normal text-white text-[50px] text-center tracking-[0] leading-[normal]">
            JOIN US NOW
          </h2>

          <p className="relative self-stretch font-work font-medium text-white text-lg text-center tracking-[0] leading-[normal]">
            Every idea has the power to change a life. Join us in shaping the
            next generation of innovators, creators, and problem-solvers. Be
            part of the transformation because the future is built by those who
            dare to act.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-start gap-[50px] px-0 py-[50px] relative self-stretch w-full flex-[0_0_auto] bg-[#351f14]">
        <div className="flex items-center justify-between px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit mt-[-1.00px] font-work font-medium text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <Youtube className="w-5 h-5 text-white" />
            <Facebook className="w-5 h-5 text-white" />
            <X className="w-5 h-5 text-white" />
            <Linkedin className="w-5 h-5 text-white" />
          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 p-[30px] relative flex-[0_0_auto] bg-[#26aadb] rounded-none hover:bg-[#1d8eb8]">
            <span className="relative w-fit mt-[-1.00px] font-work font-semibold text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
              JOIN US
            </span>
          </Button>
        </div>

        <Separator
          className="relative self-stretch w-full h-px text-white"

        />

        <div className="flex items-center justify-center gap-2.5 px-[50px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative flex-1 mt-[-1.00px] font-work font-normal text-white text-lg tracking-[0] leading-[21px]">
            Copyright © 2021 — Humtran. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page