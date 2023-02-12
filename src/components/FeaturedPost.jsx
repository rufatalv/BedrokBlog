import React from "react";
import featuredIMG from "public/featured.jpg";
import Image from "next/image";
import CategoryElement from "./CategoryElement";
import Link from "next/link";
import moment from "moment/moment";

const FeaturedPost = ({ data }) => {
  const { title, author, coverPhoto, category, slug, datePublished, minRead } =
    data;
  return (
    <div className="mt-8 sm:mt-16">
      <div className="text-[40px] md:text-[32px] text-[#73778C] md:mb-5 mb-8">
        Featured Post
      </div>
      {/* <div className="border-[1px] md:flex rounded-[10px] flex-col relative overflow-hidden border-neutral-700">
        <div className="flex flex-col w-4/12 p-8 h-fit">
          <div>
            <h4 className="text-[#005929] uppercase font-medium tracking-[0.003em] px-2 py-1 inline-block bg-[#E8FFEE] text-[12px]">
              <Link href={"/category/" + category.slug}>
                {category.categoryName}
              </Link>
            </h4>
          </div>
          <h1 className="text-[40px] mt-4 leading-[48px]">
            <Link href={`/posts/` + slug}>{title}</Link>
          </h1>
          <h6 className="text-neutral-400 mt-4 text-base">
            {moment(datePublished).format("MMMM D,YYYY")} · {minRead} min read
          </h6>
        </div>
        <img src={coverPhoto.url} alt="" class="w-8/12 md:absolute md:top-0 md:right-0 md:bottom-0" />
      </div> */}
      <div className="border-[1px] md:flex relative overflow-hidden rounded-[10px] border-neutral-700">
        <div className="p-8 flex flex-wrap md:w-6/12 lg:w-4/12 flex-col md:flex-row">
          <div className="flex flex-col h-fit">
            <div>
              <h4 className="text-[#005929] uppercase font-medium tracking-[0.003em] px-2 py-1 inline-block bg-[#E8FFEE] text-[12px]">
                <Link href={"/category/" + category.slug}>
                  {category.categoryName}
                </Link>
              </h4>
            </div>
            <h1 className="text-[40px] mt-4 leading-[48px]">
              <Link href={`/posts/` + slug}>{title}</Link>
            </h1>
            <h6 className="text-neutral-400 mt-4 text-base">
              {moment(datePublished).format("MMMM D,YYYY")} · {minRead} min read
            </h6>
          </div>
        </div>
        <img
          src={coverPhoto.url}
          className="md:w-6/12 lg:w-8/12 lg:absolute lg:top-0 lg:right-0 lg:bottom-0"
          alt=""
        />
      </div>
    </div>
  );
};

export default FeaturedPost;

// post, title, slug, date, coverPhoto, authorPhoto
