import { auth } from "@/auth"
import Link from "next/link"
import logo from "@/public/logo.png"
import Image from "next/image"
import { Button } from "./ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ModeToggle } from "./Toggle"

export default async function Navbar() {

    const session = await auth()
    
    return (
        <div>
            <nav className='flex justify-between items-center p-4 shadow-lg md:flex-row w-full'>
                <div>
                    {session?.user ? (
                        <div className='flex justify-equally items-center'>
                            <Image src={logo} alt="logo" width={70} height={70} />
                            <h1 className="text-lg m-3">{session.user.name}</h1>
                        </div>
                    ) : (
                        <div className='flex justify-between items-center w-[9rem]'>
                            <Image src={logo} alt="logo" width={70} height={70} />
                            <h1 className="text-lg">Gallery</h1>
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-center self-center">   
                    <Button className='p-4 m-2' variant={"ghost"}><Link href="/">Home</Link></Button>   
                    <Button className='p-4 m-2' variant={"ghost"}><Link href="/about">About</Link></Button>      
                </div>
                <div className='flex justify-equally'>
                    {session?.user ? (
                        <div className="flex">
                            <Button><Link href="/create">Upload</Link></Button>
                            <div className="pl-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="ghost">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                            </svg>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Settings</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex justify-between items-center m-20">
                                            <ModeToggle />
                                            <Button variant={"outline"} className="mr-2"><Link href="/api/auth/signout/">Sign Out</Link></Button>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    ) : (
                        <Button variant={"outline"}><Link href="/api/auth/signin">Sign In</Link></Button>
                    )}
                </div>
            </nav>
        </div>
    )
}