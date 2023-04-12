import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import dataVideos from "../Home/Home";

const useFatch = (url) => {
  // const axios = require("axios");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = {
    method: "GET",
    url: url,
    params: { playlistId: "RDZiQo7nAkQHU", part: "snippet", maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": "fc5e453712msha2ff0d47f1a1409p18a87ajsne443a82f1a02",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  // console.log(fetchData);

  axios
    .request(fetchData)
    .then(function (response) {
      setData(response.data.items);
    })
    .catch(function (error) {
      // console.error(error);
    });

  return { data, loading, error };
};

export default useFatch;
