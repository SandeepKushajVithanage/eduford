import { images } from "../../assets";
import "./styles.css";

import React from "react";

const BlogContent = () => {
  return (
    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src={images.certificate} alt="" />
          <h2>Our Certificate & Online Programs For 2021</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vero iure amet eum totam officiis. Nemo, laborum deserunt! Eaque
            modi delectus officia praesentium incidunt molestias debitis iste
            suscipit, adipisci fugit.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis nobis itaque magnam enim. Pariatur incidunt adipisci
            distinctio laudantium soluta consequuntur eum. Accusamus id minima
            voluptatum nesciunt distinctio obcaecati odit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolores ea omnis maxime facilis
            sequi tenetur soluta natus modi ipsa nulla sit laborum consequuntur,
            dolore quis officia nobis placeat quia. Quisquam?
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            officiis recusandae fugit voluptates vel fuga natus quasi? Eum
            expedita suscipit rerum praesentium fugit impedit esse. Delectus
            accusantium impedit iusto dignissimos.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            doloremque unde impedit laudantium quaerat ea dolore, explicabo
            numquam aut magnam commodi officia molestiae veritatis consequuntur,
            dolores dicta cumque totam earum.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>

            <form className="comment-form">
              <input type="text" placeholder="Enter Name" />
              <input type="email" placeholder="Enter Email" />
              <textarea placeholder="Your Comment" rows="5"></textarea>
              <button type="submit" className="hero-btn red-btn">
                POST COMMENT
              </button>
            </form>
          </div>
        </div>
        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Business Analytics</span>
            <span>21</span>
          </div>
          <div>
            <span>Data Science</span>
            <span>28</span>
          </div>
          <div>
            <span>Machine Learning</span>
            <span>15</span>
          </div>
          <div>
            <span>Computer Science</span>
            <span>34</span>
          </div>
          <div>
            <span>AutoCAD</span>
            <span>42</span>
          </div>
          <div>
            <span>Journalism</span>
            <span>22</span>
          </div>
          <div>
            <span>Commerce</span>
            <span>30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
