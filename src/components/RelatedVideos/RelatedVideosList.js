import React from "react";

const RelatedVideosList = ({ videos }) => {
  const { link, title } = videos;
  return (
    <div>
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p>
        Title: {title}
      </p>
    </div>
  );
};

export default RelatedVideosList;
