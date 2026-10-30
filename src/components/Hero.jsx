import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../data/siteContent';

export function Hero() {
  const videoRef = useRef(null);
  const [useFallback, setUseFallback] = useState(false);
  const { hero } = siteContent;

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
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-32 lg:px-8 lg:pb-16" id="home">
      {!useFallback && hero.videoUrl && (
        <video
          autoPlay
          className="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          onError={() => setUseFallback(true)}
          playsInline
          ref={videoRef}
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>
      )}

      <div className="hero-fallback absolute inset-0" aria-hidden="true" />
      <div className="absolute inset-0 bg-[#080a0e]/65" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1700px] flex-col justify-between gap-20">
        <div className="max-w-6xl">
          <p className="mb-7 text-[10px] font-medium tracking-[0.19em] text-white/55 lg:text-xs">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-medium leading-[1.03] tracking-[-0.055em] text-white sm:text-7xl lg:text-[clamp(5rem,8.8vw,10rem)]">
            {hero.title}
          </h1>
        </div>

        <div className="flex flex-col justify-between gap-8 border-t border-white/15 pt-5 md:flex-row md:items-end">
          <p className="max-w-md text-sm leading-7 text-white/60 lg:text-base">{hero.description}</p>
          <a
            className="group inline-flex w-fit items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
            href="#projects"
          >
            浏览精选项目
            <span className="transition-transform duration-300 group-hover:translate-x-1">↘</span>
          </a>
        </div>
      </div>
    </section>
  );
}
