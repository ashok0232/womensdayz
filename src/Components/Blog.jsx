import React from 'react';
import blog1 from '../Assets/img/blog1.png';
import blog2 from '../Assets/img/blog2.png';
import blog3 from '../Assets/img/blog3.png';

const blogsData = [
  {
    imgSrc: blog1,
    title: "Let's start bring sale on this summer vacation.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  },
  {
    imgSrc: blog2,
    title: "Let's start bring sale on this summer vacation.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  },
  {
    imgSrc: blog3,
    title: "Let's start bring sale on this summer vacation.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
  },
];

export default function Blog() {
  return (
    <>
      <div className="p-5">
        <h2 className="text-center">Our Blogs</h2>
        <div className="row">
          {blogsData.map((blog, index) => (
            <div key={index} className="col-md-4 rounded-0">
              <div className="card p-4 border-0">
                <img src={blog.imgSrc} className="card-img-top rounded-0" alt={`blog${index + 1}`} />
                <div className="card-body p-0 pt-4">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
