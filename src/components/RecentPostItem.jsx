import React from "react";
import Link from "next/link";
const RecentPostItem = ({ postData }) => {
  return (
    <div className="border-[1px] md:w-[320px] md:h-[485px] w-full h-full overflow-hidden flex flex-col rounded-[10px] border-neutral-700">
      <div className="w-auto h-1/2">
        <img alt="coverPhoto" src={postData.coverPhoto.url} />
      </div>
      <div className="flex flex-col w-auto h-1/2 gap-3 p-4">
        <div>
          <div className="text-[#005929] uppercase font-medium tracking-[0.003em] px-2 py-1 inline-block bg-[#E8FFEE] text-[12px]">
            {postData.category.categoryName}
          </div>
        </div>
        <div className="text-3xl"><Link href={'/posts/' + postData.slug}>{postData.title}</Link></div>
      </div>
    </div>
  );
};

export default RecentPostItem;
