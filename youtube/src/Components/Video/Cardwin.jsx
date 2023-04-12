import React from "react";
// import "../videoPlayer/Card.scss";
import { Link } from "react-router-dom";
import dataVideos from "../Home/data";
const Cardwin = (props) => {
  const { id, img, videoId, title, author, published } = props;

  return (
    <>
      <div className="Cardsecond my-6">
        <div className="Cardsecond_items">
          <div className="image relative">
            <Link
              to={`/youtube/${videoId}`}
              onClick={() => console.log("Link")}
            >
              {/* <button className="absolute w-full h-full left-0 top-0 bg-black"> */}
              <img src={img} className=" rounded-2xl h-full" alt="" />
              {/* </button> */}
            </Link>
          </div>
          <div className="title mt-3">
            <h3 className=" text-2xl font-bold">{title}</h3>

            <div className="watched mt-3 flex items-center justify-between">
              <p className=" text-lg font-normal">
                <span>0k</span>
              </p>
              <p className="text-lg font-normal">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardwin;
