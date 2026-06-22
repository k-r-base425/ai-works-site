import type { SiteRoute } from "../data/routes";
import { Reveal } from "../components/animation";
import { SectionHeader, StageDots } from "../components/ui";

type PlaceholderPageProps = {
  route: SiteRoute;
};

export function PlaceholderPage({ route }: PlaceholderPageProps) {
  return (
    <Reveal>
      <section className="rounded-card border border-line bg-white/78 p-6 shadow-soft sm:p-8">
        <SectionHeader
          label={route.stage}
          title={route.title}
          description="Detailed page UI will be implemented in later phases. This placeholder keeps the route available for shared layout and browser checks."
        />
        <div className="mt-8">
          <StageDots active={Math.max(0, Number(route.stage.replace(/\D/g, "")) - 1) % 4} />
        </div>
      </section>
    </Reveal>
  );
}
