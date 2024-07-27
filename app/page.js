import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Skills from "./services/page";
import Download from "@/components/Download";

const Home = () => {


  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />{" "}
              <span className="text-accent">Jastine Earl</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I create innovative and stylish web experiences using a range of
              programming languages and technologies.
            </p>

            {/* Buttons and socials */}
            <Download />
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
