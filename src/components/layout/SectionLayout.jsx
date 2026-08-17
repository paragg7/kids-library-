export function SectionLayout({ children, className = "" }) {
  return (
    <section
      className={`
        w-full
        overflow-hidden
        bg-[#F3F3F2]
        text-[#222222]
        ${className}
      `}
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1440px]
          px-[clamp(20px,4vw,48px)]
          py-[clamp(72px,9vw,140px)]
        "
      >
        {children}
      </div>
    </section>
  );
}