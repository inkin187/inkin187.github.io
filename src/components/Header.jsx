import { siteContent } from '../data/siteContent';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 lg:px-8">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between border border-white/10 bg-[#090909]/85 px-5 py-3.5 backdrop-blur-md lg:px-6">
        <a
          className="text-[11px] font-medium tracking-[0.16em] text-white/90 transition-colors hover:text-white"
          href="#home"
        >
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center bg-[#ff3028] text-[11px] font-bold lowercase text-black">
            s
          </span>
          Shao Shuaibo
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="主导航">
          {siteContent.navigation.map((item) => (
            <a
              className="text-xs text-white/50 transition-colors hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="border border-white/20 px-3.5 py-2 text-xs text-white/90 transition-colors hover:border-[#ff3028] hover:bg-[#ff3028] hover:text-black"
          href="#contact"
        >
          联系我
        </a>
      </div>
    </header>
  );
}
