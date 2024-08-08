"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaLaravel,
  FaReact,
  FaWordpress,
  FaPhp,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiLivewire,
} from "react-icons/si";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "This project aims to develop a sleek, professional Wordpress website for Massey, Coican & King, PLLC (MC&K) law firm.",
    stack: [
      {
        name: "Wordpress",
        icon: <FaWordpress />,
      },
    ],
    image: "/assets/work/sitemain.png",
    live: "https://masseylaw.com/",
    github: "",
    status: "under maintenance",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "The site highlight the company's web development services, products, core values, and client partners.",
    stack: [
      {
        name: "Wordpress",
        icon: <FaWordpress />,
      },
    ],
    image: "/assets/work/sitemain2.png",
    live: "https://bluebeanssystems.com/",
    github: "",
    status: "active",
  },
  {
    num: "03",
    category: "fullstack",
    title: "project 3",
    description:
      "This is a web app focuses on managing order and booking request for POPSI'S Catering Services.",
    stack: [
      {
        name: "Laravel",
        icon: <FaLaravel />,
      },
      {
        name: "Html5",
        icon: <FaHtml5 />,
      },
      {
        name: "Css3",
        icon: <FaCss3 />,
      },
      {
        name: "Javascript",
        icon: <FaJs />,
      },
      {
        name: "Livewire",
        icon: <SiLivewire />,
      },
    ],
    image: "/assets/work/sitemain3.png",
    live: "",
    github: "https://github.com/buenavistajastine/capstone-popsis.git",
    status: "not deployed",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px]"
        >
          {projects.map((proj, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group bg-[#27272c] rounded-xl p-10"
              >
                {/* outline num */}
                {/* <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                      {proj.num}
                    </div> */}

                {/* project category */}
                <h2 className="text-[42px] xl:text-[24px] md:text-[32px] font-bold leading-none text-white capitalize">
                  {proj.category} project
                </h2>

                {/* project description */}
                <p className="text-white/60 xl:text-[14px] md:text-[16px]">
                  {proj.description}
                </p>

                {/* stack */}
                <ul className="grid grid-cols-5 gap-4">
                  {proj.stack.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[40px] h-[40px] bg-[#232329] rounded-full flex justify-center items-center group">
                            <div className="text-lg text-white">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>

                <div>
                  <div className="mb-4">
                    <h3 className="text-white/60 xl:text-[14px]">Domain</h3>
                    {proj.live ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm xl:text-[14px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                          <Link href={proj.live}>{proj.live}</Link>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white/80 italic text-sm xl:text-[14px]">
                          Not deployed
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h3 className="text-white/60 xl:text-[14px]">Github</h3>
                    {proj.github ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm sm:whitespace-nowrap xl:text-[14px] overflow-hidden overflow-ellipsis">
                          <Link href={proj.github}>{proj.github}</Link>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-white/80 italic text-sm xl:text-[14px]">
                          No repository
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-white/60 xl:text-[14px]">Status</h3>
                    {proj.status ? (
                      <div className="flex gap-2 items-center">
                        <p className="text-sm capitalize xl:text-[14px]">
                          {proj.status}
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>

                {/* border */}
                {/* <div className="border border-white/20"></div> */}

                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* Live Project */}
                  {/* <Link href={proj.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full flex justify-center items-center group">
                              <p>{proj.live}</p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live Project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link> */}

                  {/* Github Repository */}
                  {/* <Link href={proj.github}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github repo</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link> */}
                </div>
              </div>
            );
          })}
        </motion.section>
      </div>
    </section>
  );
};

export default Work;