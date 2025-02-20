"use client";

import Image from "next/image";
import foto from "../../../public/images/Interface web cntv photo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="max-w-6xl mx-auto py-6 px-6" id="info" data-aos="flip-right">
        <h1 className="font-bold text-2xl md:text-4xl py-10 text-center">Info</h1>

        <div>
          <div className="w-1/2 md:w-1/3 lg:w-1/6 mx-auto">
            <Image src={foto} alt="" />
          </div>
          <div className="max-w-md text-justify mx-auto">
            <p className="pb-3 pt-3 font-extralight text-sm md:text-base">
              No idea is too big or too small for us and we will endeavor to do our best to bring your idea to life. Let we transform even the simplest of idea into innovative and well-crafted products that give your business an edge over
              your competitors
            </p>
            <p className="text-center">- Arief Handoko - </p>
          </div>
        </div>
      </section>
    </>
  );
}
