import  React from "react"
import Link from "next/link";
import Heading from "@/app/Component/Heading";
import { getReview, getSlugs } from "@/lib/review";
import ShareButton from "@/app/Component/ShareButton";



export  async function generateStaticParams(){
    const slugs = await getSlugs()
    return slugs.map((slug)=>({slug}))
}

export async function generateMetadata({params:{slug}}){
    const review = await getReview(slug)
    return{
     title : review.title
    }
 }

export default async function Reviewpage({params: {slug}}) {
    const review = await getReview(slug);
    return (
        <>
            <Heading>
                {review.title}
            </Heading>
            <Link href="/review" className="hover:underline">Back to Home</Link>
            <div className="flex gap-3 items-baseline">
             <p className="italic pb-2 pt-2">
                {review.date}
            </p>
            <ShareButton/>
            </div>
            <img src={review.image} height={200} width={200} className="rounded pt-3 mb-3 " />
            <article dangerouslySetInnerHTML={{ __html: review.body }}
                className="prose prose-slate max-w-screen-sm"
            />

        </>
    )
}
    