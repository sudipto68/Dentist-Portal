import React from "react";
import card1 from "../../images/card1.png";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const blogDetails = [
    {
      title: "Dr. Cudi",
      desc: "Check at least a doctor in a year",
      date: "23 April 2019",
      img: card1,
    },
    {
      title: "Dr. Jhony",
      desc: "Two time brush in a day can keep mouth fresh",
      date: "21 March 2018",
      img: card1,
    },
    {
      title: "Dr. sins",
      desc: "The tooth cancer can take challeng",
      date: "22 May 2017",
      img: card1,
    },
  ];
  return (
    <div className="container py-3">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1", fontWeight: "bold" }}>OUR BLOG</h5>
        <h2>From Our Blog News</h2>
      </div>
      <div className="row">
        {blogDetails.map((blog) => (
          <BlogDetails blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
