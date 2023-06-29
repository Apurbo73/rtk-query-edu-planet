import React from 'react';

const Video = ({video}) => {
    console.log(video)
    return (
        <div>
            {video.title}
        </div>
    );
};

export default Video;