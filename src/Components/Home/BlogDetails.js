import React from "react";

const BlogDetails = (props) => {
  const { title, desc, date, img } = props.blog;
  return (
    <div className="col-md-4 mt-4">
      <div className="card shadow border-0" style={{ width: "18rem" }}>
        <div className="d-flex p-3">
          <img src={img} style={{ height: "40px" }} alt="client" />
          <div className="mx-3">
            <h6 style={{ color: "#1CC7C1" }} className="card-title">
              {title}
            </h6>
            <p>{date}</p>
          </div>
        </div>
        <div className="card-body">
          <h6 className="mb-3 fw-bold">{desc}</h6>
          <p className="card-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            totam, fuga molestiae eos fugiat accusamus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
