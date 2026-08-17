import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/*
|--------------------------------------------------------------------------
| PROJECT COLOR PALETTE
|--------------------------------------------------------------------------
|
| Main Background      #F3F3F2
| White Surface        #FFFFFF
| Primary Text         #222222
| Secondary Text       #666666
| Muted Text           #888888
| Border               #C8C8C6
| Subtle Border        #DEDEDC
| Dark Section         #292929
| Dark Text            #F5F5F3
| Dark Secondary      #B5B5B3
| Primary Button       #222222
| Button Text          #FFFFFF
|
|--------------------------------------------------------------------------
*/


/* ==========================================================================
   SECTION BADGE
   ========================================================================== */

export function SectionBadge({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-[2px]
        bg-[#222222]
        px-[10px]
        py-[5px]
        text-[9px]
        font-medium
        leading-none
        tracking-[0.01em]
        text-[#FFFFFF]
      "
    >
      {children}
    </span>
  );
}


/* ==========================================================================
   ARROW LINK
   ========================================================================== */

export function ArrowLink({
  to,
  children,
  size = 11,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`
        group/link
        inline-flex
        items-center
        gap-2
        rounded-[2px]
        text-[9px]
        font-medium
        leading-none
        tracking-[0.08em]
        text-[#222222]
        outline-none
        transition-opacity
        duration-150

        hover:opacity-60

        focus-visible:ring-1
        focus-visible:ring-[#222222]
        focus-visible:ring-offset-4
        focus-visible:ring-offset-[#F3F3F2]

        ${className}
      `}
    >
      <span>{children}</span>

      <ArrowUpRight
        size={size}
        strokeWidth={1.5}
        className="
          transition-transform
          duration-150
          group-hover/link:translate-x-0.5
          group-hover/link:-translate-y-0.5
        "
      />
    </Link>
  );
}


/* ==========================================================================
   SECTION HEADER
   ========================================================================== */

export function SectionHeader({
  badgeText,
  title,
  description,
  actionLink,
}) {
  return (
    <div className="w-full">

      {/* ================================================================
          BADGE
          ================================================================ */}

      <SectionBadge>
        {badgeText}
      </SectionBadge>


      {/* ================================================================
          HEADER CONTENT
          ================================================================ */}

      <div
        className="
          mt-[clamp(20px,2vw,28px)]
          grid
          grid-cols-1
          gap-[clamp(28px,5vw,64px)]
          border-b
          border-[#C8C8C6]
          pb-[clamp(28px,3vw,40px)]

          min-[760px]:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.55fr)]
          min-[760px]:items-end
        "
      >

        {/* ============================================================
            TITLE
            ============================================================ */}

        <div>
          <h2
            className="
              max-w-[760px]
              text-balance
              text-[clamp(38px,4.2vw,60px)]
              font-medium
              leading-[0.98]
              tracking-[-0.045em]
              text-[#222222]
            "
          >
            {title}
          </h2>
        </div>


        {/* ============================================================
            DESCRIPTION + ACTION
            ============================================================ */}

        <div
          className="
            flex
            flex-col
            items-start

            min-[760px]:items-end
            min-[760px]:pb-1
          "
        >

          {/* DESCRIPTION */}

          <p
            className="
              max-w-[390px]
              text-[clamp(12px,0.9vw,13px)]
              font-normal
              leading-[1.5]
              tracking-[-0.005em]
              text-[#666666]

              min-[760px]:text-right
            "
          >
            {description}
          </p>


          {/* ACTION */}

          {actionLink && (
            <div className="mt-5">
              <ArrowLink
                to={actionLink.href}
                size={12}
              >
                {actionLink.label}
              </ArrowLink>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}