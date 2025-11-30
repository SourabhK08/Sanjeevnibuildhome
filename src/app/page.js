import HeroImmersive from "../components/HeroImmersive";

import GlassStats from "../components/GlassStats";
import ProjectCard from "../components/ProjectCard";
import properties from "../data/properties.json";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  const heroImages = [
    "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-2.png",
    "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-3.png",
    "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-4.png",
    "/projects/anant/sanjeevni-buildhome-anant-infinity-at-diggi-road-5.png",
  ];
  const pills = [
    "Ajmer Road",
    "Sirsi Road",
    "Tonk Road",
    "Diggi Road",
    "Jagatpura",
  ];

  const stats = [
    { label: "Projects Delivered", value: 30, duration: 1600 },
    {
      label: "Happy Customer",
      value: 15000,
      compact: true,
      plus: true,
      duration: 1800,
    },
    { label: "Projects Under Process", value: 10, duration: 2000 },
  ];

  const featured = properties.slice(0, 6); // grid

  return (
    <>
      <HeroImmersive
        images={heroImages}
        title="JDA - RERA Approved Plots"
        subtitle="Plots, Villas, and Farmhouse at Jaipur's fastest growing locations"
        pills={pills}
      />

      <GlassStats stats={stats} />

      <ProjectsSection items={featured} pageSize={3} />
    </>
  );
}
