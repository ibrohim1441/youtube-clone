import React from "react";
import { Link } from "react-router-dom";

const BigCardd = (props) => {
  const { id, videoId, img, title, author, published } = props;
  return (
    <>
      <div className="card w-56 h-68 " key={id}>
        <div className="card_items">
          <div className="image">
            <Link to={`/youtube/${videoId}`}>
              <button className="image_youtube">
                <img src={img} className="image_youtube rounded-2xl" alt="" />
              </button>
            </Link>
          </div>
          <div className="title">
            <h3 className=" text-lg mb-3">{title}</h3>

            <div className="watched flex items-center justify-between">
              <p className=" text-sm flex gap-1">
                <span>0 k</span>· <span>{published}</span>
              </p>
              <p className=" text-xs">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigCardd;
