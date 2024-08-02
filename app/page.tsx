import Navbar from "@/components/Navbar";
import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function Home() {

    const getImage = await sql`
        SELECT * FROM images
    `

    return (
        <div>
            <Navbar />
            <div className="flex flex-wrap p-6">
                {getImage.rows.map((image) => (
                    <div key={image.id}>
                        <Image src={image.url} alt="Image" width={250} height={250} className="rounded-lg m-5" />
                    </div>
                ))}
            </div>
        </div>
    )
}
