
import { Link } from "react-router-dom";
import Bookshelf from "../layout/Bookshelf";

function Hero() {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[#F3F3F2]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          items-center
          px-5
          pt-[58px]
          sm:px-8
          sm:pt-[68px]
          lg:px-12
          lg:pt-[76px]
        "
      >
        {/* HERO COPY */}

        <div
          className="
            flex
            w-full
            max-w-[760px]
            flex-col
            items-center
            text-center
          "
        >
          {/* HEADING */}

          <h1
            className="
              max-w-[720px]
              text-balance
              text-[36px]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#222222]
              sm:text-[44px]
              md:text-[50px]
              lg:text-[56px]
            "
          >
            Illustrated Editions of the
            <br className="hidden sm:block" />
            Books You Never Forgot
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-[560px]
              text-[12px]
              font-normal
              leading-[1.45]
              tracking-[-0.01em]
              text-[#666666]
              sm:text-[13px]
            "
          >
            Some worlds only exist once you stop reading and start looking.
            <br className="hidden sm:block" />
            These are drawn from the books that never quite let us go.
          </p>

          {/* CTA */}

          <Link
            to="/books"
            aria-label="Explore the books"
            className="
              group
              mt-7
              inline-flex
              h-[38px]
              min-w-[136px]
              items-center
              justify-center
              rounded-[2px]
              bg-[#222222]
              px-4
              text-[11px]
              font-medium
              leading-none
              tracking-[-0.01em]
              text-[#FFFFFF]

              outline-none
              transition-all
              duration-150

              hover:bg-[#292929]
              hover:shadow-[0_5px_12px_rgba(34,34,34,0.16)]

              focus-visible:ring-1
              focus-visible:ring-[#222222]
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >
            Step inside the story
          </Link>
        </div>

        {/* BOOKSHELF */}

        <div
          className="
            mt-[32px]
            w-full
            sm:mt-[38px]
            md:mt-[42px]
            lg:mt-[46px]
          "
        >
          <Bookshelf />
        </div>
      </div>
    </section>
  );
}

export default Hero;
