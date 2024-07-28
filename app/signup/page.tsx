import { NextResponse } from "next/server";
import Form from "./Form"
import { auth } from "@/auth";

export default async function CardWithForm() {

    const session = await auth()

    if (session?.user) {
        return NextResponse.redirect("/");
    }

    return (
        <Form />
    )
}
