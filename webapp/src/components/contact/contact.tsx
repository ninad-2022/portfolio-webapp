"use client";
import useActiveInView from "@/hooks/useActiveInView";
import React from "react";
import Heading from "../heading/heading";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../button";

const Contact = () => {
  const { ref } = useActiveInView({
    SectionName: "Experience",
    threshold: 0.5,
  });

  return (
    <section id="contact" ref={ref}>
      <Heading>contact me</Heading>
      <p>
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ninadbhoir010@gmail.com">
          Click here
        </a>{" "}
        for mail or through below form
      </p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <Button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"
          type="submit"
          icon={<FaPaperPlane />}
        >
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Contact;
