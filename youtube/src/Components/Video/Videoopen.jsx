import React from "react";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";
import { useParams, Link } from "react-router-dom";
import "../Video/Video.css";
import useFatch from "../Home/useData";
import Videoclose from "./Videoclose";
import Cardwin from "./Cardwin";
import Home from "../Home/Home";
import "../Video/Video.scss";
import apelsin from "../../img/apelsin.png";
const Player = () => {
  const { data, loading, error } = useFatch(
    "https://youtube-v31.p.rapidapi.com/playlistItems"
  );

  const { id } = useParams();

  // console.log(data);
  return (
    <>
      <div className="videoopen ml-2 flex justify-between">
        <div className=" mt-8">
          <div className=" rounded-xl ml-20 w-60">
            <iframe
              width="970"
              height="470"
              className="rounded-xl iframe_dark"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className="title mt-5">
            {/* <h1 className=" text-3xl font-bold">{data.snippet}</h1> */}
          </div>

          <div className="videoclose flex items-center justify-between  mt-1">
            <p>123k views</p>

            <div className="btns flex gap-3 items-center">
              <button className="like_comment flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ...">
                <div className="icons">
                  <SlLike className=" text-sm text-gray-600" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <button className="like_comment flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ...">
                <div className="icons">
                  <SlDislike className=" text-sm text-gray-600" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <button className="like_comment flex items-center gap-2 px-5 py-3 bg-zinc-200 rounded-full hover:bg-zinc-400 ...">
                <div className="icons">
                  <IoMdShareAlt className=" text-xl text-gray-600" />
                </div>
                <div className="coutn text-base font-normal">
                  <span>123</span>
                  <span>k</span>
                </div>
              </button>
              <div className="icon_more hover:bg-zinc-400 ..., rounded-full p-1 ">
                <FiMoreHorizontal className="text-3xl cursor-pointer icons_nuqta" />
              </div>
            </div>
          </div>

          <hr className=" mt-4" />
          <div className="comments mt-10 mb-10 flex gap-3">
            <div className="user_avatar  rounded-full">
              <img src={apelsin} alt="user avatar" />
            </div>
            <div className="user_info">
              <div className="title">
                <h3>Food & Drink</h3>
                <div className="date">
                  <p>Published on 14 Jun 2019</p>
                  <h3 className="Subscribe">Subscribe</h3>
                </div>
              </div>
              <div className="comment mt-4">
                <p>
                  A successful marketing plan relies heavily on the
                  pulling-power of advertising copy. Writing result-oriented ad
                  copy is difficult, as it must appeal to, entice, and convince
                  consumers to take action. There is no magic formula to write
                  perfect ad copy; it is based on a number of factors, including
                  ad placement, demographic, even the consumer’s mood when they
                  see your ad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Videoclose />
      </div>
    </>
  );
};

export default Player;
