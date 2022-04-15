import React from "react";

function Eyebrows({ eyebrows, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Eyebrows</h2>
      <div className="list-eyebrows">
        {eyebrows.map((eyebrowImage) => (
          <div className="clickable-square">
            <img
              src={eyebrowImage.source}
              alt=""
              className={eyebrowImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: eyebrowImage.class,
                  avatarSource: eyebrowImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyebrows;
