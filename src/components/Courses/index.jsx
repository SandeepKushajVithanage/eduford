import "./styles.css";

import React from "react";

const Courses = () => {
  return (
    <section className="course">
      <h1>Courses We Offer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

      <div className="row">
        <div className="course-col">
          <h3>Intermediate</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            eveniet harum, odit ipsum minus accusamus labore perferendis
            recusandae. Voluptates nesciunt, labore sint nulla laborum iure nisi
            dolor dicta recusandae provident.
          </p>
        </div>
        <div className="course-col">
          <h3>Degree</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            eveniet harum, odit ipsum minus accusamus labore perferendis
            recusandae. Voluptates nesciunt, labore sint nulla laborum iure nisi
            dolor dicta recusandae provident.
          </p>
        </div>
        <div className="course-col">
          <h3>Post Graduate</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            eveniet harum, odit ipsum minus accusamus labore perferendis
            recusandae. Voluptates nesciunt, labore sint nulla laborum iure nisi
            dolor dicta recusandae provident.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
