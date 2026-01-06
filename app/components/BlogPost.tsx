import Image from "next/image";
import React from "react";
import AuthourCard from "@/app/components/AuthourCard";

const BlogPost = () => {
  return (
    <article className="w-[32%] lg:mb-3">
      {/* Image Container - NEEDS HEIGHT for fill={true} */}
      <div className="relative overflow-hidden rounded-xl w-full h-[220px] group">
        <Image
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          src="/hero-photo.jpg"
          alt="Blog Image"
          fill={true}
          sizes="350px"
        />
      </div>

      {/* Category */}
      <h6 className="mt-2 text-sm font-semibold text-blue-600">UI/UX</h6>

      {/* Title */}
      <h4 className="mt-2 text-xl font-bold text-gray-900 line-clamp-2">
        Blog Post Title
      </h4>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente
        fugiat, ducimus sit porro sunt fugit laborum facilis distinctio error et
        molestiae deleniti nulla odit enim mollitia quod asperiores ipsam ipsa!
        Quidem expedita dolore eius.
      </p>

      <AuthourCard height={28} width={28} />
    </article>
  );
};

export default BlogPost;
