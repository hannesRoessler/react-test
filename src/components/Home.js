import React from "react";
import useMediaViewer from "../hooks/useMediaViewer";

function Home() {
  const { setImgUrl, setVisibility, Viewer } = useMediaViewer();
  return (
    <>
      <Viewer />
      <div className="title">Home</div>
      <div>Click thumbail to open</div>
      <img
        className="image-thumbnail"
        alt="Lalas"
        src="https://d8z2144xrsaxf.cloudfront.net/2020/03/Amboss-im-Alltag-A%CC%88rztinnen-und-A%CC%88rzte-960x640.jpg"
        onClick={() => {
          setImgUrl(
            "https://d8z2144xrsaxf.cloudfront.net/2020/03/Amboss-im-Alltag-A%CC%88rztinnen-und-A%CC%88rzte-960x640.jpg"
          );
          setVisibility(true);
        }}
      />
    </>
  );
}
export default Home;
