function Bookshelf() {
  return (
    <section
      aria-label="Featured book collection"
      className="
        w-full
        overflow-hidden
        
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1120px]
          justify-center
        "
      >
        <img
          src="/herobookshelf1.png"
          alt="A collection of colorful books arranged on two wooden shelves"
          className="
            block
            h-auto
            w-full
            max-w-[1080px]
            object-contain
            select-none
          "
          draggable="false"
        />
      </div>
    </section>
  );
}

export default Bookshelf;