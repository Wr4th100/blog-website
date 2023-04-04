import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className="object-contain"
                        src = {urlFor(value).url()}
                        alt = "Blog Post Image"
                        fill
                    />
                </div>
            )
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="list-disc ml-10 py-5 space-y-5 dark:text-white">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="list-decimal mt-lg dark:text-white">{children}</ol>   
        )
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-10 font-bold dark:text-white">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-10 font-bold dark:text-white">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-3xl py-10 font-bold dark:text-white">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-10 font-bold dark:text-white">{children}</h4>
        ),
        h5: ({ children }: any) => (
            <h5 className="text-xl py-10 font-bold dark:text-white">{children}</h5>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-l-[#dead4f] pl-5 py-5 my-5 dark:text-white">
                {children}
            </blockquote>
        ),  
        normal: ({ children }: any) => (
            <p className="py-5 dark:text-white">{children}</p>
        )
        
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined;
            return (
                <Link 
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#dead4f] hover:decoration-black dark:text-white"
                > 
                    {children}
                </Link>
            )
        }
    }
}