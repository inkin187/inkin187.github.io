export function SectionHeading({ index, title, description }) {
  return (
    <div className="mb-12 flex flex-col justify-between gap-5 border-t border-white/15 pt-4 md:mb-16 md:flex-row md:items-start">
      <div className="flex items-center gap-4">
        <span className="text-[10px] tracking-[0.16em] text-white/40">{index}</span>
        <h2 className="text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">{title}</h2>
      </div>
      {description && <p className="max-w-sm text-sm leading-6 text-white/45">{description}</p>}
    </div>
  );
}
