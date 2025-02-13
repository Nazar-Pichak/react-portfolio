"use client";

import React from "react"
import toast from "react-hot-toast";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/send-email";
import SubmitBtn from "./submit-btn";

export default function Contact() {
    const ref = useSectionInView("Contact");
    

    return (
        <motion.section ref={ref}
             className="mb-20 px-4 sm:mb-28 w-[min(100%,38rem)] text-center"
             id="contact"
             initial={{opacity: 0}}
             whileInView={{opacity: 1}}
             transition={{duration: 1}}
             viewport={{once: true}}
             >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-3 dark:text-white/80">Please contact me directly at{" "}<a href="mailto:pichak.nazariy@gmail.com" className="violetTextLink">pichak.nazariy@gmail.com</a>{" "}or through this form.</p>

            <form action={async (formData) => {
                const {data, error}  = await sendEmail(formData);
                
                if (error) {
                    toast.error(error);
                    return;
                } else {
                    toast.success("Email sent successfully");
                }
            }}
                className="flex flex-col mt-10 dark:text-black">
                <input name="senderEmail" type="email" className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:opacity-85 dark:focus:opacity-100 dark:outline-none transition-all" placeholder="Your email" required={true} maxLength={500}/>
                <textarea name="message" id="" className="h-52 my-3 rounded-lg borderBlack pt-4 px-4  dark:bg-white dark:opacity-85 dark:focus:opacity-100 dark:outline-none transition-all" placeholder="Your message" required={true} maxLength={5000}></textarea>
                <SubmitBtn/>
            </form>
        </motion.section>
    );
}
