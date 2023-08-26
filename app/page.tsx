import Posts from "./components/Posts";

import projects from "./projects/data";
import GradientBorder from "./components/GradientBorder";
import Link from "next/link";
import { Project } from "./projects/components/ProjectsGrid";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Projects />
    </main>
  );
}
