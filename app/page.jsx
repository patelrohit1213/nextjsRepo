
import Link from "next/link"
import Heading from "./Component/Heading"
import { getFeaturedReview } from "@/lib/review"



export default async function Homnepage() {
    const review= await getFeaturedReview()
    return (

        <>
            <Heading>
                WELLCOME TO HOME PAGE
            </Heading>
            <p className="pl-3 text-center font-extralight text-lg">
                only the best indie game
            </p>
            <div className=" bg-white border rounded shadow hover:shadow-xl sm:w-full">
                <Link href={`/review/${review.slug}`}
                className="flex flex-col sm:flex-row"
                >
                    <img src={review.image} height="100px" width="200px" className="rounded sm:rounded-l sm:rounded-r-none" />
                    <h2 className="font-semibold  font-orbitron py-1 text-center sm:px-2">
                        {review.title}
                    </h2>

                </Link>
            </div>
        </>
    )
}