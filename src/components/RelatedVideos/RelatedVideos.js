import React from "react";
import RelatedVideosList from "./RelatedVideosList";
import { useGetRelatedVideosQuery } from "../../features/ApiSlice/apiSlice";

const RelatedVideos = ({ singleVideo }) => {
  const { id, title } = singleVideo;
  const {
    data: relatedVideos,
    isLoading,
    isError,
    error
  } = useGetRelatedVideosQuery({ id, title });
  //decide what to render:
  let content = null;
  if (isLoading) {
    content = <div>Loaading....</div>;
  }
  if (!isLoading && isError) {
    content = <div>Error....</div>;
  }
  if (!isLoading && !isError && relatedVideos.length < 0) {
    content = <div>No Relaed Videos Available</div>;
  }
  if (!isLoading && !isError && relatedVideos.length > 0) {
    content = relatedVideos.map(videos =>
      <RelatedVideosList key={videos.id} videos={videos} />
    );
  }
  return (
    <div>
      {content}
    </div>
  );
};

export default RelatedVideos;
