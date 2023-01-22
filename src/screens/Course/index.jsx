import CourseHeader from "../../components/CourseHeader";
import Courses from "../../components/Courses";
import Facilities from "../../components/Facilities";
import Footer from "../../components/Footer";
import "./styles.css";

import React from "react";

const Course = () => {
  return (
    <>
      <CourseHeader />
      <Courses />
      <Facilities />
      <Footer />
    </>
  );
};

export default Course;
