
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  BookOpen,
  Sparkles,
  PartyPopper,
  Scissors,
  Headphones,
  Languages,
  FileText,
  Video,
  Palette,
  GraduationCap,
  Users,
  Download,
  Gamepad2,
  Music,
  BookMarked,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| PROJECT COLOR PALETTE
|--------------------------------------------------------------------------
|
| Main Background       #F3F3F2
| Surface               #FFFFFF
| Primary Text          #222222
| Secondary Text        #666666
| Muted Text            #888888
| Border                #C8C8C6
| Subtle Border         #DEDEDC
| Dark Section          #292929
| Dark Text             #F5F5F3
| Dark Secondary Text   #B5B5B3
| Primary Button        #222222
| Button Text           #FFFFFF
|
*/


/*
|--------------------------------------------------------------------------
| LOGO
|--------------------------------------------------------------------------
*/

function Logo() {
  return (
    <Link
      to="/"
      aria-label="Perarri Home"
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        rounded-[2px]
        outline-none
        transition-opacity
        hover:opacity-85
        focus-visible:ring-1
        focus-visible:ring-[#222222]/60
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#F3F3F2]
      "
    >
      <span
        className="
          block
          whitespace-nowrap
          font-mono
          text-[28px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#222222]
        "
        style={{
          fontFamily: '"Courier New", monospace',
          imageRendering: "pixelated",
        }}
      >
        Perarri
      </span>
    </Link>
  );
}


/*
|--------------------------------------------------------------------------
| DROPDOWN ITEM
|--------------------------------------------------------------------------
*/

function DropdownItem({
  to,
  icon: Icon,
  title,
  description,
  onNavigate,
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      role="menuitem"
      className="
        group/item
        flex
        items-center
        gap-3
        rounded-[2px]
        border
        border-transparent
        px-2
        py-2.5
        outline-none
        transition-all
        duration-150

        hover:border-[#F5F5F3]/10
        hover:bg-[#F5F5F3]/[0.06]

        focus-visible:border-[#F5F5F3]/20
        focus-visible:bg-[#F5F5F3]/[0.08]
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-8
          w-8
          shrink-0
          items-center
          justify-center
          rounded-[2px]
          bg-[#F5F5F3]/[0.06]
          text-[#F5F5F3]
          transition-all
          duration-150

          group-hover/item:bg-[#F5F5F3]
          group-hover/item:text-[#222222]

          group-focus-visible/item:bg-[#F5F5F3]
          group-focus-visible/item:text-[#222222]
        "
      >
        <Icon
          size={16}
          strokeWidth={1.7}
        />
      </div>


      {/* TEXT */}

      <div className="min-w-0">

        <div
          className="
            text-[12px]
            font-medium
            leading-tight
            text-[#F5F5F3]
          "
        >
          {title}
        </div>

        <div
          className="
            mt-1
            text-[10px]
            leading-tight
            text-[#B5B5B3]
          "
        >
          {description}
        </div>

      </div>

    </Link>
  );
}


/*
|--------------------------------------------------------------------------
| NAVBAR DROPDOWN
|--------------------------------------------------------------------------
*/

function NavbarDropdown({
  id,
  label,
  open,
  onOpen,
  onClose,
  children,
}) {
  const triggerRef = useRef(null);

  return (
    <div
      className="
        group
        relative
        flex
        h-full
        items-center
      "
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >

      {/* TRIGGER */}

      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => {
          if (open) {
            onClose();
          } else {
            onOpen();
          }
        }}
        onKeyDown={(event) => {

          if (event.key === "Escape") {
            onClose();
            triggerRef.current?.focus();
          }

          if (event.key === "ArrowDown") {
            event.preventDefault();
            onOpen();
          }

        }}
        className="
          flex
          items-center
          gap-1.5
          rounded-[2px]
          text-[12px]
          font-normal
          leading-none
          tracking-[-0.01em]
          text-[#222222]
          outline-none
          transition-opacity
          duration-200

          hover:opacity-60
          focus-visible:opacity-60
        "
      >

        <span>{label}</span>

        <ChevronDown
          size={12}
          strokeWidth={1.7}
          className={`
            opacity-60
            transition-transform
            duration-200
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />

      </button>


      {/* INVISIBLE HOVER BRIDGE */}

      <div
        aria-hidden="true"
        className="
          absolute
          left-0
          top-[76px]
          h-[10px]
          w-full
        "
      />


      {/* DROPDOWN */}

      <div
        id={id}
        role="menu"
        aria-hidden={!open}
        className={`
          absolute
          left-0
          top-[76px]
          w-[320px]
          rounded-[2px]
          border
          border-[#F5F5F3]/10
          border-t-[#F5F5F3]/20
          bg-[#292929]
          p-5
          shadow-[0_18px_45px_rgba(34,34,34,0.18)]
          transition-all
          duration-150

          ${
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-1 opacity-0"
          }
        `}
      >
        {children}
      </div>

    </div>
  );
}


/*
|--------------------------------------------------------------------------
| NAVBAR
|--------------------------------------------------------------------------
*/

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const closeDropdown = () => {
    setActiveDropdown(null);
  };


  /*
  |--------------------------------------------------------------------------
  | ESCAPE KEY
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setActiveDropdown(null);
      }

    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);


  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        bg-[#F3F3F2]
        text-[#222222]
      "
    >

      <div
        className="
          relative
          mx-auto
          h-[76px]
          w-full
          px-[54px]
        "
      >

        {/* =====================================================
            LEFT NAVIGATION
        ===================================================== */}

        <nav
          aria-label="Main navigation"
          className="
            absolute
            left-[54px]
            top-0
            flex
            h-full
            items-center
            gap-[34px]
          "
        >

          {/* =================================================
              BOOKS
          ================================================= */}

          <NavbarDropdown
            id="books-menu"
            label="Books"
            open={activeDropdown === "books"}
            onOpen={() => setActiveDropdown("books")}
            onClose={closeDropdown}
          >

            <div
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#B5B5B3]
              "
            >
              Browse Collection
            </div>

            <div className="flex flex-col gap-1">

              {/* INTERACTIVE EBOOKS */}

              <DropdownItem
                to="/books/interactive"
                icon={Sparkles}
                title="Interactive eBooks"
                description="Clickable pictures & interactive content"
                onNavigate={closeDropdown}
              />


              {/* AUDIO / READ ALOUD */}

              <DropdownItem
                to="/books/audio"
                icon={Headphones}
                title="Read Aloud & Audio"
                description="Narrated stories for listening"
                onNavigate={closeDropdown}
              />


              {/* MULTILINGUAL */}

              <DropdownItem
                to="/books/languages"
                icon={Languages}
                title="Multilingual Books"
                description="Explore stories in different languages"
                onNavigate={closeDropdown}
              />


              {/* GENERAL BOOK FORMATS */}

              <DropdownItem
                to="/books/formats"
                icon={FileText}
                title="Book Formats"
                description="eBooks, PDFs & other formats"
                onNavigate={closeDropdown}
              />


              {/* BILDERBUCHKINO */}

              <DropdownItem
                to="/books/bilderbuchkino"
                icon={Download}
                title="Story PDFs & Bilderbuchkino"
                description="Screenable story PDFs for group reading"
                onNavigate={closeDropdown}
              />


              {/* KAMISHIBAI */}

              <DropdownItem
                to="/books/kamishibai"
                icon={BookMarked}
                title="Kamishibai"
                description="Printable story cards for group storytelling"
                onNavigate={closeDropdown}
              />


              {/* THEME EBOOKS */}

              <DropdownItem
                to="/books/theme"
                icon={GraduationCap}
                title="Theme eBooks"
                description="Stories, songs, crafts & learning resources"
                onNavigate={closeDropdown}
              />


              {/* SERIES */}

              <DropdownItem
                to="/books/series"
                icon={BookOpen}
                title="Series & Characters"
                description="Darcy, Willow & Ballerina Monkey"
                onNavigate={closeDropdown}
              />

            </div>

          </NavbarDropdown>


          {/* =================================================
              ACTIVITIES & KITS
          ================================================= */}

          <NavbarDropdown
            id="activities-menu"
            label="Activities & Kits"
            open={activeDropdown === "kits"}
            onOpen={() => setActiveDropdown("kits")}
            onClose={closeDropdown}
          >

            <div
              className="
                mb-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#B5B5B3]
              "
            >
              Fun & Learning
            </div>

            <div className="flex flex-col gap-1">

              {/* BIRTHDAY KITS */}

              <DropdownItem
                to="/activities-kits/birthday"
                icon={PartyPopper}
                title="Birthday Kits"
                description="Printables, games, timing & theme guides"
                onNavigate={closeDropdown}
              />


              {/* DIY */}

              <DropdownItem
                to="/activities-kits/diy"
                icon={Scissors}
                title="DIY & Crafts"
                description="Creative projects & craft activities"
                onNavigate={closeDropdown}
              />


              {/* COLORING */}

              <DropdownItem
                to="/activities-kits/coloring"
                icon={Palette}
                title="Coloring & Printables"
                description="Downloadable creative activities"
                onNavigate={closeDropdown}
              />


              {/* VIDEOS */}

              <DropdownItem
                to="/activities-kits/videos"
                icon={Video}
                title="DIY Tutorials & Videos"
                description="Step-by-step creative activities"
                onNavigate={closeDropdown}
              />


              {/* GAMES */}

              <DropdownItem
                to="/activities-kits/games"
                icon={Gamepad2}
                title="Games & Activities"
                description="Games, timing & activity ideas"
                onNavigate={closeDropdown}
              />


              {/* SONGS */}

              <DropdownItem
                to="/activities-kits/songs"
                icon={Music}
                title="Songs & Music"
                description="Songs and music for themed learning"
                onNavigate={closeDropdown}
              />


              {/* STORY ACTIVITIES */}

              <DropdownItem
                to="/activities-kits/story-activities"
                icon={BookOpen}
                title="Story Activities"
                description="Story-based activities for families & groups"
                onNavigate={closeDropdown}
              />

            </div>

          </NavbarDropdown>


          {/* =================================================
              FOR SCHOOLS
          ================================================= */}

          <Link
            to="/schools"
            className="
              rounded-[2px]
              text-[12px]
              font-normal
              leading-none
              tracking-[-0.01em]
              text-[#222222]
              outline-none
              transition-opacity
              duration-200

              hover:opacity-60
              focus-visible:opacity-60

              focus-visible:ring-1
              focus-visible:ring-[#222222]/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >
            For Schools
          </Link>

        </nav>


        {/* =====================================================
            CENTER LOGO
        ===================================================== */}

        <Logo />


        {/* =====================================================
            RIGHT NAVIGATION
        ===================================================== */}

        <nav
          aria-label="Utility navigation"
          className="
            absolute
            right-[54px]
            top-0
            flex
            h-full
            items-center
          "
        >

          {/* =================================================
              SEARCH
          ================================================= */}

          <button
            type="button"
            aria-label="Search"
            className="
              mr-[42px]
              flex
              items-center
              gap-[9px]
              rounded-[2px]
              text-[12px]
              font-normal
              leading-none
              text-[#222222]
              outline-none
              transition-opacity
              duration-200

              hover:opacity-60
              focus-visible:opacity-60

              focus-visible:ring-1
              focus-visible:ring-[#222222]/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >

            <Search
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Search
            </span>

          </button>


          {/* =================================================
              CART
          ================================================= */}

          <Link
            to="/cart"
            className="
              mr-[42px]
              flex
              items-center
              gap-[9px]
              rounded-[2px]
              text-[12px]
              font-normal
              leading-none
              text-[#222222]
              outline-none
              transition-opacity
              duration-200

              hover:opacity-60
              focus-visible:opacity-60

              focus-visible:ring-1
              focus-visible:ring-[#222222]/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >

            <ShoppingCart
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Cart
            </span>

            <span
              aria-label="0 items in cart"
              className="
                flex
                h-[17px]
                w-[17px]
                items-center
                justify-center
                rounded-[2px]
                bg-[#222222]
                text-[9px]
                font-semibold
                leading-none
                text-[#FFFFFF]
              "
            >
              0
            </span>

          </Link>


          {/* =================================================
              ACCOUNT
          ================================================= */}

          <Link
            to="/account"
            className="
              flex
              items-center
              gap-[9px]
              rounded-[2px]
              text-[12px]
              font-normal
              leading-none
              text-[#222222]
              outline-none
              transition-opacity
              duration-200

              hover:opacity-60
              focus-visible:opacity-60

              focus-visible:ring-1
              focus-visible:ring-[#222222]/60
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#F3F3F2]
            "
          >

            <UserRound
              size={17}
              strokeWidth={1.7}
            />

            <span>
              Account
            </span>

          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
