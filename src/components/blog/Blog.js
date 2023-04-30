import React from "react";
import Title from "../home/Title";
import BlogCard from "./BlogCard";
import {
  blogImgOne,
  blogImgTwo,
  blogImgThree,
  blogImgFour,
  blogImgFive,
  blogImgSix,
} from "../../assets";

const Blog = () => {
  return (
    <div>
      <Title title="Latest" subtitle="Posts" />
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="px-6">
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subtitle="UI Conference at Lviv 2022"
            category="Travel"
          />

          <BlogCard
            image={blogImgTwo}
            title="SJuly 14, 2020"
            subtitle="Become Designer"
            category="Documentation"
          />

          <BlogCard
            image={blogImgThree}
            title="july 16, 2020"
            subtitle="Designers Thoughts"
            category="Travel"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image={blogImgFour}
            title="September 16, 2020"
            subtitle="UI Conference at Lviv 2022"
            category="Travel"
          />

          <BlogCard
            image={blogImgFive}
            title="SJuly 14, 2020"
            subtitle="Become Designer"
            category="Documentation"
          />

          <BlogCard
            image={blogImgSix}
            title="july 16, 2020"
            subtitle="Designers Thoughts"
            category="Travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
