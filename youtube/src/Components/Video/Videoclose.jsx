import React from "react";
import Cardwin from "./Cardwin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import dataVideos from "../Home/data";
import "../Video/Video.scss";
import useFatch from "../Home/useData";
// import Cardwin from "./Cardwin";
const Videoclose = () => {
  // console.log(dataVideos);
  const { data } = useFatch("https://youtube-v31.p.rapidapi.com/playlistItems");
  console.log(data);
  return (
    <div>
      <div className=" video_close_open mt-8">
        <div className="title">
          <h3 className=" text-4xl font-bold">Next</h3>
        </div>
        {data.map((data, id) => (
          <Cardwin
            key={id}
            id={data.id}
            img={data.snippet.thumbnails.high.url}
            title={data.snippet.title}
            videoId={data.snippet.resourceId.videoId}
            author={data.snippet.videoOwnerChannelTitle}
            published={data.snippet.publishedAt.slice(0, 7)}
          />
        ))}
      </div>
    </div>
  );
};

export default Videoclose;
