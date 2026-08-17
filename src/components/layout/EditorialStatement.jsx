import { SectionLayout } from "./SectionLayout";
import { SectionBadge } from "../ui/UIPrimitives";

export default function EditorialStatement() {
  return (
    <SectionLayout className="border-0">
      <div className="flex w-full flex-col items-center text-center">

        {/* =====================================================
            BADGE
        ===================================================== */}

        <SectionBadge>
          Our approach
        </SectionBadge>


        {/* =====================================================
            MAIN STATEMENT
        ===================================================== */}

        <div
          className="
            mt-[clamp(24px,3vw,36px)]
            w-full
            max-w-[1000px]
          "
        >
          <h2
            className="
              text-balance
              text-[clamp(38px,6vw,78px)]
              font-medium
              leading-[0.96]
              tracking-[-0.055em]
              text-[#222222]
            "
          >
            We don't redraw old stories.
            <br className="hidden sm:block" />
            We give them a new way to be seen.
          </h2>
        </div>


        {/* =====================================================
            SUPPORTING COPY
        ===================================================== */}

        <p
          className="
            mt-[clamp(24px,3vw,34px)]
            max-w-[510px]
            text-[clamp(12px,1vw,14px)]
            font-normal
            leading-[1.6]
            tracking-[-0.005em]
            text-[#666666]
          "
        >
          Every edition begins with a story worth remembering —
          then becomes something you can hold, explore, and
          return to.
        </p>

      </div>
    </SectionLayout>
  );
}