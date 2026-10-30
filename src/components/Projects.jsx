import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section className="px-5 py-28 lg:px-8 lg:py-40" id="projects">
      <div className="mx-auto max-w-[1700px]">
        <SectionHeading
          description="[待我替换] 可在此补充一行项目筛选原则或作品说明。"
          index="01"
          title="精选项目"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {siteContent.projects.map((project) => (
            <article className="project-card group" key={project.id}>
              <div className="relative aspect-[1.45/1] overflow-hidden bg-white/5">
                <img
                  alt={`${project.title} 封面`}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.018] group-hover:brightness-110"
                  src={project.imageUrl}
                />
                <span className="absolute left-4 top-4 text-[10px] tracking-[0.16em] text-white/65">
                  {project.number}
                </span>
              </div>
              <div className="flex flex-col gap-4 border border-t-0 border-white/10 p-5 lg:p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="border border-white/10 px-2.5 py-1 text-[10px] text-white/45" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.03em] text-white">{project.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/48">{project.description}</p>
                  </div>
                  <span className="mb-1 shrink-0 text-white/35 transition-colors group-hover:text-white/75">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
