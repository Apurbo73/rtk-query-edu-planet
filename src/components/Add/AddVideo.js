import React from "react";
import AddVideoForm from "./AddVideoForm";

const AddVideo = () => {
  return (
    <div >
      <div className="container  w-50 mt-5 text-center shadow-lg p-3 mb-5 bg-body rounded">
        <h4>Add New Video</h4>
        <AddVideoForm />
      </div>
    </div>
  );
};

export default AddVideo;
