import { Button } from "@/components/ui/button";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import cupImage from "@/assets/cup-with-headphone.png";

const HeroSection = () => {
  return (
    <div
      className={`${styles.banner} container mx-auto border-2 border-white rounded-3xl mt-10 p-6 sm:p-10`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-normal text-gray-900 dark:text-white">
            Don&apos;t Miss Out on <br className="hidden sm:block" /> These
            Unbeatable Black <br className="hidden sm:block" /> Friday Deals!
          </h1>
          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Save big this Black Friday with unbeatable deals on tech, home
            essentials, fashion, and more! Limited stock.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="rounded-full px-6 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all">
              Buy Now
            </Button>
            <Button
              className="rounded-full px-6 py-3 text-lg font-medium shadow-md hover:shadow-lg transition-all"
              variant="outline"
            >
              All Products
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center justify-center">
          <Image
            src={cupImage}
            alt="cup image"
            className="w-auto max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
