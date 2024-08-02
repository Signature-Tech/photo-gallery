'use client';

import { signIn } from "next-auth/react"
import { Button} from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { toast } from "sonner";


export default function form() {
  
    const signInFb = async () => {
      await signIn('facebook', {
        redirect: false,
      })
    }
    const signInDc = async () => {
      await signIn('discord', {
        redirect: false,
      })
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const response = await signIn('credentials', {
          email : formData.get("email"),
          password : formData.get("password"),
          redirect : false,
      })

      if (!response?.error) {
        window.location.href = "/"
      }
      else {
        toast.error("Invalid username or password")
      }
    }
    
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-[350px]">
          <CardHeader className="flex items-center p-8">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Welcome to Photo Gallery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-evenly items-center mb-5">
              <Button onClick={signInFb} className="p-[23px]" variant={"outline"}><FaFacebook className="mr-2 text-lg" />Facebook</Button>
              <Button onClick={signInDc} className="p-[23px]" variant={"outline"}><FaDiscord className="mr-2 text-lg" />Discord</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="p-2">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input name="email" placeholder="example@example.com" />
                    </div>
                </div>
                <div className="p-2">
                    <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password</Label>
                    <Input name="password" placeholder="********" />
                    </div>
                </div>
                <div className="flex p-5 justify-center">
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            <CardFooter className="flex items-center justify-center">
                <Link className="text-[12px] hover:underline" href="/api/auth/signup">Don&apos;t Have An Account ? Sign Up</Link>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    )
}