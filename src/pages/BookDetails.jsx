import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

import { EXPLORE_COLLECTION_ITEMS } from "@/data/contentData";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = EXPLORE_COLLECTION_ITEMS.find(
    (item) => item.id === id
  );

  /*
  |--------------------------------------------------------------------------
  | BOOK NOT FOUND
  |--------------------------------------------------------------------------
  */

  if (!book) {
    return (
      <main className="min-h-[calc(100vh-76px)] bg-[#F3F3F2]">
        <div className="mx-auto flex min-h-[calc(100vh-76px)] max-w-[1200px] items-center justify-center px-6">
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#888888]">
              404
            </p>

            <h1 className="mt-3 text-[42px] font-medium tracking-[-0.045em] text-[#222222]">
              Book not found
            </h1>

            <p className="mx-auto mt-4 max-w-[420px] text-[13px] leading-[1.5] text-[#666666]">
              We couldn't find the book you're looking for.
            </p>

            <Link
              to="/library"
              className="
                mt-7
                inline-flex
                min-h-[40px]
                items-center
                gap-2
                rounded-[2px]
                bg-[#222222]
                px-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-white
                transition-all
                duration-150
                hover:bg-[#292929]
              "
            >
              <ArrowLeft size={13} strokeWidth={1.5} />
              Back to library
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /*
  |--------------------------------------------------------------------------
  | NEXT / PREVIOUS BOOK
  |--------------------------------------------------------------------------
  */

  const currentIndex = EXPLORE_COLLECTION_ITEMS.findIndex(
    (item) => item.id === book.id
  );

  const previousBook =
    currentIndex > 0
      ? EXPLORE_COLLECTION_ITEMS[currentIndex - 1]
      : null;

  const nextBook =
    currentIndex < EXPLORE_COLLECTION_ITEMS.length - 1
      ? EXPLORE_COLLECTION_ITEMS[currentIndex + 1]
      : null;

  /*
  |--------------------------------------------------------------------------
  | PAGE
  |--------------------------------------------------------------------------
  */

  return (
    <main className="min-h-[calc(100vh-76px)] bg-[#F3F3F2]">
      {/* =====================================================
          TOP NAVIGATION
      ===================================================== */}

      <div className="mx-auto w-full max-w-[1440px] px-5 pt-7 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-[2px]
            text-[9px]
            font-medium
            uppercase
            tracking-[0.1em]
            text-[#666666]
            outline-none
            transition-opacity
            duration-150
            hover:opacity-60
            focus-visible:opacity-60
          "
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Back
        </button>
      </div>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pb-28 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
          {/* =================================================
              BOOK COVER
          ================================================= */}

          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[430px]">
              <div
                className="
                  relative
                  aspect-[2/3]
                  w-full
                  overflow-hidden
                  rounded-[2px]
                  bg-white
                  shadow-[0_20px_50px_rgba(34,34,34,0.12)]
                "
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* BOOK NUMBER */}

              <span
                className="
                  absolute
                  left-4
                  top-4
                  flex
                  h-7
                  min-w-7
                  items-center
                  justify-center
                  rounded-[2px]
                  bg-white/95
                  px-2
                  text-[9px]
                  font-medium
                  tracking-[0.05em]
                  text-[#222222]
                  shadow-[0_2px_8px_rgba(34,34,34,0.08)]
                "
              >
                {book.number}
              </span>
            </div>
          </div>

          {/* =================================================
              BOOK INFORMATION
          ================================================= */}

          <div className="max-w-[650px]">
            {/* CATEGORY */}

            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-[#666666]
              "
            >
              {book.category}
            </p>

            {/* TITLE */}

            <h1
              className="
                mt-4
                max-w-[620px]
                text-[44px]
                font-medium
                leading-[0.96]
                tracking-[-0.055em]
                text-[#222222]
                sm:text-[54px]
                lg:text-[64px]
              "
            >
              {book.title}
            </h1>

            {/* SUBTITLE */}

            {book.subtitle && (
              <p
                className="
                  mt-3
                  text-[15px]
                  font-normal
                  leading-[1.4]
                  text-[#666666]
                "
              >
                {book.subtitle}
              </p>
            )}

            {/* AUTHOR */}

            <p
              className="
                mt-5
                text-[11px]
                leading-[1.4]
                text-[#888888]
              "
            >
              {book.author}
              {book.editor && ` · Edited by ${book.editor}`}
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[520px]
                text-[14px]
                leading-[1.65]
                tracking-[-0.005em]
                text-[#666666]
              "
            >
              {book.description}
            </p>

            {/* =================================================
                BOOK META
            ================================================= */}

            <div className="mt-8 grid max-w-[520px] grid-cols-2 border-y border-[#DEDEDC] sm:grid-cols-4">
              {book.year && (
                <div className="border-r border-[#DEDEDC] py-4 pr-4">
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Year
                  </p>

                  <p className="mt-1.5 text-[11px] text-[#222222]">
                    {book.year}
                  </p>
                </div>
              )}

              {book.pages && (
                <div className="border-r border-[#DEDEDC] py-4 px-4">
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Pages
                  </p>

                  <p className="mt-1.5 text-[11px] text-[#222222]">
                    {book.pages}
                  </p>
                </div>
              )}

              {book.ageRange && (
                <div className="border-r border-[#DEDEDC] py-4 px-4">
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Audience
                  </p>

                  <p className="mt-1.5 text-[11px] text-[#222222]">
                    {book.ageRange}
                  </p>
                </div>
              )}

              {book.isbn && (
                <div className="py-4 pl-4">
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    ISBN
                  </p>

                  <p className="mt-1.5 text-[11px] text-[#222222]">
                    {book.isbn}
                  </p>
                </div>
              )}
            </div>

            {/* =================================================
                OPEN BOOK
            ================================================= */}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to={`/read/${book.id}`}
                className="
                  inline-flex
                  min-h-[42px]
                  items-center
                  gap-2.5
                  rounded-[2px]
                  bg-[#222222]
                  px-5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.09em]
                  text-white
                  outline-none
                  transition-all
                  duration-150
                  hover:bg-[#292929]
                  hover:shadow-[0_6px_16px_rgba(34,34,34,0.16)]
                  focus-visible:ring-1
                  focus-visible:ring-[#222222]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F3F3F2]
                "
              >
                <BookOpen size={14} strokeWidth={1.5} />
                Open book
                <ArrowUpRight size={13} strokeWidth={1.5} />
              </Link>

              <button
                type="button"
                className="
                  inline-flex
                  min-h-[42px]
                  items-center
                  gap-2
                  rounded-[2px]
                  border
                  border-[#C8C8C6]
                  bg-white
                  px-5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.09em]
                  text-[#222222]
                  outline-none
                  transition-all
                  duration-150
                  hover:border-[#222222]
                  focus-visible:ring-1
                  focus-visible:ring-[#222222]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F3F3F2]
                "
              >
                Add to library
              </button>
            </div>

            {/* FILE STATUS */}

            {book.bookFile && (
              <p className="mt-4 text-[9px] text-[#888888]">
                Digital edition available
              </p>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOOK EXPERIENCE
      ===================================================== */}

      <section className="border-t border-[#DEDEDC] bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-[#888888]">
                The edition
              </p>

              <h2 className="mt-3 max-w-[360px] text-[32px] font-medium leading-[1] tracking-[-0.045em] text-[#222222]">
                A book made to be explored.
              </h2>
            </div>

            <div className="max-w-[620px]">
              <p className="text-[13px] leading-[1.65] text-[#666666]">
                This edition is presented as a digital reading experience,
                keeping the book itself at the centre while leaving room for
                additional resources and future interactive features.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-px border border-[#DEDEDC] bg-[#DEDEDC] sm:grid-cols-2">
                <div className="bg-[#F3F3F2] p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Format
                  </p>

                  <p className="mt-2 text-[12px] text-[#222222]">
                    Digital edition
                  </p>
                </div>

                <div className="bg-[#F3F3F2] p-5">
                  <p className="text-[9px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Reading
                  </p>

                  <p className="mt-2 text-[12px] text-[#222222]">
                    Online reader
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PREVIOUS / NEXT
      ===================================================== */}

      <section className="border-t border-[#DEDEDC] bg-[#F3F3F2]">
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            {previousBook ? (
              <Link
                to={`/book/${previousBook.id}`}
                className="group flex items-center gap-3"
              >
                <ArrowLeft
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />

                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Previous
                  </p>

                  <p className="mt-1 text-[11px] text-[#222222]">
                    {previousBook.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextBook ? (
              <Link
                to={`/book/${nextBook.id}`}
                className="group flex items-center gap-3 text-right"
              >
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.1em] text-[#888888]">
                    Next
                  </p>

                  <p className="mt-1 text-[11px] text-[#222222]">
                    {nextBook.title}
                  </p>
                </div>

                <ArrowRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}