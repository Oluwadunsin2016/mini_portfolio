import { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Project = (typeof projects)[number];

function Projects() {
  const [activeFilter, setActiveFilter] = useState(projectFilters[0]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="scroll-mt-24" id="projects">
      <SectionHeading
        title="Projects"
        copy="A curated look at full-stack, frontend, backend API, and landing page work."
      />

      <div className="mb-16 flex flex-wrap justify-center gap-4 md:gap-6" role="tablist" aria-label="Project categories">
        {projectFilters.map((filter) => (
          <button
            aria-selected={activeFilter === filter}
            className={`min-h-[54px] rounded-lg px-6 py-3 font-bold transition md:px-10 ${
              activeFilter === filter
                ? "bg-gradient-to-r from-brand to-[#e46400] text-white"
                : "bg-white/[0.08] text-[#c6c6c6] hover:text-brand"
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            role="tab"
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <button
            className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] text-left text-inherit transition hover:-translate-y-1.5 hover:border-brand/60 hover:shadow-2xl hover:shadow-black/30"
            key={project.name}
            onClick={() => setSelectedProject(project)}
            type="button"
          >
            <span className="relative block aspect-[1.22] overflow-hidden bg-[#0d0d0d] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-base/80">
              <img className="h-full w-full object-cover transition duration-300 group-hover:scale-105" src={project.image} alt={`${project.name} preview`} />
            </span>
            <span className="grid gap-3 p-5">
              <span className="w-fit rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-black text-brand">{project.category}</span>
              <strong className="text-2xl text-white">{project.name}</strong>
              <span className="line-clamp-3 text-base leading-relaxed text-muted">{project.description}</span>
              <span className="flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tool) => (
                  <em className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold not-italic text-[#c6c6c6]" key={tool}>
                    {tool}
                  </em>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={project.name}>
      <div className="relative grid max-h-[92vh] w-full max-w-6xl gap-7 overflow-auto rounded-[28px] border border-white/10 bg-[#151515] p-4 shadow-2xl shadow-black/50 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:p-6">
        <button className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-base/80 text-white" onClick={onClose} type="button" aria-label="Close project details">
          <X size={20} />
        </button>

        <a className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#0d0d0d] lg:min-h-[420px]" href={project.image} target="_blank" rel="noreferrer">
          <img className="h-full w-full object-cover" src={project.image} alt={`${project.name} full preview`} />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-base/85 px-4 py-2 text-sm font-black text-white">
            <Maximize2 size={16} />
            Open image fullscreen
          </span>
        </a>

        <div className="grid content-center gap-5 px-1 py-4">
          <span className="w-fit rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 text-xs font-black text-brand">{project.category}</span>
          <h3 className="m-0 text-4xl font-bold leading-none text-white md:text-5xl">{project.name}</h3>
          <p className="m-0 text-lg leading-relaxed text-muted">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tool) => (
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold text-[#c6c6c6]" key={tool}>
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-[#e46400] px-8 py-3 font-bold text-white transition hover:-translate-y-0.5" href={project.web} target="_blank" rel="noreferrer">
              <ExternalLink size={18} />
              Visit Website
            </a>
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-muted px-8 py-3 font-bold text-muted transition hover:-translate-y-0.5" href={project.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
