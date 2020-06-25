import React, { useState } from "react";

function MediaViewer({ imgUrl, visibility, close }) {
  return (
    <div className={`modal ${(visibility && "is-active") || ""}`}>
      <div className="modal-background" onClick={close} />
      <div className="modal-content">
        <p className="image">
          <img src={imgUrl} alt="" />
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={close}
      />
    </div>
  );
}

export default MediaViewer;
