import React from "react";

function Eyes({ eyes, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Eyes</h2>
      <div className="list-eyes">
        {eyes.map((eyeImage) => (
          <div className="clickable-square">
            <img
              src={eyeImage.source}
              alt=""
              className={eyeImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: eyeImage.class,
                  avatarSource: eyeImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eyes;
