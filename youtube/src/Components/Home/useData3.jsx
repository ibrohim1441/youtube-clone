import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import dataVideos from "../Home/Home";

const useFatch3 = (url) => {
  // const axios = require("axios");

  const [datathree, setDatathree] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = {
    method: "GET",
    url: url,
    params: {
      channelId: "UCBVjMGOIkavEAhyqpxJ73Dw",
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": "fc5e453712msha2ff0d47f1a1409p18a87ajsne443a82f1a02",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  // console.log(fetchData);

  axios
    .request(fetchData)
    .then(function (response) {
      setDatathree(response.data.items);
    })
    .catch(function (error) {
      // console.error(error);
    });

  return { datathree, loading, error };
};

export default useFatch3;
