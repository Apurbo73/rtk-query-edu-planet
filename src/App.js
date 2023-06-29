import React from "react";

import "./App.css";
// import Videos from "./components/Video/Videos";
import { useGetAllVideosQuery } from "./features/ApiSlice/apiSlice";
import Home from "./pages/Home";

function App() {
  const {
    data: allVideos,
    isLoasding,
    isError,
    error
  } = useGetAllVideosQuery();
  console.log(allVideos);
  return (
    <div className="App">
      {allVideos && <Home allVideos={allVideos} />}
    </div>
  );
}

export default App;
