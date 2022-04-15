import React from "react";

function Mouth({ mouth, resetAvatar }) {
  return (
    <div className="list-section">
      <h2>Mouth</h2>
      <div className="list-mouths">
        {mouth.map((mouthImage) => (
          <div className="clickable-square">
            <img
              src={mouthImage.source}
              alt=""
              className={mouthImage.class}
              onClick={() => {
                resetAvatar({
                  avatarClass: mouthImage.class,
                  avatarSource: mouthImage.source,
                });
              }}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mouth;
