/* eslint-disable */
import React from "react";
import YouTube from "react-youtube";
// import dataFilm from "../fakeData/datafilm.json";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useQuery } from "react-query";
import { API } from "../config/api";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

function DetailTrailer() {
  // const [data, setData] = useState([]);

  // const state = useContext(UserContext);
  // console.log("state", state);
  const { id } = useParams();
  let { data: films } = useQuery("detailCache", async () => {
    const response = await API.get("/film/" + id);
    console.log("response film", response);
    return response.data.data;
  });

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  // let link = {films?.thumbnailFilm};
  // let videoId = link.slice(-11);

  // function handleVideoReady(event) {
  //   event.target.pauseVideo();
  // }

  // function handleVideoPlay(event) {
  //   props.setIsVideoPlaying("play");
  // }

  // function handleVideoPause(event) {
  //   props.setIsVideoPlaying("pause");
  // }

  return (
    <div
      className="d-flex justify-content-center bg-dark"
      style={{
        backgroundcolor: "black",
      }}
    >
      {/* <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handleVideoReady}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        className="w-100"
        style={{ backgroundColor: "black" }}
      /> */}
      <ReactPlayer
        url={films?.link}
        // height="300%"
        className="w-100"
        // style={{ height: "800px" }}
      />
    </div>
  );
}

export default DetailTrailer;
