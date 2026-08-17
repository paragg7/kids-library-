import { Link } from "react-router-dom";
import { FEATURED_STORIES } from "@/data/contentData";

import { SectionLayout } from "./SectionLayout";
import { SectionHeader, ArrowLink } from "../ui/UIPrimitives";

/*
|--------------------------------------------------------------------------
| FEATURED STORIES
|--------------------------------------------------------------------------
|
| UI IS LOCKED
|
| This component intentionally preserves the existing visual design:
| - Same section layout
| - Same 3-column desktop grid
| - Same artwork proportions
| - Same typography
| - Same spacing
| - Same hover behavior
| - Same CTA treatment
|
| Only structural/content safeguards are added.
|
*/

export default function FeaturedStories({
  stories = FEATURED_STORIES,
}) {
  /*
  |--------------------------------------------------------------------------
  | SAFE DATA
  |--------------------------------------------------------------------------
  |
  | Prevent the section from breaking if contentData is temporarily
  | incomplete or undefined.
  |
  */

  const safeStories = Array.isArray(stories)
    ? stories.filter(
        (story) =>
          story &&
          story.id &&
          story.title &&
          story.href &&
          story.image
      )
    : [];

  return (
    <SectionLayout>
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <SectionHeader
        badgeText="Featured stories"
        title={
          <>
            Stories worth <br />
            returning to.
          </>
        }
        description="The books that stayed with us, reimagined for a new generation."
        actionLink={{
          href: "/books",
          label: "View all books",
        }}
      />

      {/* =====================================================
          STORY GRID
      ===================================================== */}

      {safeStories.length > 0 && (
        <div
          className="
            mt-[clamp(42px,5vw,64px)]
            grid
            grid-cols-1
            gap-x-5
            gap-y-12
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {safeStories.map((story, index) => (
            <article
              key={story.id}
              className="group min-w-0"
            >
              {/* =================================================
                  BOOK ARTWORK
              ================================================= */}

              <Link
                to={story.href}
                aria-label={`Explore ${story.title}`}
                className="
                  relative
                  block
                  overflow-hidden
                  rounded-[2px]
                  bg-[#FFFFFF]
                  outline-none

                  focus-visible:ring-1
                  focus-visible:ring-[#222222]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F3F3F2]
                "
              >
                <div
                  className="
                    aspect-[4/4.6]
                    w-full
                    overflow-hidden
                    bg-[#FFFFFF]
                  "
                >
                  <img
                    src={story.image}
                    alt={
                      story.imageAlt ||
                      `${story.title} book artwork`
                    }
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.02]
                    "
                  />
                </div>

                {/* =================================================
                    STORY NUMBER
                ================================================= */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-3
                    top-3
                    flex
                    h-6
                    min-w-6
                    items-center
                    justify-center
                    rounded-[2px]
                    bg-[#FFFFFF]/95
                    px-1.5
                    text-[9px]
                    font-medium
                    tracking-[0.05em]
                    text-[#222222]
                    shadow-[0_2px_8px_rgba(34,34,34,0.08)]
                    backdrop-blur-[2px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* =================================================
                    SUBTLE HOVER LINE
                ================================================= */}

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#222222]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:w-full
                  "
                />
              </Link>

              {/* =================================================
                  STORY INFORMATION
              ================================================= */}

              <div className="pt-4 sm:pt-5">
                {/* CATEGORY */}

                {story.category && (
                  <p
                    className="
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.13em]
                      text-[#666666]
                    "
                  >
                    {story.category}
                  </p>
                )}

                {/* TITLE */}

                <Link
                  to={story.href}
                  className="
                    mt-1.5
                    block
                    w-fit
                    text-[19px]
                    font-medium
                    leading-[1.05]
                    tracking-[-0.035em]
                    text-[#222222]
                    transition-opacity
                    duration-150
                    hover:opacity-65
                    focus-visible:outline-none
                    focus-visible:opacity-65
                  "
                >
                  {story.title}
                </Link>

                {/* AUTHOR */}

                {story.author && (
                  <p
                    className="
                      mt-1.5
                      text-[10px]
                      leading-[1.35]
                      text-[#888888]
                    "
                  >
                    {story.author}
                  </p>
                )}

                {/* DESCRIPTION */}

                {story.description && (
                  <p
                    className="
                      mt-3.5
                      max-w-[330px]
                      text-[clamp(11px,0.85vw,12px)]
                      leading-[1.5]
                      tracking-[-0.005em]
                      text-[#666666]
                    "
                  >
                    {story.description}
                  </p>
                )}

                {/* CTA */}

                <div className="mt-4">
                  <ArrowLink to={story.href}>
                    Explore story
                  </ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </SectionLayout>
  );
}