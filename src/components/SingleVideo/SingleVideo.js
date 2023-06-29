import React from "react";
import SingleVideoPage from "./SingleVideoPage";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import { useParams } from "react-router-dom";
import { useGetSingleVideoQuery } from "../../features/ApiSlice/apiSlice";

const SingleVideo = () => {
  const { id } = useParams();
  const {
    data: singleVideo,
    isLoading,
    isError,
    error
  } = useGetSingleVideoQuery(id);
  // console.log(singleVideo)
  return (
    <div className="d-flex container">
      <div style={{ minWidth: 400, minHeight:100 }} className="mt-4 w-75">
        {singleVideo && <SingleVideoPage singleVideo={singleVideo} />}
      </div>
      <div className="m-4 w-25 d-none d-sm-block">
        {singleVideo && <RelatedVideos singleVideo={singleVideo} />}
      </div>
    </div>
  );
};

export default SingleVideo;
