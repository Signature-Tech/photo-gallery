import Image from "next/image";
import logo from "@/public/logo.png"

export default function About() {
  return (
    <div className="flex justify-evenly items-center max-h-screen p-24">
        <Image src={logo} alt="logo" width={300} height={300} />
        <div>
            <h1 className="text-[3.5rem] pb-[1rem]">About</h1>
            <span className="">
              <br />I'm Tariq Hassan, 
              <br />The creator of this space where we share your passion & ideas around the world. 
              <br />Here, you'll find creators around the world with their individual innovations. 
              <br />Join us on this journey and explore together!
            </span> 
        </div>
    </div>
  )
}