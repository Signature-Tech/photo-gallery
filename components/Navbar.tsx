import { auth } from "@/auth"
import Link from "next/link"
import logo from "@/public/logo.png"
import Image from "next/image"
import { Button } from "./ui/button"
import { ModeToggle } from "./Toggle"

export default async function Navbar() {
    const session = await auth()
    
    return (
        <div>
            <nav className='flex justify-between items-center p-4 shadow-lg'>
                <div>
                    {session?.user ? (
                        <div className='flex justify-between items-center w-[8rem]'>
                            <Image src={logo} alt="logo" width={70} height={70} />
                            <h1 className="text-lg">{session.user.name}</h1>
                        </div>
                    ) : (
                        <div className='flex justify-between items-center w-[9rem]'>
                            <Image src={logo} alt="logo" width={70} height={70} />
                            <h1 className="text-lg">Gallery</h1>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-center self-center">   
                    <Button className='p-4 m-2' ><Link href="/">Home</Link></Button>
                    <Button className='p-4 m-2'><Link href="/photos">Photos</Link></Button>      
                    <Button className='p-4 m-2'><Link href="/about">About</Link></Button>      
                </div>
                <div className='flex justify-equally'>
                    {session?.user ? (
                        <Button variant={"outline"}><Link href="/api/auth/signout/">Sign Out</Link></Button>
                    ) : (
                        <Button variant={"outline"}><Link href="/signin">Sign In</Link></Button>
                    )}

                <ModeToggle />
                </div>
            </nav>
        </div>
    )
}