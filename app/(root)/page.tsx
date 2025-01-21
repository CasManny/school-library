import { auth } from "@/auth";
import BookList from "@/components/book-list";
import BookOverView from "@/components/book-overview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  const latestBooks = await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt));
  
  return (
    <>
      <BookOverView {...sampleBooks[1]} />
      <BookList
        title={"Latest Books"}
        books={sampleBooks}
        containerClassName="mt-20"
      />
    </>
  );
}
