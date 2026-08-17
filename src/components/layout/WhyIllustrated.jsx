import { ArrowUpRight } from "lucide-react";
import { WHY_ILLUSTRATED_PRINCIPLES } from "@/data/contentData";

import { SectionLayout } from "./SectionLayout";
import { SectionHeader } from "../ui/UIPrimitives";

export default function WhyIllustrated({
  principles = WHY_ILLUSTRATED_PRINCIPLES,
  bannerImage = "https://images.unsplash.com/photo-1579541591970-e5780dc6b31f?q=80&w=1343&auto=format&fit=crop",
}) {
  return (
    <SectionLayout>
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <SectionHeader
        badgeText="Why we make them"
        title={
          <>
            Some stories deserve <br /> to be seen again.
          </>
        }
        description="We take the books that shaped our imaginations and give them a new visual language — carefully illustrated editions made to bring familiar stories back into focus."
      />

      {/* =====================================================
          BANNER ARTWORK
      ===================================================== */}

      <div className="mt-[clamp(36px,4.5vw,64px)] w-full">
        <div
          className="
            relative
            aspect-[16/7]
            w-full
            overflow-hidden
            rounded-[2px]
            bg-[#FFFFFF]
          "
        >
          <img
            src={bannerImage}
            alt="Illustrated edition showcase"
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.015]
            "
          />
        </div>
      </div>

      {/* =====================================================
          PRINCIPLES GRID
      ===================================================== */}

      <div
        className="
          mt-[clamp(42px,5vw,76px)]
          border-y
          border-[#C8C8C6]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            min-[620px]:grid-cols-2
            min-[1040px]:grid-cols-3
          "
        >
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`
                group
                relative
                py-[clamp(28px,3vw,40px)]

                ${
                  index !== 0
                    ? "border-t border-[#C8C8C6] min-[620px]:border-l min-[620px]:border-t-0"
                    : ""
                }

                ${
                  index === 0
                    ? "min-[620px]:pr-[clamp(24px,3vw,48px)]"
                    : index === 1
                    ? "min-[620px]:px-[clamp(24px,3vw,48px)]"
                    : "min-[620px]:pl-[clamp(24px,3vw,48px)]"
                }

                ${
                  index === 2
                    ? "min-[620px]:col-span-2 min-[1040px]:col-span-1"
                    : ""
                }
              `}
            >
              {/* =================================================
                  TOP META ROW
              ================================================= */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">

                  {/* DARK INDICATOR */}

                  <span
                    className="
                      h-[6px]
                      w-[6px]
                      rounded-[2px]
                      bg-[#222222]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-medium
                      tracking-[0.08em]
                      text-[#666666]
                    "
                  >
                    {principle.number}
                  </span>
                </div>

                {/* ARROW */}

                <div
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-[2px]
                    transition-all
                    duration-150
                    group-hover:bg-[#222222]/[0.06]
                  "
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="
                      text-[#222222]
                      transition-transform
                      duration-200
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  TITLE
              ================================================= */}

              <h3
                className="
                  mt-[clamp(24px,2.5vw,32px)]
                  max-w-[330px]
                  text-[clamp(18px,1.5vw,21px)]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.035em]
                  text-[#222222]
                  transition-transform
                  duration-200
                  group-hover:translate-x-[2px]
                "
              >
                {principle.title}
              </h3>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <p
                className="
                  mt-3.5
                  max-w-[300px]
                  text-[clamp(12px,0.9vw,13px)]
                  font-normal
                  leading-[1.5]
                  tracking-[-0.005em]
                  text-[#666666]
                "
              >
                {principle.description}
              </p>

              {/* =================================================
                  HOVER ACCENT
              ================================================= */}

              <div
                className="
                  mt-6
                  h-[1px]
                  w-0
                  bg-[#222222]
                  transition-all
                  duration-300
                  ease-out
                  group-hover:w-[32px]
                "
              />
            </article>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}