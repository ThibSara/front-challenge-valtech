import { BackButton } from "../ui/BackButton";
import Image from "next/image";
import data from "./../../data/article.json";
import Carousel from "../ui/Carousel";

const Article = () => {
  return (
    <div className="py-40 sm:py-80">
      <BackButton />
      <div className=" mt-[30px] sm:mt-60">
        {data.content.map((section, index) => {
          if (section.type === "HERO_ARTICLE") {
            return (
              <div
                key={index}
                className="flex flex-col"
                aria-label="Article header"
              >
                <div className="flex flex-row">
                  <div className="flex-[1] relative h-[480px]">
                    <Image
                      src={section.sideAsset.url}
                      alt={section.sideAsset.alt}
                      className="object-cover w-full h-full"
                      layout="fill"
                    />
                  </div>

                  <div className="flex-[2] relative h-[480px]">
                    <Image
                      src={section.backgroundAsset.url}
                      alt={section.backgroundAsset.alt}
                      className="object-cover w-full h-full"
                      layout="fill"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-end text-right text-white px-4 sm:px-40">
                      <h2 className=" text-lg sm:text-xl font-light">
                        {section.subtitle}
                      </h2>
                      <h1 className="text-2xl sm:text-4xl pt-4">
                        {section.title}
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="mt-80 italic flex flex-row justify-between">
                  <p className="hover:text-primary underline transition-colors duration-300 ease-in-out">
                    {section.publishingDate}
                  </p>
                  <p className="hover:text-primary underline duration-300 ease-in-out">{`Author: ${section.author}`}</p>
                </div>
              </div>
            );
          }

          if (section.type === "PARAGRAPH") {
            return (
              <div
                key={index}
                className={`mt-80 ${
                  section.highlight
                    ? "text-base sm:text-xl  text-left"
                    : "text-sm sm:text-base px-20 sm:px-80"
                }`}
                aria-label="Paragraph"
                dangerouslySetInnerHTML={{ __html: section.text }}
              />
            );
          }

          if (section.type === "CAROUSEL") {
            return (
              <div key={index} className="mt-80" aria-label="Carousel">
                <Carousel items={section.items} />
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Article;
