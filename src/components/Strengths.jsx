import { siteContent } from '../data/siteContent';
import { SectionHeading } from './SectionHeading';

export function Strengths() {
  return (
    <section className="px-5 py-28 lg:px-8 lg:py-40" id="strengths">
      <div className="mx-auto max-w-[1700px]">
        <SectionHeading
          description="[待我替换] 可在此补充一行关于能力体系或工作方法的说明。"
          index="03"
          title="能力优势"
        />

        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          {siteContent.strengths.map((strength) => (
            <article className="group min-h-60 bg-[#090b0f] p-6 transition-colors duration-300 hover:bg-[#0d1016] lg:min-h-72 lg:p-8" key={strength.index}>
              <p className="text-[10px] tracking-[0.16em] text-white/38">{strength.index}</p>
              <div className="mt-16 max-w-md lg:mt-20">
                <h3 className="text-2xl font-medium tracking-[-0.035em] text-white">{strength.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{strength.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
