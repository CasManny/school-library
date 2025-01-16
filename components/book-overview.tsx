import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./book-cover";

interface BookProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
  total_copies: number;
  available_copies: number;
  description: string;
  color: string;
  cover: string;
  video: string;
  summary: string;
}

const BookOverView = ({
  id,
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  cover,
  video,
  summary,
}: BookProps) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
        </div>
        <div className="flex flex-row gap-1">
          <Image src={"/icons/star.svg"} alt="book" width={22} height={22} />
          <p className="text-light-100">{rating}</p>
        </div>
        <div className="book-copies">
          <p>
            Total Books: <span>{total_copies}</span>
          </p>
          <p>
            Available Books: <span>{available_copies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        <Button className="book-overview_btn">
          <Image src={"/icons/book.svg"} alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
        </Button>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverUrl={cover}
            coverColor=""
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              className=""
              variant="wide"
              coverColor={""}
              coverUrl={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverView;
