import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const { experience } = siteContent;

  return (
    <section className="px-5 py-28 lg:px-8 lg:py-40" id="experience">
      <div className="mx-auto max-w-[1700px]">
        <SectionHeading index="02" title="个人经历" />

        <div className="grid gap-10 lg:grid-cols-[minmax(290px,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
          <div className="overflow-hidden border border-white/10 bg-white/[0.025]">
            <img
              alt="[待我替换] 个人头像或人像"
              className="aspect-[4/5] h-full w-full object-cover opacity-85"
              src={experience.portraitUrl}
            />
          </div>

          <div className="flex flex-col justify-between gap-16 py-1">
            <div className="max-w-3xl">
              <p className="text-[10px] tracking-[0.16em] text-white/40">ABOUT / EXPERIENCE</p>
              <h3 className="mt-5 text-3xl font-medium tracking-[-0.045em] text-white md:text-5xl">
                {experience.introTitle}
              </h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/58 md:text-lg">{experience.intro}</p>
            </div>

            <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
              {experience.metrics.map((metric) => (
                <div className="bg-[#090b0f] p-5 lg:p-6" key={metric.label}>
                  <p className="text-xl font-medium tracking-[-0.03em] text-white">{metric.value}</p>
                  <p className="mt-2 text-xs leading-5 text-white/43">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-x-8 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              {experience.contact.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] tracking-[0.14em] text-white/38">{item.label}</p>
                  <p className="mt-2 text-sm text-white/66">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
