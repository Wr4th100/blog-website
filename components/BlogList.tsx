import React from "react";
import { Post } from "../typings";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#DEAD4F] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24 font-ikaros ">
      {posts.map((post) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
        <div  className="flex flex-col group">
          <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div className="">
                <p className="font-bold tracking-wider">{post.title}</p>
                <p className="text-sm">
                  {new Date(post._createdAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                {post.categories.map((category) => (
                  <div
                    key={category._id}
                    className="text-sm bg-[#DEAD4F] text-center text-black px-3 py-1 rounded-full font-semibold " 
                  >
                    <p>{category.title}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          <div className="mt-5 flex-1">
            <p className="underline text-lg  dark:text-white"> {post.title}</p>
            <p className="text-gray-500 line-clamp-2 dark:text-white">{post.description}</p>
          </div>
          <p className="mt-5 font-bold flex items-center group-hover:underline dark:text-white">
            Read Post
            <ArrowRightIcon  className="ml-2 h-4 w-4" />
          </p>
        </div>
        </ClientSideRoute>
      ))}
      </div>
    </div>
  );
};

export default BlogList;
