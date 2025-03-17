import BookCarousel from "@/components/carousel/Carousel"
import Books from "@/app/book"
import { Suspense } from "react"

export default function HomePage() {
    return (
        <main className="container px-5 py-10 mx-auto flex flex-col gap-10"> 
            <Suspense fallback={<div className="text-3xl text-center">Loading...</div>}>
                <BookCarousel Books={Books} />
            </Suspense>
            <Suspense fallback={<div className="text-3xl text-center">Loading...</div>}>
                <BookCarousel Books={Books} />
            </Suspense>
        </main>
    )
}