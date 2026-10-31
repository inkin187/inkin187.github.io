import { siteContent } from '../data/siteContent';

export function PersonalIntro() {
  const { introduction } = siteContent;

  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-16 lg:min-h-screen lg:px-8 lg:py-24" id="intro">
      <div className="absolute inset-0 intro-grid opacity-45" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1700px] gap-12 lg:min-h-[720px] lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-20">
        <div className="max-w-3xl py-4 lg:py-10">
          <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.16em] text-[#ff574f]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff3028]" />
            {introduction.eyebrow}
          </div>

          <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.065em] text-white sm:text-7xl lg:text-[clamp(4.5rem,7vw,8rem)]">
            {introduction.title}
            <span className="mt-1 block text-transparent [-webkit-text-stroke:1px_#ff4a43]">{introduction.accentTitle}</span>
          </h2>

          <p className="mt-8 max-w-xl text-sm leading-7 text-white/58 md:text-base">{introduction.statement}</p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a className="group inline-flex items-center gap-3 bg-[#ff3028] px-5 py-3 text-xs font-medium text-black transition-colors hover:bg-[#f5f0e8]" href="#projects">
              查看精选项目
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </a>
            <a className="text-xs text-white/62 transition-colors hover:text-[#ff574f]" href="#contact">
              联系我 <span className="ml-1 text-[#ff574f]">•</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[450px] pt-10 lg:pt-14">
          <div className="absolute left-1/2 top-0 h-16 w-3 -translate-x-1/2 bg-[#b51f1b] shadow-[0_0_24px_rgba(255,48,40,0.3)]" aria-hidden="true" />
          <div className="absolute left-1/2 top-12 h-8 w-14 -translate-x-1/2 rounded-t-lg border border-white/20 bg-[#171717]" aria-hidden="true" />

          <article className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#111] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="overflow-hidden rounded-[1.3rem] bg-black">
              <img
                alt="邵帅博个人肖像"
                className="aspect-[0.9/1] w-full object-cover object-top"
                src={introduction.portraitUrl}
              />
            </div>

            <div className="relative -mt-20 min-h-32 rounded-b-[1.3rem] bg-gradient-to-b from-black/0 via-black/90 to-[#080808] px-6 pb-7 pt-12">
              <p className="text-3xl font-bold tracking-[-0.045em] text-white">{introduction.name}</p>
              <p className="mt-1 text-xs font-medium tracking-[0.17em] text-[#ff4a43]">{introduction.role}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
