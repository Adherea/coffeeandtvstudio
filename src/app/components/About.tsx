import Image from "next/image";
import KiriBawah from "../../../public/images/kiriBawah.png";
import KananAtas from "../../../public/images/kananAtas.png";
import wallpaper from "../../../public/images/mencoba.png";
import wallpaperKiri from "../../../public/images/WallpaperKiri.png";
import "animate.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="relative py-5 px-5">
          <Image src={KiriBawah} alt="Kiri Bawah" width={150} height={150} className="lg:block absolute hidden bottom-0 left-0 w-32 md:w-40 lg:w-52" />

          <Image src={KananAtas} alt="Kanan Atas" width={150} height={150} className="lg:block absolute hidden top-0 right-0 w-32 md:w-40 lg:w-52" />

          <div className="max-w-5xl mx-auto text-center">
            <div className=" flex items-center justify-center gap-4">
              <div>
                <Image src={KiriBawah} alt="Kiri Bawah" className="block lg:hidden" width={60} />
              </div>
              <h1 className="font-bold text-2xl md:text-4xl py-10 animate__animated animate__jello">About us</h1>

              <Image src={KananAtas} alt="Kanan Atas" className="block lg:hidden" width={60} />
            </div>

            <div className="md:flex items-center justify-between">
              <div>
                <Image src={KiriBawah} alt="Kiri Bawah" className="lg:hidden hidden " />
              </div>

              <div className="text-sm md:text-lg text-justify">
                <p className="">Coffee and TV was born out of pure love for digital craftsmanship and the desire to make quality digital artwork.</p>
                <p className="py-5">
                  Our understanding of how design works has become the very essence of our existence. Through sheer knowledge and experience, Coffee and TV has built a solid reputation and earned the trust of our satisfied, impressed
                  clients through our excellent products and customer services. With the ability to create superior products using top-notch materials at reasonable prices, we have fast become one of the most renowned names in the business.
                </p>
                <p className="py-5 ">Coffee and TV delivers a service that suits each individual client. We understand your target audience, your brand ethos, and the surrounding media.</p>
                <p className="">As an agency, we work with you to fully understand the objectives and requirements of your project to deliver a design that will help grow your business.</p>
                <p className="py-5 ">At Coffee and TV, we love what we do and we believe that clever, ingenious designs are meant for everyone.</p>
              </div>

              <div>
                <Image src={KananAtas} alt="Kanan Atas" className="lg:hidden hidden " />
              </div>
            </div>
          </div>
        </div>

        {/* awdawdwdddddddddddddlorem    */}

        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-bold text-3xl md:text-4xl py-10">As Agency</h1>
          <div className="lg:relative">
            <div className="flex flex-col-reverse md:flex-row items-center gap-5">
              <p className="py-5 md:text-lg text-justify max-w-sm text-sm">
                Digital Marketing Management I Creative Marketing Management I Creative Advertising I Branding & Corporate Identity Marketing & Sales Collaterals Print & Online Adv I Website Development Multimedia Platform Applications
                platform I 3D Design I Photography
              </p>

              <div className="top-0 right-0 bottom-0">
                <Image src={wallpaper} alt="Gambar Utama" width={800} height={800} className="lg:hidden md:block relative w-full max-w-3xl" />
              </div>
            </div>
            {/* Gambar Utama dan Efek Samping */}
            <div className=" flex justify-center  ">
              <div>
                <Image src={wallpaperKiri} alt="Efek Samping" width={150} height={150} className=" lg:block hidden absolute left-0 w-40 md:w-56 lg:w-44" />
              </div>
              <div className="absolute lg:block hidden  top-0 right-0 bottom-0">
                <Image src={wallpaper} alt="Gambar Utama" width={800} height={800} className="relative w-full max-w-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
