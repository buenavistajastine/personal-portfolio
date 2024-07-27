"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "09391118033",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: (
      <a href="mailto:buenavistajastineearl@gmail.com" className="text-white">
        buenavistajastineearl@gmail.com
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jawa, Valencia, Negros Oriental",
  },
];

const Contact = () => {
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
          className="gap-6 md:gap-12"
        >
          <div className="flex flex-col xl:flex-row xl:gap-8">
            {/* form */}
            <div className="w-full xl:w-1/2 flex items-center xl:justify-end order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-6 sm:p-8 md:p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-accent">
                  Get in touch
                </h3>
                <p className="text-white/60 text-sm sm:text-base md:text-lg">
                  I'd love hearing from you or just say hello.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone" />
                </div>
                {/* select */}
                {/* Uncomment if needed */}
                {/* <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select> */}
                {/* textarea */}
                <Textarea
                  className="h-[200px] md:h-[250px]"
                  placeholder="Type your message here."
                />
                {/* button */}
                <Button size="md" className="self-start">
                  Send Message
                </Button>
              </form>
            </div>

            {/* info */}
            <div className="w-full xl:w-1/2 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10 w-full">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[48px] h-[48px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm sm:text-base md:text-md">{item.title}</p>
                      <h3 className="text-lg sm:text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
    // <section className="h-full">
    //   <div className="container mx-auto h-full">
    //   <motion.section
    //       initial={{ opacity: 0 }}
    //       animate={{
    //         opacity: 1,
    //         transition: {
    //           delay: 2.4,
    //           duration: 0.4,
    //           ease: "easeIn",
    //         },
    //       }}
    //       className="gap-6 md:gap-12"
    //     >
    //       <div className="flex flex-col xl:flex-row xl:gap-8">
    //         {/* form */}
    //         <div className="w-full xl:w-1/2 flex items-center xl:justify-end order-2 xl:order-none">
    //           <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
    //             <h3 className="text-2xl sm:text-2xl md:text-4xl text-accent">
    //               Get in touch
    //             </h3>
    //             <p className="text-white/60 text-sm sm:text-md md:text-lg">
    //               I'd love hearing from you or just say hello.
    //             </p>
    //             {/* input */}
    //             <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
    //               <Input type="firstname" placeholder="Firstname" />
    //               <Input type="lastname" placeholder="Lastname" />
    //               <Input type="email" placeholder="Email" />
    //               <Input type="phone" placeholder="Phone" />
    //             </div>
    //             {/* select */}
    //             {/* Uncomment if needed */}
    //             {/* <Select>
    //               <SelectTrigger className="w-full">
    //                 <SelectValue placeholder="Select a service" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectGroup>
    //                   <SelectLabel>Select a service</SelectLabel>
    //                   <SelectItem value="est">Web Development</SelectItem>
    //                   <SelectItem value="cst">UI/UX Design</SelectItem>
    //                   <SelectItem value="mst">Logo Design</SelectItem>
    //                 </SelectGroup>
    //               </SelectContent>
    //             </Select> */}
    //             {/* textarea */}
    //             <Textarea
    //               className="h-[200px] md:h-[250px]"
    //               placeholder="Type your message here."
    //             />
    //             {/* button */}
    //             <Button size="md" className="self-start">
    //               Send Message
    //             </Button>
    //           </form>
    //         </div>

    //         {/* info */}
    //         <div className="w-full xl:w-1/2 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
    //           <ul className="flex flex-col gap-10 w-full">
    //             {info.map((item, index) => (
    //               <li key={index} className="flex items-center gap-6">
    //                 <div className="w-[48px] h-[48px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
    //                   <div className="text-[24px]">{item.icon}</div>
    //                 </div>
    //                 <div className="flex-1">
    //                   <p className="text-white/60 text-sm sm:text-sm md:text-md">{item.title}</p>
    //                   <h3 className="text-lg sm:text-xl">{item.description}</h3>
    //                 </div>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     </motion.section>
    //   </div>
    // </section>
  );
};

export default Contact;
