import { useParams, Link } from "react-router-dom";
import { FEATURED_STORIES, EXPLORE_COLLECTION_ITEMS } from "@/data/contentData";

const Reader = () => {
  const { id } = useParams();

  const books = [
    ...FEATURED_STORIES,
    ...EXPLORE_COLLECTION_ITEMS,
  ];

  const book = books.find((item) => item.id === id);

  if (!book) {
    return (
      <section className="min-h-[calc(100vh-76px)] bg-[#F3F3F2] px-5 py-16">
        <div className="mx-auto max-w-[900px]">
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#666666]">
            Book not found
          </p>

          <h1 className="mt-3 text-[32px] font-medium tracking-[-0.04em] text-[#222222]">
            We couldn't find this book.
          </h1>

          <Link
            to="/library"
            className="mt-6 inline-flex h-[38px] items-center rounded-[2px] bg-[#222222] px-4 text-[11px] font-medium text-white"
          >
            Back to library
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#F3F3F2]">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-8 sm:px-8 lg:px-12">
        
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#666666]">
              Now reading
            </p>

            <h1 className="mt-1 text-[20px] font-medium tracking-[-0.035em] text-[#222222]">
              {book.title}
            </h1>
          </div>

          <Link
            to={`/book/${book.id}`}
            className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#666666] transition-opacity hover:opacity-60"
          >
            Back to book
          </Link>
        </div>

        {/* BOOK */}
        <div className="overflow-hidden rounded-[2px] bg-white shadow-[0_12px_35px_rgba(34,34,34,0.10)]">
          {book.bookFile ? (
            <iframe
              src={book.bookFile}
              title={book.title}
              className="h-[calc(100vh-170px)] min-h-[650px] w-full border-0"
            />
          ) : (
            <div className="flex min-h-[500px] items-center justify-center px-6">
              <div className="text-center">
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#666666]">
                  Book file unavailable
                </p>

                <p className="mt-2 text-[12px] text-[#888888]">
                  This book does not have a reader file configured yet.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Reader;