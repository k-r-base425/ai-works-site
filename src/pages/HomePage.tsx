import { Reveal } from "../components/animation";
import { RpgHomeHero } from "../components/home/RpgHomeHero";

export function HomePage() {
  return (
    <div className="min-h-[100svh] bg-[color:var(--rpg-bg)]">
      <Reveal>
        <RpgHomeHero />
      </Reveal>
    </div>
  );
}
