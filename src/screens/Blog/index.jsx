import BlogContent from "../../components/BlogContent";
import BlogHeader from "../../components/BlogHeader";
import Footer from "../../components/Footer";
import "./styles.css";

import React from "react";

const Blog = () => {
  return (
    <>
      <BlogHeader />
      <BlogContent />
      <Footer />
    </>
  );
};

export default Blog;
