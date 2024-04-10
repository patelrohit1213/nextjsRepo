import Link from "next/link";
import "./global.css"
import NavBar from "./Component/Navbar";
import { orbitron } from "./font";
export const metadata= {
    title:"Indie Gamer",
    template: "%s | Indie Gamer"
}
export default function Rootlayout({ children }) {
    return (
        <html lang="eng"className={orbitron.variable}>
            <body className=" bg-orange-100 p-4 font-serif">
                <header className=" border-b">
                    <NavBar />
                </header>
                <main className='py-3'> 
                    {children}
                </main>
                <footer className="border-t py-3 text-center text-xs">
                    Game data and  images courtesy of  {" "}
                    <a href=
                        "https://rawg.io/" target=" _blank" className=" text-orange-900 hover:underline  font-bold">RAWG</a>
                </footer>
            </body>
        </html>
    )
}