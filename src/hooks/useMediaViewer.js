import React, { useState } from "react";
import MediaViewer from "../components/MediaViewer";

function useMediaViewer() {
  const [imgUrl, setImgUrl] = useState("");
  const [visibility, setVisibility] = useState(false);
  const close = () => setVisibility(false);
  const Viewer = () => (
    <MediaViewer imgUrl={imgUrl} visibility={visibility} close={close} />
  );
  return { setImgUrl, setVisibility, Viewer };
}
export default useMediaViewer;
