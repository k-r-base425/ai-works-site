import { Reveal } from "../components/animation";
import { RpgHomeHero } from "../components/home/RpgHomeHero";

export function HomePage() {
  return (
    <div className="-mx-4 pb-6 sm:-mx-6 sm:pb-8">
      <Reveal>
        <RpgHomeHero />
      </Reveal>
    </div>
  );
}
