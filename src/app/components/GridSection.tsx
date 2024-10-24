import Image from "next/image";
import Button from "../ui/Button";

const GridSection = ({ title, cards }) => {
  return (
    <section aria-label="Grid section">
      <h2 className="text-xl sm:text-2xl pb-40 text-center lg:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative card hover:shadow-lg transition-shadow duration-300 ease-in-out ${
              index % 5 === 0 ? "lg:col-span-2" : "lg:col-span-1"
            }`}
          >
            <Image
              src={card.backgroundAsset.url}
              alt={card.backgroundAsset.alt}
              className="object-cover w-full h-full"
              width={284}
              height={300}
            />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center py-40 px-20">
              <div>
                <p className="text-base">{card.subtitle.toUpperCase()}</p>
                <h3 className="font-semibold text-lg xl:text-xl pt-0 sm:pt-2 ">
                  {card.title.toUpperCase()}
                </h3>
              </div>
              <p className=" text-xs sm:text-sm  tracking-tight pt-2 md:pt-2 xl:pt-40 max-w-xs">
                {card.description}
              </p>
              <div className="mt-auto">
                {card.cta && (
                  <Button
                    href={card.cta.url}
                    ariaLabel={card.cta.ariaLabel}
                    target={card.cta.target}
                    text={card.cta.text}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;
