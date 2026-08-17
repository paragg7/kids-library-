export function BookSpinesLogo() {
  return (
    <div className="relative flex items-baseline justify-center select-none font-sans font-black tracking-tighter text-[#181817]">
      {/* --- LETTER "B" --- */}
      <span className="text-[110px] leading-none sm:text-[160px] lg:text-[220px]">
        B
      </span>

      {/* --- BLUE & PINK DIAERESIS (DOTS OVER THE O) --- */}
      <div className="relative mx-1 flex items-center gap-1 sm:mx-2 lg:mx-3">
        
        {/* Floating Umlaut Dots */}
        <div className="absolute -top-[24px] left-2 flex gap-2 sm:-top-[38px] sm:left-4 lg:-top-[50px]">
          <span className="h-3 w-3 rounded-full bg-[#75CDE8] sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
          <span className="h-3 w-3 rounded-full bg-[#F2A4C2] sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        </div>

        {/* --- BOOK SPINE 1 (PINK) --- */}
        <div
          className="
            relative
            h-[130px] w-[26px]
            -rotate-[4deg]
            bg-[#B85286]
            px-1 py-2
            text-white
            shadow-sm
            transition-transform duration-300 hover:scale-105 hover:z-20
            sm:h-[190px] sm:w-[38px]
            lg:h-[260px] lg:w-[50px]
          "
        >
          <div className="flex h-full flex-col justify-between text-[6px] font-normal sm:text-[9px] lg:text-[11px]">
            <span className="opacity-70">Book</span>
            <span className="rotate-90 origin-left translate-x-3 whitespace-nowrap font-medium tracking-tight sm:translate-x-4 lg:translate-x-5">
              I Don't Want To Die Poor
            </span>
            <span className="opacity-70">Essays</span>
          </div>
        </div>

        {/* --- BOOK SPINE 2 (ORANGE) --- */}
        <div
          className="
            relative
            h-[135px] w-[22px]
            rotate-[2deg]
            bg-[#FFA726]
            px-1 py-2
            text-[#181817]
            shadow-sm
            transition-transform duration-300 hover:scale-105 hover:z-20
            sm:h-[195px] sm:w-[32px]
            lg:h-[270px] lg:w-[44px]
          "
        >
          <div className="flex h-full flex-col justify-between text-[6px] font-semibold sm:text-[8px] lg:text-[10px]">
            <span>❖</span>
            <span className="rotate-90 origin-left translate-x-2.5 whitespace-nowrap tracking-normal sm:translate-x-3.5 lg:translate-x-4">
              Lifting as we climb
            </span>
            <span>❖</span>
          </div>
        </div>

        {/* --- BOOK SPINE 3 (RED-ORANGE) --- */}
        <div
          className="
            relative
            h-[120px] w-[28px]
            -rotate-[3deg]
            bg-[#E63917]
            p-1.5
            text-white
            shadow-sm
            transition-transform duration-300 hover:scale-105 hover:z-20
            sm:h-[175px] sm:w-[42px]
            lg:h-[240px] lg:w-[56px]
          "
        >
          <div className="flex h-full flex-col items-center justify-between text-center">
            <div className="rounded border border-white/40 px-1 py-0.5 text-[5px] sm:text-[7px] lg:text-[9px]">
              Book 2020
            </div>
            <span className="rotate-90 whitespace-nowrap text-[8px] font-bold tracking-tight sm:text-[12px] lg:text-[16px]">
              Life Events
            </span>
            <span className="text-[5px] opacity-60 sm:text-[7px]">2020</span>
          </div>
        </div>

        {/* --- BOOK SPINE 4 (BLUE) --- */}
        <div
          className="
            relative
            h-[100px] w-[18px]
            rotate-[1deg]
            bg-[#1E62D0]
            py-2
            text-center
            text-white
            shadow-sm
            transition-transform duration-300 hover:scale-105 hover:z-20
            sm:h-[145px] sm:w-[26px]
            lg:h-[200px] lg:w-[36px]
          "
        >
          <div className="flex h-full flex-col items-center justify-between text-[5px] sm:text-[7px] lg:text-[9px]">
            <span className="opacity-80">Book</span>
            <span className="font-black tracking-widest text-white">LOOK</span>
            <span className="opacity-80">2024</span>
          </div>
        </div>

        {/* --- BOOK SPINE 5 (LIGHT PINK) --- */}
        <div
          className="
            relative
            h-[128px] w-[24px]
            -rotate-[5deg]
            bg-[#F3A5C4]
            px-1 py-2
            text-[#181817]
            shadow-sm
            transition-transform duration-300 hover:scale-105 hover:z-20
            sm:h-[185px] sm:w-[35px]
            lg:h-[255px] lg:w-[48px]
          "
        >
          <div className="flex h-full flex-col justify-between text-[6px] sm:text-[8px] lg:text-[10px]">
            <span className="opacity-60">Book</span>
            <span className="rotate-90 origin-left translate-x-2.5 whitespace-nowrap font-serif italic sm:translate-x-3.5 lg:translate-x-4">
              In The Dream House
            </span>
            <span className="opacity-60">✦</span>
          </div>
        </div>

      </div>

      {/* --- LETTER "K" --- */}
      <span className="text-[110px] leading-none sm:text-[160px] lg:text-[220px]">
        K
      </span>
    </div>
  );
}