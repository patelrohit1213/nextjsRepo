import Heading from "../Component/Heading";

export const metadata= {
    title:"About"
}
export default function Homnepage() {
    return (
        <>
            <Heading className=" text-center font-bold pb-2 text-2xl bg-green-100">
          About
            </Heading>
            <p className=" text-center bg-green-100">
                Know more about in Daveloper
            </p>
        </>
    )
}