"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Import Gambar
import logo1 from "../../../public/images/Interface web cntv ICON Portfolio-02.png";
import logo2 from "../../../public/images/Interface web cntv ICON Portfolio-03.png";
import logo3 from "../../../public/images/Interface web cntv ICON Portfolio-04.png";
import logo4 from "../../../public/images/Interface web cntv ICON Portfolio-05.png";
import logo5 from "../../../public/images/Interface web cntv ICON Portfolio-06.png";
import logo6 from "../../../public/images/Assets new Interface web cntv-07.png";

import logo7 from "../../../public/images/logo/1.png";
import logo8 from "../../../public/images/logo/2.png";
import logo9 from "../../../public/images/logo/3.jpg";
import logo10 from "../../../public/images/logo/4.png";
import logo11 from "../../../public/images/logo/5.png";
import logo12 from "../../../public/images/logo/6.png";
import logo13 from "../../../public/images/logo/7.jpg";
import logo14 from "../../../public/images/logo/8.png";
import logo15 from "../../../public/images/logo/9.png";

// List Video
const videoList = ["/videos/1.mp4", "/videos/2.mp4", "/videos/3.mp4", "/videos/4.mp4", "/videos/5.mp4"];

export default function Portfolio() {
  const [PopUpLogo, setPopUpLogo] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(videoList[0]); // Default video pertama
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Buat simpen gambar yang diklik

  useEffect(() => {
    AOS.init();
  }, []);

  // Handle klik gambar utama
  const handleClick = (index: number) => {
    if (index === 0) {
      setPopUpLogo(true);
    } else if (index === 2) {
      setIsVideoPopupOpen(true);
    } else if (index === 4) {
      window.open("https://imanihackingbootcamp.com/", "_blank");
    } else if (index === 5) {
      window.open("https://drive.google.com/drive/folders/1DOaqlzXqT-FKtUHukNDBzFlFldSNh9yG", "_blank");
    }
  };

  // Handle klik thumbnail video
  const handleThumbnailClick = (videoSrc: string) => {
    setSelectedVideo(videoSrc);
  };

  // Handle klik logo kecil buat popup zoom
  const handleLogoClick = (img: string) => {
    setSelectedImage(img);
  };

  return (
    <>
      <section className="max-w-7xl md:mx-auto md:px-11 pt-12 md:pt-28" data-aos="fade-up" data-aos-duration="1000" id="portfolio">
        <h1 className="font-bold text-2xl md:text-4xl pt-20 md:pt-0 py-10 text-center">Portfolio</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:max-w-fit py-5 lg:max-w-2xl px-4 max-w-fit mx-auto md:px-5">
          {[logo1, logo2, logo3, logo4, logo5, logo6].map((img, index) => (
            <div key={index} className="cursor-pointer" onClick={() => handleClick(index)}>
              <div className="relative w-32 h-32 md:w-36 md:h-36">
                <Image src={img} alt={`logo-${index}`} layout="fill" objectFit="contain" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-fit mx-auto my-10">
          <a href="https://drive.google.com/drive/folders/1HIyYjzo1y_dufcbrMpWKDGb3PCdzR84k" className="bg-black rounded-full text-white py-1 px-10 w-fit mx-auto">
            More
          </a>
        </div>
      </section>

      {/* Popup Logo */}
      {PopUpLogo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setPopUpLogo(false)}>
          <div className="bg-white p-5 rounded-lg relative max-w-6xl w-fit md:px-16 mx-4 h-fit " onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-2 -right-2 text-xl bg-white text-black border border-gray-300 shadow-md px-3 py-1 rounded-full" onClick={() => setPopUpLogo(false)}>
              ✖
            </button>
            <h2 className="text-center text-xl pb-3 md:text-2xl font-bold mb-4">Logo Collection</h2>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                {[logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15].map((img, index) => (
                  <div key={index} className="relative w-24 h-24 md:w-40 md:h-40 cursor-pointer" onClick={() => handleLogoClick(img.src)}>
                    <Image src={img} alt={`popup-img-${index}`} layout="fill" objectFit="cover" className="rounded-md" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Popup Zoomed Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center" onClick={() => setSelectedImage(null)}>
          <div className="relative bg-white p-5 rounded-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-2 -right-2 text-2xl bg-white text-black border border-gray-300 shadow-md px-3 py-1 rounded-full" onClick={() => setSelectedImage(null)}>
              ✖
            </button>
            <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] rounded-full">
              <Image src={selectedImage} alt="Zoomed Image" layout="fill" objectFit="contain" className="rounded-full w-1/4" />
            </div>
          </div>
        </div>
      )}

      {/* Popup Video */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={() => setIsVideoPopupOpen(false)}>
          <div className="bg-white mx-3 p-5 rounded-lg relative max-w-4xl w-full flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-2 -right-2 text-xl bg-white text-black border border-gray-300 shadow-md px-3 py-1 rounded-full" onClick={() => setIsVideoPopupOpen(false)}>
              ✖
            </button>
            <h1 className="font-bold text-center text-lg md:text-2xl">Video Graphics Projects</h1>
            {/* Video utama */}
            <div className="relative">
              <video key={selectedVideo} controls className="w-full border border-pink-600 rounded-md">
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Thumbnail video */}
            <div className="flex gap-3 justify-center">
              {videoList.map((video, index) => (
                <div key={index} className="cursor-pointer" onClick={() => handleThumbnailClick(video)}>
                  <video className="w-20 h-20 object-cover rounded-md border-2 border-[#CD563C]" src={video} muted />
                </div>
              ))}
            </div>
            <div className="bg-black rounded-full text-white py-2 px-5 w-fit mx-auto">
              <a href="https://drive.google.com/drive/folders/1Cpuwi1cJ2QV-uiuOcg3KTpVUwsPMtAdG" target="_blank" rel="noopener noreferrer">
                More Projects Videos..
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
