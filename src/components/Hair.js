import React from "react";

function Hair({ hair, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Hair</h2>
      <div className="list-hair">
        {hair.map((hairImage) => (
          <div className="clickable-square">
            <img
              src={hairImage.source}
              alt=""
              className={hairImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: hairImage.class,
                  avatarSource: hairImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hair;
