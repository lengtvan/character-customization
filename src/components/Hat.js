import React from "react";

function Hat({ hat, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Hats</h2>
      <div className="list-hats">
        {hat.map((hatImage) => (
          <div className="clickable-square">
            <img
              src={hatImage.source}
              alt=""
              className={hatImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: hatImage.class,
                  avatarSource: hatImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hat;
