"use client";
import Image from "next/image";
import clientGambar from "../../../public/images/Interface web cntv KLIEN.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Clients() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="lg:pt-72 lg:py-28 md:px-10 max-w-3xl mx-auto px-5 md:py-16" data-aos="zoom-in" data-aos-duration="1000">
        <h1 className="font-bold text-2xl md:text-4xl py-10 text-center pt-28">Clients</h1>
        <Image src={clientGambar} alt="client.jpg" />
      </section>
    </>
  );
}
