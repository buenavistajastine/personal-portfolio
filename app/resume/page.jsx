"use client";

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

const about = {
  title: "About me",
  description: "Here’s a bit more about me and my journey in web development.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jastine Earl Buenavista",
    },

    {
      fieldName: "Phone",
      fieldValue: "09391118033",
    },
    {
      fieldName: "Email",
      fieldValue: "buenavistajastineearl@gmail.com",
    },

    {
      fieldName: "Experience",
      fieldValue: "11 Months (started in August 2023)",
    },

    {
      fieldName: "Address",
      fieldValue: "Jawa, Valencia, Negros Oriental",
    },
  ],
};

// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a web developer, I specialize in designing and building intuitive and visually appealing digital experiences. With knowledge of various programming languages and technologies, I make complex ideas easy to use and visually engaging.",
  items: [
    {
      company: "Bluebeans Systems Inc.",
      position: "Part-time Front-End Web Developer",
      duration: "August 2023 - Present",
    },
  ],
};

// eduacation
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I have a Bachelor Degree in Information Technology from NORSU, where I learned the essentials of web development and programming. My education provided me with the skills to create effective and engaging digital solutions.",
  items: [
    {
      school: "Valencia National High School",
      course: "Computer Systems Servicing",
      duration: "2013 - 2020",
    },
    {
      school: "Negros Oriental State University",
      course: "BS Information Technology",
      duration: "2020 - 2024",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description:
    "I am skilled in various programming languages and web technologies, allowing me to create effective and engaging digital solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaLaravel />,
      name: "laravel",
    },
    {
      icon: <SiLivewire />,
      name: "livewire",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaReact />,
      name: "react native",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaWordpress />,
      name: "wordpress",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
  ],
};

// components
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((expe, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{expe.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {expe.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* data */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{expe.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((edu, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{edu.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {edu.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* data */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{edu.school}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:gap-[30px] gap-4">
                    {skills.skillList.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
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
                </div>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((about, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start sm:justify-start gap-4"
                      >
                        <div className="flex-1 justify-between">
                          <p className="text-white/60">
                            {about.fieldName}
                          </p>
                          <h3 className="text-lg">{about.fieldValue}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
