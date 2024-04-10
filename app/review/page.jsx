import Link from "next/link";
import Heading from "@/app/Component/Heading";
import { getReviews } from "@/lib/review";


export const metadata= {
    title:" Review"
}
export default async function reviewpage() {
    const review = await getReviews()
    return (
        <>
            <Heading className="text-center font-bold pb-3 text-2xl">
                WELLOME  TO REVIEW PAGE
            </Heading>
            <p className="text-center font-orbitron">
                <ul className=" flex flex-row gap-5">
                    {review.map((review) => (
                        <li key={review.slug}
                            className=" bg-white border w-60 hover:shadow-xl">
                            <Link href={`/review/${review.slug}`} className="hover:underline">
                                <img src={review.image} height="200px" width="200px" className="rounded-t mb-2" />
                                <h1 className=" text-center pb-2">
                                    {review.title}
                                </h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </p>
        </>
    )
}