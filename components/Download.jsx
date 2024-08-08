"use client";

import { FiDownload } from "react-icons/fi";
import { Button } from "./ui/button";
import Social from "@/components/Social";

const Download = () => {
  const downloadFile = () => {
    const filename = "Resume.PDF";
    const filePath = `/${filename}`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <Button
        onClick={downloadFile}
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download Resume</span>
        <FiDownload className="text-xl" />
      </Button>
      <div className="mb-8 xl:mb-0">
        <Social
          containerStyles="flex gap-4"
          iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
        />
      </div>
    </div>
  );
};

export default Download;
