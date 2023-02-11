import Link from "next/link";
import React from "react";
import RecentPostItem from "./RecentPostItem";

const RecentPosts = ({ data }) => {
  return (
    <div className="mt-32 mb-48">
      <div className="flex justify-between items-center md:mb-5 mb-8">
        <div className="text-2xl md:text-[32px] text-[#73778C]">
          Recent Posts
        </div>
        <div className="text-lg font-medium mt-auto cursor-pointer">
          <Link href='/posts/all'>See All</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-0 md:flex-row flex-wrap justify-between">
        {data.map((item, idx) => (
          <RecentPostItem key={idx} postData={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
