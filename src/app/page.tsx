import data from "./../data/index.json";
import HeroSection from "./components/HeroSection";
import GridSection from "./components/GridSection";

export default function Home() {
  return (
    <div className="py-60 sm:py-120">
      {data.content.map((section, index) => {
        if (section.type === "HERO") {
          return (
            <HeroSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              backgroundAsset={section.backgroundAsset}
              foregroundAsset={section.foregroundAsset}
            />
          );
        }
        if (section.type === "CARD_GRID") {
          return (
            <div className="pt-80">
              <GridSection title={section.title} cards={section.cards} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
