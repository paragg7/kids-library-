import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { SectionLayout } from "./SectionLayout";
import { SectionBadge } from "../ui/UIPrimitives";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect this to your newsletter provider later.
    console.log("Newsletter signup:", email);

    setEmail("");
  };

  return (
    <SectionLayout className=" border-[#C8C8C6] bg-[#F3F3F2]">
      <div
        className="
          relative
          overflow-hidden
          border-y
          border-[#C8C8C6]
          py-[clamp(48px,7vw,92px)]
        "
      >
        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[900px]
            flex-col
            items-center
            px-5
            text-center
          "
        >
          {/* =====================================================
              BADGE
          ===================================================== */}

          <SectionBadge>
            Stay inside the story
          </SectionBadge>

          {/* =====================================================
              HEADING
          ===================================================== */}

          <h2
            className="
              mt-[clamp(22px,2.5vw,32px)]
              max-w-[760px]
              text-balance
              text-[clamp(38px,5vw,68px)]
              font-medium
              leading-[0.96]
              tracking-[-0.05em]
              text-[#222222]
            "
          >
            Stories worth
            <br />
            keeping close.
          </h2>

          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          <p
            className="
              mt-5
              max-w-[500px]
              text-[clamp(12px,0.9vw,13px)]
              font-normal
              leading-[1.55]
              tracking-[-0.005em]
              text-[#666666]
            "
          >
            New illustrated editions, behind-the-scenes artwork,
            and stories from the worlds we're bringing back to life.
          </p>

          {/* =====================================================
              NEWSLETTER FORM
          ===================================================== */}

          <form
            onSubmit={handleSubmit}
            className="
              mt-8
              flex
              w-full
              max-w-[480px]
              flex-col
              gap-2
              min-[520px]:flex-row
            "
          >
            {/* EMAIL */}

            <label
              className="sr-only"
              htmlFor="newsletter-email"
            >
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              required
              className="
                h-[42px]
                min-w-0
                flex-1
                rounded-[2px]
                border
                border-[#C8C8C6]
                bg-[#FFFFFF]
                px-3.5
                text-[11px]
                font-normal
                text-[#222222]
                outline-none
                placeholder:text-[#888888]
                transition-all
                duration-150

                focus:border-[#222222]
                focus:ring-1
                focus:ring-[#222222]/10
              "
            />

            {/* SUBMIT */}

            <button
              type="submit"
              className="
                group
                inline-flex
                h-[42px]
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-[2px]
                bg-[#222222]
                px-5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.08em]
                text-[#FFFFFF]
                outline-none
                transition-all
                duration-150

                hover:bg-[#292929]
                hover:shadow-[0_5px_12px_rgba(34,34,34,0.18)]

                focus-visible:ring-1
                focus-visible:ring-[#222222]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#F3F3F2]
              "
            >
              <span>Join the list</span>

              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </button>
          </form>

          {/* =====================================================
              PRIVACY NOTE
          ===================================================== */}

          <p
            className="
              mt-4
              text-[9px]
              leading-[1.4]
              tracking-[0.01em]
              text-[#888888]
            "
          >
            No noise. Just stories, artwork, and occasional new editions.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}