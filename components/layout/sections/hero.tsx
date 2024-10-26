"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];



export const HeroSection = () => {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define color classes based on the theme (light or dark)
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const secondaryTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const backgroundColor = isDarkMode ? "bg-gray-900" : "bg-white";
  const buttonPrimaryColor = isDarkMode ? "bg-purple-700 hover:bg-purple-800" : "bg-purple-600 hover:bg-purple-700";
  const buttonSecondaryColor = isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300";

  const handleGetStartedClick = () => {
    setIsModalOpen(true);
  };

  return (
    <section className={`relative min-h-screen ${backgroundColor} w-full -mt-8 overflow-hidden`}>
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-20 relative z-10">
        
        {/* Header Text and Badge */}
        <div className="text-center space-y-8">
          <Badge variant="outline" className={`text-sm py-2 ${secondaryTextColor}`}>
            <span className={`mr-2 text-primary`}>
              <Badge className={`bg-transparent text-inherit border border-transparent ${isDarkMode ? 'bg-purple-600 text-white' : 'bg-purple-300 text-gray-800'}`}>
                New
              </Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>

          {/* Hero Title */}
          <div className={`max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold ${textColor}`}>
            <h1>
              Drive your startup Forward with
              <span className="text-transparent px-2 bg-gradient-to-r from-[#9F7AEA] to-[#6B46C1] bg-clip-text">
                Growth
              </span>
              Hacking expertise
            </h1>
          </div>

          {/* Subtext */}
          <p className={`max-w-screen-sm mx-auto text-sm ${secondaryTextColor}`}>
            {`Join our vibrant community of creators to access exclusive resources and support, and help us grow a powerful SaaS platform together !!`}
          </p>

          {/* Buttons */}
          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button onClick={handleGetStartedClick} className={`w-5/6 md:w-1/4 rounded-full font-bold group/arrow ${buttonPrimaryColor} text-white`}>
              Generate Presentation
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className={`w-5/6 md:w-1/4 rounded-full font-bold ${buttonSecondaryColor}`}
            >
              <Link
                href="http://localhost:3000/"
                target="_blank"
              >
                Startup Advisor
              </Link>
            </Button>
          </div>

                   {/* Animated Tooltip */}
                   <div className="py-6 flex justify-center">  {/* Adjust the padding here if needed */}
  <AnimatedTooltip items={people} />
</div>
        </div>

        {/* Image Section */}
        <div className="relative group mt-20">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-purple-200/50 rounded-full blur-3xl"></div>

          <Image
            width={1200}
            height={1200}
            className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-purple-400/30"
            src={
              theme === "light"
                ? "/hero-image-light.png"
                : "/hero-image-dark.png"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>

        {/* Modal Component */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white dark:bg-gray-900 w-4/5 md:w-3/5 lg:w-1/2 p-8 rounded-lg shadow-lg">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
              >
                &times;
              </button>
              
              <iframe
                src="https://app.presentations.ai/"
                className="w-full h-[400px] rounded-lg"
                title="Get Started"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
