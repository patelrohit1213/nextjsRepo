
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
            <div className="item-center justify-center flex">
                <Link href={`/review/${review.slug}`} >
                    <img src={review.image} height={100} width={300}  />
                    <h2 className="font-semibold bg-white w-[300px] font-orbitron py-1 text-center sm:px-2 hover:shadow-xl">
                        {review.title}
                    </h2>

                </Link>
            </div>
        </>
    )
}