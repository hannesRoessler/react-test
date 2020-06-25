import React, { useState, useEffect } from "react";
import items from "../data/items";
import useMediaViewer from "../hooks/useMediaViewer";

function ItemDetails(props) {
  const { setImgUrl, setVisibility, Viewer } = useMediaViewer();
  const [itemId, setItemId] = useState(1);
  useEffect(() => {
    setItemId(props.match.params.id);
  }, [props.match.params.id]);
  const { title, description, img } = items.find(({ id }) => id == itemId);
  return (
    <div>
      <Viewer />
      <h1 className="title ">{title}</h1>
      <div>{description}</div>
      <img
        className="image-thumbnail"
        src={img}
        alt="This is great"
        onClick={() => {
          setImgUrl(img);
          setVisibility(true);
        }}
      />
    </div>
  );
}
export default ItemDetails;
