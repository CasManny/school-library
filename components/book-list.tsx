
interface BookListProps {
  title: string,
  books: any,
  containerClassName: string
}
const BookList = ({title, books, containerClassName}: BookListProps) => {
  return (
    <section className="">
      <h2 className='font-bebas-neue text-4xl text-light-100'>popular Books</h2>
    </section>
  )
}

export default BookList