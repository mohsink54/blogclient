import { useState } from "react"
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
            <Image src="/blogapp/logo.png" alt="MB Logo" w={64} h={64} />
            <span>Mindful Bytes </span>
        </Link>
        <div className="md:hidden">
            <div className="cursor-pointer text-4xl" onClick={()=>setOpen((prev)=> !prev)}>
                <div className="flex flex-col gap-[5.4px]">
                    <div
                    className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${ open && "rotate-45"}`}
                    ></div>
                    <div
                    className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${ open && "opacity-0"}`}
                    ></div>
                    <div
                    className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${ open && "-rotate-45"}`}
                    ></div>
                </div>
            </div>

            <div className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
                open ? "-right-0" : "-right-[100%]"
            }`}>
                <Link to="/" onClick={()=>setOpen (false)}>Home</Link>
                <Link to="/post?sort=trending" onClick={()=>setOpen (false)} >Trending</Link>
                <Link to="/post?sort=popular" onClick={()=>setOpen (false)} >Most Popular</Link>
                <Link to="/" onClick={()=>setOpen (false)} >About</Link>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                </Link>
            </div>
        </div>

        <div className="hidden md:flex justify-between items-center gap-8 xl:gap-12 font-medium">
            <Link to="/">Home</Link>
            <Link to="/post?sort=trending">Trending</Link>
            <Link to="/post?sort=popular">Most Popular</Link>
            <Link to="/">About</Link>
            <SignedOut>
                <Link to="/login">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                        Login
                    </button>
                </Link>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar