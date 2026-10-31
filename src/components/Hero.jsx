import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../data/siteContent';

export function Hero() {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const { hero, contact } = siteContent;

  // 某些浏览器会阻止自动播放；此时直接切换到静态渐变兜底背景。
  useEffect(() => {
    if (!hero.videoUrl || !videoRef.current) {
      setUseFallback(true);
      return undefined;
    }

    const playVideo = async () => {
      try {
        await videoRef.current.play();
      } catch {
        setUseFallback(true);
      }
    };

    playVideo();
    return undefined;
  }, [hero.videoUrl]);

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pt-24 lg:px-8 lg:pt-28" id="home">
      {!useFallback && hero.videoUrl && (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover opacity-[0.55] grayscale brightness-[0.6]"
          loop
          muted
          onError={() => setUseFallback(true)}
          playsInline
          ref={videoRef}
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
      )}

      {useFallback && <div className="hero-fallback absolute inset-0" aria-hidden="true" />}
      <div className="absolute inset-0 bg-[#070707]/40" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[1700px] flex-col justify-between pb-12 lg:min-h-[calc(100vh-5rem)] lg:pb-16">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] tracking-[0.14em] text-white/45">
            <span>PORTFOLIO</span>
            <span>[2026]</span>
          </div>
          <p className="mt-4 text-[10px] font-medium tracking-[0.19em] text-[#ff574f] lg:text-xs">
            {hero.eyebrow}
          </p>
          <h1 className="mt-1 w-max max-w-none origin-left scale-x-[0.88] whitespace-nowrap text-[15vw] font-black leading-[0.78] tracking-[-0.09em] text-[#ff3028] lg:text-[clamp(9rem,14.35vw,15.25rem)]">
            {hero.title}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-white/15 pt-5">
          <a
            className="group inline-flex items-center gap-3 bg-[#f5f0e8] px-4 py-3 text-xs font-medium text-black transition-colors hover:bg-[#ff3028]"
            href="#intro"
          >
            开始查看
            <span className="transition-transform duration-300 group-hover:translate-x-1">↘</span>
          </a>
          <a
            className="border border-white/15 px-4 py-3 text-xs text-white/70 transition-colors hover:border-white/40 hover:text-white"
            href={contact.emailHref}
          >
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
