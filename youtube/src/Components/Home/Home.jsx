// import React from 'react'
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineFolder } from "react-icons/ai";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMusicNote } from "react-icons/hi";
import { GrGamepad } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import meme from "..//../img/Oval.png";
import meme1 from "..//../img/Oval1.png";
import meme2 from "..//../img/Oval2.png";
import meme3 from "..//../img/Oval3.png";
import meme4 from "..//../img/Oval4.png";
import meme5 from "..//../img/Oval5.png";
import apelsin from "..//../img/apelsin.png";
import "../Home/Home.css";
import useFatch from "./useData";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Data from "./data"
import Card from "./card/Card";
import BigCard from "./card/BigCardd";
import React from "react";
// import dataVideos from "./data";
import BigCardd from "./card/BigCardd";
import dataVideos from "./data";
// import data from "./data";

import "../Home/card/Home.scss";
import useFatch3 from "./useData3";
import useFatch2 from "./useData2";

const Home = () => {
  const { data } = useFatch("https://youtube-v31.p.rapidapi.com/playlistItems");
  const { datatwo } = useFatch2("https://youtube-v31.p.rapidapi.com/search");
  const { datathree } = useFatch3("https://youtube-v31.p.rapidapi.com/search");


  const [maxWidth, setMaxWidth] = useState(400);

  useEffect(() => {
    setMaxWidth(window.innerWidth);
  }, [window.innerWidth]);


  // useEffect(() => {
  // }, []);
  // console.log(dataVideos);
  return (
    <>
      <main className="main">
        <div className="">
          <div className="container flex ">
            <div className="realmadrid">
              <div className="home flex items-center gap-2 mb-2 text-zinc-400	">
                <div className="home_menu ">
                  <AiOutlineHome className="text-xl" />
                </div>
                <div className="home_list ">
                  <p className="text-xl">Home</p>
                </div>
              </div>
              <div className="home flex items-center gap-2 mb-2 text-zinc-400	">
                <div className="home_menu">
                  <AiOutlineFire className="text-xl" />
                </div>
                <div className="home_list">
                  <p className="text-xl">Trending</p>
                </div>
              </div>
              <div className="home flex items-center gap-2 text-zinc-400	">
                <div className="home_menu">
                  <MdOutlineSubscriptions className="text-xl" />
                </div>
                <div className="home_list">
                  <p className="text-xl">Subscriptions</p>
                </div>
              </div>

              <div className="mt-11">
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <AiOutlineFolder className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Library</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <MdOutlineHistoryEdu className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">History</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <GiAlarmClock className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Watch later</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <CiStar className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Favourites</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <AiOutlineHeart className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Liked videos</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <HiOutlineMusicNote className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Music</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <GrGamepad className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Games</p>
                  </div>
                </div>
                <div className="home flex items-center mb-2 gap-2 text-zinc-400	">
                  <div className="home_menu">
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  </div>
                  <div className="home_list">
                    <p className="text-xl">Show more</p>
                  </div>
                </div>
              </div>
              <div className="subscription mt-4">
                <div className="title  mb-8">
                  <h2 className=" ml-4 text-xl font-semibold">Subscriptions</h2>
                  <ul className=" mt-12">
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Gussie Singleton</p>
                      </NavLink>
                    </li>
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme1}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Gussie Singleton</p>
                      </NavLink>
                    </li>
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme2}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Belle Briggs</p>
                      </NavLink>
                    </li>
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme3}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Eunice Cortez</p>
                      </NavLink>
                    </li>
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme4}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Emma Hanson</p>
                      </NavLink>
                    </li>
                    <li className=" mb-2 hover:bg-zinc-300 ..., cursor-pointer rounded-lg p-2">
                      <NavLink className="flex gap-3 ">
                        <div className="img w-7">
                          <img
                            src={meme5}
                            className=" rounded-full"
                            alt="profil_photo"
                          />
                        </div>
                        <p className=" text-lg text">Leah Berry</p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex windows_open">
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={meme}
                    className=" rounded-full w-12"
                    alt="profil_photo"
                  />
                  <div>
                    <p className="text-2xl">Dollie Blair</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <GrFormPrevious className="next_next rounded-xl" />
                  <GrFormNext className="next_pre rounded-xl text-white" />
                </div>
              </div>
              <div className="card_swipper overflow-x-hidden mt-6  ">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {data.map((data, id) => (
                    <SwiperSlide key={id}>
                      <BigCard
                        key={data.id}
                        id={data.id}
                        img={data.snippet.thumbnails.high.url}
                        videoId={data.snippet.resourceId.videoId}
                        title={data.snippet.title}
                        author={data.snippet.videoOwnerChannelTitle}
                        published={data.snippet.publishedAt.slice(0, 7)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex justify-between items-center mt-8">
                <p className="text-2xl ">Recommended</p>
                <div>
                  <div className="flex gap-2">
                    <GrFormPrevious className="next_next rounded-xl" />
                    <GrFormNext className="next_pre rounded-xl text-white" />
                  </div>
                </div>
              </div>
              <div className="card_swipper mt-8 overflow-x-hidden ">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {datatwo.map((data, id) => (
                    <SwiperSlide key={id}>
                      <Card
                        key={data.id}
                        id={data.id}
                        videoId={data.id.videoId}
                        img={data.snippet.thumbnails.high.url}
                        title={data.snippet.title}
                        author={data.snippet.videoOwnerChannelTitle}
                        published={data.snippet.publishedAt}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="flex items-center mt-8 gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={apelsin}
                    className=" rounded-full w-12"
                    alt="profil_photo"
                  />
                  <div className="flex items-center gap-3">
                    <p className="text-2xl">Food & Drink</p>
                    <p className=" text-zinc-400">
                      Recommended channel for you
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <GrFormPrevious className="next_next rounded-xl" />
                  <GrFormNext className="next_pre rounded-xl text-white" />
                </div>
              </div>
              <div className="card_swipper  windows_close  overflow-x-hidden">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={5}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {datathree.map((data, id) => (
                    <SwiperSlide key={id}>
                      <BigCardd
                        key={data.id}
                        id={data.id}
                        videoId={data.id.videoId}
                        img={data.snippet.thumbnails.high.url}
                        title={data.snippet.title}
                        author={data.snippet.videoOwnerChannelTitle}
                        published={data.snippet.publishedAt}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="main_box">
        <div className="main_box_items">
          <div className="main_box_items_sass">
            <Swiper
              allowSlideNext={40}
              slidesPerView={maxWidth < 350 ? 1 : 3}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {dataVideos.map((data, id) => (
                <SwiperSlide key={id}>
                  <BigCard
                    key={data.id}
                    id={data.id}
                    img={data.snippet.thumbnails.high.url}
                    videoId={data.snippet.resourceId.videoId}
                    title={data.snippet.title}
                    author={data.snippet.videoOwnerChannelTitle}
                    published={data.snippet.publishedAt.slice(0, 7)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="icons">
          <div className="icons_box">
            <AiOutlineHome className="icons_box_real text-zinc-400" />
            <AiOutlineFire className="icons_box_real text-zinc-400" />
            <MdOutlineSubscriptions className="icons_box_real text-zinc-400" />
            <AiOutlineFolder className="icons_box_real text-zinc-400 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
