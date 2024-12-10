"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Link from "next/link";
import Footer from "@/components/Footer";
function page() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl mt-20 mb-5 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Contact Us
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mb-5 mx-auto my-2 text-sm text-center relative z-10">
            We're here to help with any questions about our courses, programs, or events.
            Reach out and let us know how we can assist you in your musical journey.
          </p>
          <input
            type="text"
            placeholder="Your Email Address"
            className="rounded-lg border p-4 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-300 placeholder:text-neutral-700 px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:outline-none mt-4"
          />
          <Link
            href={"#"}
            className="mt-4 inline-block px-4 py-2 rounded bg-teal-600 text-white border border-teal-600 hover:bg-teal-700 hover:text-white transition duration-200"
          >
            Send Message
          </Link>

        </div>
        <BackgroundBeams />
      </div>
      <Footer />
    </>
  )
}

export default page
