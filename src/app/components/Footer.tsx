import Image from "next/image";
import data from "./../../data/index.json";

const Footer = () => {
  const footerContent = data.footer;

  return (
    <footer
      className="relative w-full h-[200px] sm:h-[400px] text-white flex items-center justify-center"
      aria-label="Footer"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={footerContent.background}
          alt="Footer background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      <p className="relative z-10 text-base">{footerContent.text}</p>
    </footer>
  );
};

export default Footer;
