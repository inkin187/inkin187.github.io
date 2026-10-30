import { siteContent } from '../data/siteContent';

export function ContactFooter() {
  const { contact } = siteContent;

  return (
    <footer className="flex min-h-screen px-5 py-10 lg:px-8" id="contact">
      <div className="relative mx-auto flex w-full max-w-[1700px] flex-col justify-between overflow-hidden border border-white/10 bg-[#0d1016] p-6 md:p-10 lg:p-14">
        <div className="contact-grid absolute inset-0 opacity-50" aria-hidden="true" />

        <div className="relative flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <p className="text-[10px] tracking-[0.17em] text-white/45">{contact.preface}</p>
          <span className="text-[10px] tracking-[0.14em] text-white/35">[待我替换] 2026</span>
        </div>

        <div className="relative max-w-6xl py-16 md:py-24">
          <h2 className="text-5xl font-medium leading-[1.03] tracking-[-0.055em] text-white sm:text-7xl lg:text-[clamp(4.75rem,8.1vw,9.5rem)]">
            {contact.title}
          </h2>
          <a
            className="mt-10 inline-flex border-b border-white/45 pb-2 text-base text-white transition-colors hover:border-white hover:text-white lg:mt-14 lg:text-xl"
            href="#contact-email"
            id="contact-email"
          >
            {contact.email}
          </a>
        </div>

        <div className="relative flex flex-col gap-6 border-t border-white/10 pt-5 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-xs leading-5 text-white/40">
            [待我替换] 在这里补充一句合作方式、可联系时间或版权说明。
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            {contact.socialLinks.map((link) => (
              <a
                className="text-xs text-white/55 transition-colors hover:text-white"
                href={link.href}
                key={link.label}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
