import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import dataVideos from "../Home/Home";

const useFatch2 = (url) => {
  // const axios = require("axios");

  const [datatwo, setDatatwo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = {
    method: "GET",
    url: url,
    params: {
      relatedToVideoId: "7ghhRHRP6t4",
      part: "id,snippet",
      type: "video",
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
      setDatatwo(response.data.items);
    })
    .catch(function (error) {
      // console.error(error);
    });

  return { datatwo, loading, error };
};

export default useFatch2;
