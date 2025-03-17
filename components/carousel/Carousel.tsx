import type { Book } from "@/app/book";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

export default function BookCarousel(books: { Books: Book[] }) {

    const book: Book[] = books.Books
    
    return (
        <div>
            <h1 className="text-4xl text-white font-bold">{book[0].category[0]}</h1>
            <Carousel opts={{align: "center"}} className="flex gap-8 w-full max-w-[100rem] mx-auto">
                <CarouselContent className="flex gap-8">
                    {book.map((book) => (
                        <Link key={book.id} href={`/book/${book.id}`}>
                            <CarouselItem className="bg-black rounded-2xl pl-0 first:m-2 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <Card className="max-w-xl h-[30rem]">
                                        <CardContent className="flex flex-col items-center space-y-3 gap-2">
                                            <aside className="relative w-52 h-80 mb-2">
                                                <Image src={book.cover} alt={book.title} fill className="rounded-md object-cover self-center" sizes="(max-width: 128px) 100vw, 128px"/>
                                            </aside>
                                            <article className="flex flex-col gap-1 text-center text-gray-300">
                                                <h2 className="text-xl">{book.title}</h2>
                                                <p className="line-clamp-1 text-sm text-gray-400">{book.category.join(', ')}</p>
                                                <p className="text-base">{book.authors?.join(', ')}</p>
                                            </article>
                                        </CardContent>
                                    </Card>
                            </CarouselItem>
                        </Link>))}
                </CarouselContent>
                <CarouselPrevious className="hover:cursor-pointer disabled:hidden" />
                <CarouselNext className="hover:cursor-pointer disabled:hidden"/>
            </Carousel>
        </div>
    )
}