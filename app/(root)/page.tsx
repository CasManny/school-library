import BookList from "@/components/book-list";
import BookOverView from "@/components/book-overview";
import { sampleBooks } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BookOverView {...sampleBooks[1]} />
      <BookList  title={'Latest Books'} books={sampleBooks} containerClassName='mt-20' />
    </>
  );
}
