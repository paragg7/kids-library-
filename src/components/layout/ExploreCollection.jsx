import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { EXPLORE_COLLECTION_ITEMS } from "@/data/contentData";

import { SectionLayout } from "./SectionLayout";
import { SectionHeader } from "../ui/UIPrimitives";

function CollectionCard({ item }) {
  return (
    <article className="group min-w-0">
      {/* =====================================================
          ARTWORK
      ===================================================== */}

      <div
        className="
          relative
          aspect-[3/4]
          w-full
          overflow-hidden
          rounded-[2px]
          bg-[#FFFFFF]
        "
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            object-center
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.025]
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-5">
        {/* AUTHOR + AGE */}

        <div className="flex items-center justify-between gap-4">
          <p
            className="
              min-w-0
              truncate
              text-[9px]
              font-medium
              uppercase
              tracking-[0.08em]
              text-[#666666]
            "
          >
            {item.author}
          </p>

          <span
            className="
              shrink-0
              text-[9px]
              font-medium
              tracking-[0.04em]
              text-[#888888]
            "
          >
            {item.ageRange}
          </span>
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-3
            max-w-[360px]
            text-[clamp(22px,2vw,27px)]
            font-medium
            leading-[1.02]
            tracking-[-0.045em]
            text-[#222222]
          "
        >
          {item.title}
        </h3>

        {/* DESCRIPTION */}

        <p
          className="
            mt-3
            max-w-[350px]
            text-[12px]
            font-normal
            leading-[1.5]
            tracking-[-0.005em]
            text-[#666666]
            sm:text-[13px]
          "
        >
          {item.description}
        </p>

        {/* EXPLORE CTA */}

        <a
          href={item.href}
          aria-label={`Explore ${item.title}`}
          className="
            group/link
            mt-5
            inline-flex
            min-h-[38px]
            items-center
            gap-2.5
            rounded-[2px]
            bg-[#222222]
            px-3.5
            py-2.5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#FFFFFF]
            outline-none
            transition-all
            duration-150

            hover:bg-[#292929]
            hover:shadow-[0_4px_10px_rgba(34,34,34,0.16)]

            focus-visible:ring-1
            focus-visible:ring-[#222222]
            focus-visible:ring-offset-2
            focus-visible:ring-offset-[#F3F3F2]
          "
        >
          <span>Explore story</span>

          <ArrowUpRight
            size={12}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-200
              group-hover/link:translate-x-0.5
              group-hover/link:-translate-y-0.5
            "
          />
        </a>
      </div>

      {/* SUBTLE ACCENT */}

      <div
        className="
          mt-7
          h-[2px]
          w-0
          rounded-[2px]
          bg-[#222222]
          transition-all
          duration-300
          ease-out
          group-hover:w-8
        "
      />
    </article>
  );
}

export default function ExploreCollection({
  collections = EXPLORE_COLLECTION_ITEMS,
}) {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const firstCard = container.firstElementChild;

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");

    const amount = cardWidth + gap;

    container.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <SectionLayout>
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <SectionHeader
        badgeText="Explore the collection"
        title={
          <>
            Stories worth
            <br />
            returning to.
          </>
        }
        description="The stories that stayed with us, reimagined for a new generation."
      />

      {/* =====================================================
          CAROUSEL HEADER
      ===================================================== */}

      <div
        className="
          mt-[clamp(36px,4vw,56px)]
          flex
          items-end
          justify-between
          gap-6
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-[#666666]
          "
        >
          Featured stories
        </p>

        {/* CAROUSEL CONTROLS */}

        <div className="flex items-center gap-2">
          {/* PREVIOUS */}

          <button
            type="button"
            aria-label="Previous stories"
            onClick={() => scrollCarousel("prev")}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[2px]
              border
              border-[#C8C8C6]
              bg-[#FFFFFF]
              text-[#222222]
              outline-none
              transition-all
              duration-150

              hover:border-[#222222]
              hover:bg-[#222222]
              hover:text-[#FFFFFF]

              focus-visible:ring-1
              focus-visible:ring-[#222222]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.4}
            />
          </button>

          {/* NEXT */}

          <button
            type="button"
            aria-label="Next stories"
            onClick={() => scrollCarousel("next")}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[2px]
              border
              border-[#C8C8C6]
              bg-[#FFFFFF]
              text-[#222222]
              outline-none
              transition-all
              duration-150

              hover:border-[#222222]
              hover:bg-[#222222]
              hover:text-[#FFFFFF]

              focus-visible:ring-1
              focus-visible:ring-[#222222]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >
            <ArrowRight
              size={14}
              strokeWidth={1.4}
            />
          </button>
        </div>
      </div>

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        ref={carouselRef}
        aria-label="Featured stories"
        className="
          mt-6
          -mx-5
          flex
          snap-x
          snap-mandatory
          gap-6
          overflow-x-auto
          overscroll-x-contain
          px-5
          pb-2
          scrollbar-none

          sm:-mx-8
          sm:gap-7
          sm:px-8

          lg:-mx-12
          lg:gap-8
          lg:px-12
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {collections.map((item) => (
          <div
            key={item.id || item.number}
            className="
              w-[82%]
              shrink-0
              snap-start

              min-[520px]:w-[58%]

              sm:w-[43%]

              lg:w-[31%]

              xl:w-[30%]
            "
          >
            <CollectionCard item={item} />
          </div>
        ))}
      </div>

      {/* =====================================================
          MOBILE SWIPE HINT
      ===================================================== */}

      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          sm:hidden
        "
      >
        <span
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.1em]
            text-[#666666]
          "
        >
          Swipe to explore
        </span>

        <span
          className="
            text-[9px]
            font-medium
            tracking-[0.05em]
            text-[#888888]
          "
        >
          {collections.length} stories
        </span>
      </div>
    </SectionLayout>
  );
}