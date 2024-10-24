import Image from "next/image";

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundAsset,
  foregroundAsset,
}) => (
  <section className="relative" aria-label="Header content">
    <div className="absolute inset-0 ">
      <Image
        src={backgroundAsset.url}
        alt={backgroundAsset.alt}
        className="object-cover w-full h-full"
        fill
        priority
      />
    </div>

    <div className="md:grid md:grid-cols-2 flex items-end p-40 gap-x-40 relative z-10">
      <div className="hidden md:block relative h-[480px] w-full">
        <div className="absolute top-[-70px] bottom-[-70px] left-0 right-0">
          <Image
            src={foregroundAsset.url}
            alt={foregroundAsset.alt}
            className="object-cover w-full h-full"
            fill
          />
        </div>
      </div>

      <div className="text-right">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight pb-4">
          {title}
        </h1>
        <p className="text-sm sm:text-base pb-2">{subtitle}</p>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
